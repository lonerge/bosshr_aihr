# coding=utf-8
import random
from gevent import pywsgi
from gevent import monkey
monkey.patch_all()
from flask import Flask, render_template, session, request, redirect
from pymongo import MongoClient
import time
import os
import base64
import hmac


app = Flask(__name__, template_folder='.')
app.secret_key = 'loner'


@app.route('/token')
def token():
    values = session.values()
    keys = session.keys()
    print(keys, values)
    user = session.get('user_id')
    if not user:
        return redirect('/login')
    return render_template("bot_web.html")


@app.route('/login', methods=["GET", "POST"])
def login():
    if request.method == 'GET':
        return render_template('boss_login_web.html')
    user = request.form.get('user')
    pwd = request.form.get('pwd')
    if user == 'bosshr' and pwd == 'bosshr':
        print(f'写入session...')
        session['user_id'] = user
        return redirect('/token')
    else:
        return render_template('boss_login_web.html', msg='用户名或密码输入错误')


@app.route('/gen_token')
def gen_token():
    try:
        one_day = 60*60*24
        one_month = 60*60*24*30
        one_year = 60*60*24*30*12
        num = int(request.args.get('num', 1))
        expire = int(request.args.get('expire'))
        if expire == 0:
            expire = 60*60*3
            expire_ = 0
        else:
            expire_ = expire
            expire = expire*one_day
        creator = request.args.get('key', None)
        token_list = []
        for one in range(num):
            temp = generate_token(expire=expire)
            token_list.append(temp)
        token_list = set(token_list)
        token_list = list(token_list)
        res = '\n'.join(token_list)
        mongo_client = None
        for token in token_list:
            temp_dict = {"token": token, "expire_time": expire_, "create_time": int(time.time() * 1000), "is_online": False,
                         "creator": creator, "info": " ", "use_times": 0, "update_time": int(time.time()), "local_token": None}
            db, mongo_client = connect_mongo()
            db.insert_one(temp_dict)
        if mongo_client:
            mongo_client.close()
        return res
    except Exception as e:
        res = f'参数错误: {e}'
    return res


@app.route('/update_status')
def test():
    # 返回fail1: 可能出现多台设备用一个token情况
    # 返回fail2: token不在数据库中
    # fail3: 接口接受的参数异常
    token = request.args.get('token', None)
    local_token = request.args.get('local_token', None)
    update = request.args.get('update', None)
    if token and local_token:
        db, mongo_client = connect_mongo()
        temp = db.find_one({'token': token})
        if temp:
            num = int(temp['use_times']) + 1
            if update == 0 or update == '0':
                db.update_one({'token': token}, {'$set': {'is_online': True, 'use_times': num, "local_token": local_token}})
            elif int(time.time()) - temp['update_time'] < 12:
                return 'fail1'
            else:
                db.update_one({'token': token}, {'$set': {'is_online': True, 'use_times': num, "update_time": int(time.time()), "local_token": local_token}})
            mongo_client.close()
            return 'success'
        else:
            return 'fail2'
    return 'fail3'


def connect_mongo():
    mongo_client = MongoClient(host='43.156.63.82', port=27018)
    boss_bot_db = mongo_client['working_data']['boss_bot']
    return boss_bot_db, mongo_client


def generate_token(key='loner', expire=60):
    # key固定为loner, expire以s为单位
    ts_str = str(time.time() + expire)
    ts_byte = ts_str.encode("utf-8")
    sha1_tshexstr = hmac.new(key.encode("utf-8"), ts_byte, 'sha1').hexdigest()
    token = ts_str + ':' + sha1_tshexstr
    b64_token = base64.urlsafe_b64encode(token.encode("utf-8"))
    return b64_token.decode("utf-8")


if __name__ == '__main__':
    # pid = os.getpid()
    # print(f'进程号为 :{pid}')
    # app.run(host='0.0.0.0', port=12778, threaded=True)

    server = pywsgi.WSGIServer(('0.0.0.0', 12778), app)
    server.serve_forever()
