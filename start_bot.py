# coding=utf-8
import sys
import json
import traceback
import requests
from flask import Flask, render_template, jsonify, request
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import time
import datetime
import random
import undetected_chromedriver as uc
import os
import re
import threading
import signal
import urllib3
import base64
import hmac
# import logging

# log = logging.getLogger('werkzeug')
# log.disabled = True
urllib3.disable_warnings()

sys_name = sys.platform
if 'win32' in sys_name:
    import winreg  # 和注册表交互
version_re = re.compile(r'^[1-9]\d*\.\d*.\d*')  # 匹配前3位版本号的正则表达式
app = Flask(__name__, template_folder='.', static_folder='', static_url_path='')

random_str = f'{int(time.time())}_{random.randint(1, 9)}{random.randint(1, 9)}{random.randint(1, 9)}'


# 资源文件目录访问
def source_path(relative_path):
    # 是否Bundle Resource
    if getattr(sys, 'frozen', False):
        base_path = sys._MEIPASS
    else:
        base_path = os.path.abspath(".")
    return os.path.join(base_path, relative_path)
# 修改当前工作目录，使得资源文件可以被正确访问


cd = source_path('')
os.chdir(cd)

chrome_web = None
chrome_bot = None
job_headers = None
city_headers = None
running_task = []
server_error = 0
last_update = time.time()


@app.route('/')
def test():
    return render_template("test.html")


@app.route('/index')
def index():
    return render_template("index.html")


@app.route('/hello1')
def hello1():
    return render_template("hello1.html")


@app.route('/hello2')
def hello2():
    return render_template("hello2.html")


@app.route('/favicon.ico')
def favicon():
    return app.send_static_file('favicon.ico')


@app.route('/run_test')
def run_test():
    global running_task
    if len(running_task) > 0:
        return jsonify({"data": None, "status": "请等待上一个任务完成..."})
    running_task.append('hello')
    hello_num = request.args.get('hello_num', None)
    filter_str = request.args.get('filter', None)
    if hello_num:
        temp = re.findall(r'\d', hello_num)
        if temp:
            hello_num = int(''.join(temp))
        else:
            hello_num = 10
    else:
        hello_num = 10
    if filter_str:
        filter_str = filter_str.split(' ')

    print(f'{datetime.datetime.now()} 筛选条件为: {hello_num} {filter_str}')
    if chrome_bot:
        filter_test(chrome_bot, filter_str, hello_num)
    else:
        login_boss()
        filter_test(chrome_bot, filter_str, hello_num)

        # >>>手动添加cookies--test
        # chrome = init_browser(url='https://www.zhipin.com/dongguan/')
        # temp_cookies = input(f'cookies: ')
        # cookies = {one.split('=')[0]: one.split('=')[-1] for one in temp_cookies.split('; ')}
        # chrome.delete_all_cookies()
        # for key in cookies:
        #     try:
        #         chrome.add_cookie({'name': key, 'value': cookies[key]})
        #     except Exception as e:
        #         print(f'{datetime.datetime.now()} 添加cookies失败: {e}')
        # input(f'添加cookies测试1: ')
        # filter_test(chrome, filter_str, hello_num)
        # >>>test

    running_task.clear()
    return 'test'


@app.route('/web_init')
def web_init():
    temp = {'token': None, 'web_choose': None, 'local': None}
    try:
        with open('info.json', 'r', encoding='utf-8')as f:
            data = f.read()
        data = json.loads(data)
        token_ = data['token']
        local = data['find_condition']['local']
        if token_:
            temp['token'] = token_
        else:
            pass

        if len(local['job_list_location']) > 0:
            temp['local'] = local
        else:
            pass
    except:
        pass
    return jsonify(temp)


@app.route('/init_account')
def init():
    global chrome_bot
    global running_task

    if len(running_task) > 0:
        return jsonify({"data": None, "status": "请等待上一个任务完成..."})
    running_task.append('init')
    token_ = request.args.get('token', None)
    if token_ is None:
        message = '请填入token!'
    else:
        message = update_online_status(token_, update=0)
    if message == 'success':
        try:
            if chrome_bot:
                result = init_account_info(chrome_bot)
            else:
                login_boss()
                result = init_account_info(chrome_bot)
            running_task.clear()
            return jsonify(result)
        except:
            print(f'{datetime.datetime.now()} 更新账号参数失败: 未能hook到完整数据包!!')
            message = 'fail'
    else:
        pass
    return_data = {"data": None, "status": message}
    running_task.clear()
    return jsonify(return_data)


@app.route('/quit')
def quit_all():
    global chrome_bot
    global chrome_web
    global running_task
    try:
        keep_web = request.args.get('keep_web', 0)
        print(f'{datetime.datetime.now()} keep_web: {keep_web}')
        if keep_web == 1 or keep_web == '1':
            if chrome_bot:
                chrome_bot.quit()
                running_task.clear()
                print(f'{datetime.datetime.now()} 关闭 chrome_bot')
                return 'quit chrome_bot'
            else:
                return 'quit chrome_bot keep web'
        else:
            if chrome_web:
                chrome_web.quit()
                print(f'{datetime.datetime.now()} 关闭web chrome')
            if chrome_bot:
                chrome_bot.quit()
                running_task.clear()
                print(f'{datetime.datetime.now()} 关闭bot chrome')
            else:
                print(f'{datetime.datetime.now()} 没有bot chrome???')
            os.kill(pid, signal.SIGKILL)
            return 'quit'
    except:
        print(f'关闭 chrome出现异常 :\n{traceback.format_exc()}')
    if 'win32' in sys_name:
        os.kill(pid, signal.SIGINT)
    else:
        os.kill(pid, signal.SIGKILL)
    return 'quit'


@app.route('/update_status')
def update_status():
    global running_task

    token = request.args.get('token', None)
    if token is None or token == '' or token == ' ':
        return 'no token'
    result = verify_token(token)
    return_data = {'success': False, 'message': None}
    if result is True:
        return_data['success'] = True
        return_data['message'] = 'token校验成功!'
        # 再更新token状态: 是否在线
        # 正常查询token使用间隔时间是否正常
        status = update_online_status(token)
        # print(f'{datetime.datetime.now()} status: {status}')
        if status == 'success':
            return status
        else:
            if chrome_bot:
                try:
                    chrome_bot.quit()
                    running_task.clear()
                except:
                    pass
            return status

    elif result is False:
        return_data['success'] = False
        return_data['message'] = 'token unuseful'
    else:
        return_data['success'] = False
        return_data['message'] = 'token expired'
    if chrome_bot:
        try:
            chrome_bot.quit()
            running_task.clear()
        except:
            pass
    return return_data['message']


def update_online_status(token, update=1):
    global server_error
    global last_update

    with open(f'info.json', 'r', encoding='utf-8')as f:
        data = f.read()
    if time.time() - last_update <= 12:
        # 切换页面时候, 可能触发新的请求, 这里过滤掉初始化发的请求
        update = 0

    url = json.loads(data)['update_online'] + f'local_token={random_str}&' + f'update={update}&' + f'token={token}'
    print(f'update: {update}')
    if update == 1:
        for i in range(2):
            last_update = time.time()
            try:
                res = requests.get(url=url, timeout=13)
                if res.status_code == 200:
                    if server_error >= 1:
                        server_error -= 1
                    temp = res.text
                    if temp == 'fail2':
                        return 'token is no found'
                    elif temp == 'fail1':
                        return 'more devices'
                    elif temp == 'fail3':
                        return 'need param'
                    else:
                        return 'success'
                else:
                    break
            except:
                break
        if server_error >= 6:
            return 'server error'
        else:
            server_error += 1
            return 'success'
        # return 'server error'
    else:
        result = verify_token(token)
        if result == 'expired':
            return 'token expired'
        elif result is False:
            return 'token unuseful'
        else:
            for i in range(2):
                try:
                    res = requests.get(url=url, timeout=13)
                    if res.status_code == 200:
                        if server_error >= 1:
                            server_error -= 1
                        temp = res.text
                        if temp == 'fail2':
                            return 'token is no found'
                        elif temp == 'fail1':
                            return 'more devices'
                        elif temp == 'fail3':
                            return 'need param'
                        else:
                            return 'success'
                    else:
                        break
                except:
                    break
            if server_error >= 6:
                return 'server error'
            else:
                server_error += 1
                return 'success'
            # return 'server error'


def start_runner(port_):
    def start_loop(url):
        global chrome_web
        print(f'\033[32m {datetime.datetime.now()} 请在任务完成之后, 再关闭此窗口!!! \033[0m')
        print(f'\033[32m {datetime.datetime.now()} 请在任务完成之后, 再关闭此窗口!!! \033[0m')
        print(f'\033[32m {datetime.datetime.now()} 请在任务完成之后, 再关闭此窗口!!! \033[0m')
        for i in range(2):
            try:
                chrome_web = init_browser(url)
                return True
            except:
                continue
        raise Exception(f'chrome_web 启动失败!!!')
    thread = threading.Thread(target=start_loop, args=[f'http://127.0.0.1:{port_}/index'])
    thread.start()


def init_browser(url=None):
    version_chrome = check_chromedriver()
    opt = uc.ChromeOptions()
    opt.add_argument('--no-first-run --no-service-autorun --password-store=basic')
    print(f'进程号为{os.getpid()}   chrome 正在启动', datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
    if version_chrome:
        version_chrome = re.search(r'(\d+)\.(\d+)\.(\d+)', version_chrome).group(1)
        browser = uc.Chrome(options=opt, version_main=int(version_chrome), enable_cdp_events=True)
    else:
        browser = uc.Chrome(options=opt, enable_cdp_events=True)
    print(f'进程号为{os.getpid()}   chrome 启动成功', datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
    # browser.implicitly_wait(3)
    if url:
        browser.get(url)
    else:
        browser.get('https://www.zhipin.com/')
        time.sleep(random.uniform(1, 2))
        browser.find_element(by='xpath', value='//a[contains(text(), "登录/注册")]').click()
        time.sleep(random.uniform(1, 2))
        if is_element_exist_wait(browser, '//div[contains(text(), "APP扫码登录")]', timeout=2):
            browser.find_element(by='xpath', value='//div[contains(text(), "APP扫码登录")]').click()
            time.sleep(0.5)
            print(f'*** 请完成扫码登录 ***')
        else:
            time.sleep(0.5)
            print(f'*** 请完成扫码登录 ***')

    return browser


def login_boss(url=None, test_temp=False):
    global chrome_bot

    for i in range(2):
        try:
            if url:
                chrome_bot = init_browser(url=url)
            else:
                chrome_bot = init_browser()
            if test_temp is True:
                return chrome_bot
            num = 0
            while True:
                num += 1
                current_url = chrome_bot.current_url
                if 'login' in current_url:
                    if num < 3:
                        print(f'{datetime.datetime.now()} 等待扫码登录完成...')
                    time.sleep(3)
                    continue
                else:
                    print(f'{datetime.datetime.now()} 扫码登录完成!')
                    time.sleep(random.uniform(1, 2))
                    close_icon(chrome_bot)
                    return chrome_bot
        except SystemError or SystemExit:
            print(f'{datetime.datetime.now()} 执行退出!! \n\n')
            return None
        except:
            print(f'{datetime.datetime.now()} 启动Chrome失败!! \n\n')
            print(f'{traceback.format_exc()}')
            continue
    raise Exception(f'启动Chrome, 失败!! 请检查')


def filter_test(chrome, filter_str, hello_num):
    chrome.get(url='https://www.zhipin.com/web/chat/recommend')
    time.sleep(random.uniform(1.5, 3))
    close_icon(chrome)
    # if is_element_exist_wait(chrome, '//*[contains(text(), "知道了")]'):
    #     try_click(chrome, '//*[contains(text(), "知道了")]')
    #     print(f'{datetime.datetime.now()} 外部 点击知道了...')

    for i in range(6):
        if i >= 4:
            raise Exception(f'未找到iframe...')
        elif is_element_exist_wait(chrome, '//iframe[@name="recommendFrame"]', timeout=1):
            in_or_out_iframe(chrome, target='in')
            time.sleep(random.uniform(0.5, 1))
            break
        else:
            print(f'{datetime.datetime.now()} 查看是否存在iframe...')
            continue
    # 寻找该账号的全部职位列表, 平均打招呼数量,
    job_eles = chrome.find_elements(by='xpath', value='//*[@class="job-list"]/li')
    index = 0
    error_num = 0
    for ele in job_eles:
        index += 1
        close_icon(chrome)
        time.sleep(random.uniform(0.5, 1))
        if error_num >= 3:
            print(f'打招呼出现3次异常! 请检查是否存在验证码!!!')
            time.sleep(10)
        if is_element_exist_wait(chrome, '//*[contains(text(), "知道了")]'):
            try_click(chrome, '//*[contains(text(), "知道了")]')
            print(f'{datetime.datetime.now()} 内部 点击知道了...')
            time.sleep(random.uniform(0.5, 1))
        if index == 1:
            print(f'{datetime.datetime.now()} 选择职位: {index}')
        else:
            # 遍历点击每一条职位, 选好筛选条件
            try_click(chrome, '//*[@id="headerWrap"]//*[@class="ui-dropmenu-label"]')
            print(f'{datetime.datetime.now()} 选择职位..')
            time.sleep(random.uniform(1, 2))
            try:
                ele.click()
                print(f'{datetime.datetime.now()} 选择职位: {index}')
                time.sleep(random.uniform(1, 2))
            except Exception as e:
                print(f'{datetime.datetime.now()} 选择职位异常: {e}')
                continue
        # 浏览每个人, 查看是否符合条件
        try:
            say_hello(chrome, filter_str, hello_num, index)
        except:
            print(f'打招呼出现异常: {traceback.format_exc()}\n')
            # input(f'test异常: ')
            error_num += 1
            continue

    # 打完招呼切换回到默认框架
    in_or_out_iframe(chrome, target='out')
    return 'success'


def say_hello(chrome, filter_str, hello_num, job_index):
    if is_element_exist_wait(chrome, '//*[contains(@class, "recommend-card-list")]//li//*[@class="name"]', timeout=2):
        if is_element_exist_wait(chrome, '//*[@class="card-feature-wrapper"]'):
            # 横幅广告, 宽80
            js = 'window.scrollBy(0,80)'
            chrome.execute_script(js)
            print(f'{datetime.datetime.now()} 下滑80...')
            time.sleep(random.uniform(0.5, 1))
        else:
            pass
    person_index = 0
    useless_num = 0
    for i in range(100):
        # 当前页面所有人
        people = chrome.find_elements(by='xpath', value='//*[contains(@class, "recommend-card-list")]//div[@class="candidate-card-wrap"]')
        for person in people:
            height = int(person.size.get('height'))
            person_index += 1
            if person_index == 1:
                js = 'window.scrollBy(0,-100)'
                chrome.execute_script(js)
                print(f'{datetime.datetime.now()} 上滑100...')
                time.sleep(1)
            if useless_num > 3:
                print(f'{datetime.datetime.now()} 第{job_index}条职位打招呼权益消耗完毕!')
                return True
            if hello_num <= 0:
                print(f'{datetime.datetime.now()} 第{job_index}条职位打招呼完成!!')
                return True
            # if is_element_exist_wait(chrome, '//*[@class="push-anonymous-geek-card"]', timeout=2):
            #     js = 'window.scrollBy(0,50)'
            #     chrome.execute_script(js)
            #     print(f'{datetime.datetime.now()} 下滑50')
            #     time.sleep(random.uniform(1, 2))

            if is_element_exist_wait(chrome, '//*[@class="no-data-refresh"]', timeout=2):
                if person_index > len(people):
                    print(f'{datetime.datetime.now()} 没有更多牛人了..')
                    return True
                # else:
                #     print(f'{datetime.datetime.now()} 没有更多牛人了..')
            name_ele = chrome.find_element(by='xpath', value=f'(//*[contains(@class, "recommend-card-list")]//*[@class="name"])[{person_index}]')
            name = name_ele.text
            # name_ele.click()
            # person_ele.click()
            click_can = person.is_enabled()
            if click_can:
                person.click()
                print(f'{datetime.datetime.now()} 点击第{person_index}个人! ')
                time.sleep(random.uniform(1, 2))
            else:
                print(f'{datetime.datetime.now()} 第{person_index}个人无法点击!!')
                continue
            # if is_element_exist_wait(chrome, '//div[@class="boss-popup__close"]//i[@class="icon-close"]', timeout=1):
            #     print(f'{datetime.datetime.now()} 查看打招呼权益是否消耗完毕..')
            #     close_icon(chrome)
            #     useless_num += 1
            #     time.sleep(random.uniform(1, 2))
            if is_element_exist_wait(chrome, '//*[@class="resume-item-content"]', timeout=2):
                detail_ele = person.find_element(by='xpath', value='//*[@class="resume-item-content"]')
                detail = detail_ele.text
                # print(f'{datetime.datetime.now()} 详细信息: {detail}\n')
                # 打招呼
                if filter_str:
                    for condition in filter_str:
                        if condition in detail:
                            if is_element_exist_wait(chrome, '//*[@class="resume-item-detail"]//button[contains(text(), "打招呼")]', timeout=1):
                                chrome.find_element(by='xpath',
                                                    value='//*[@class="resume-item-detail"]//button[contains(text(), "打招呼")]').click()
                                print(f'{datetime.datetime.now()} 向 {name} 发起打招呼..')
                                hello_num -= 1
                                break
                            else:
                                break
                        else:
                            continue
                else:
                    if is_element_exist_wait(chrome, '//*[@class="resume-item-detail"]//button[contains(text(), "打招呼")]',
                                             timeout=1):
                        chrome.find_element(by='xpath', value='//*[@class="resume-item-detail"]//button[contains(text(), "打招呼")]').click()
                        print(f'{datetime.datetime.now()} 向 {name} 发起打招呼..')
                        hello_num -= 1
            time.sleep(1)
            print(f'{datetime.datetime.now()} 查看打招呼权益是否消耗完毕..')
            in_or_out_iframe(chrome, target='out')
            result = close_icon(chrome)
            if result is True:
                useless_num += 1
            in_or_out_iframe(chrome, target='in')
            time.sleep(1)
            if is_element_exist_wait(chrome, '//*[@class="resume-custom-close"]', timeout=1):
                try_click(chrome, '//*[@class="resume-custom-close"]')
                print(f'{datetime.datetime.now()} 叉掉人物详情')
            # 每次浏览一个人, 浏览完毕向下滑动180
            js = f'window.scrollBy(0,{int(height)})'
            chrome.execute_script(js)
            print(f'{datetime.datetime.now()} 下滑{int(height)}')
            time.sleep(random.uniform(1, 2))
        continue


def in_or_out_iframe(chrome, target='in'):
    try:
        if target == 'in':
            print(f'{datetime.datetime.now()} 切换iframe成功!')
            chrome.switch_to.frame(chrome.find_element(by='xpath', value='//iframe[@name="recommendFrame"]'))
        else:
            print(f'{datetime.datetime.now()} 切换回默认内容!')
            chrome.switch_to.default_content()
        return True
    except Exception as e:
        print(f'{datetime.datetime.now()} 切换iframe失败: {e}')
        return False


def get_prompt(chrome):
    # 可能需要的步骤
    # 点击聊天
    # 点击沟通中(存在有效对话, 即有互相回复)
    # 遍历联系人列表, 逐个点击聊天, 标记聊天数据包, 保存覆盖与此人的聊天数据
    # 点击不在当前页面的联系人时, 可能需要滑动鼠标滚轮
    # pass
    # chrome = login_boss()
    # if is_element_exist_wait(chrome)
    for index in range(3):
        if is_element_exist_wait(chrome, '//div[@class="boss-popup__close"]//i[@class="icon-close"]'):
            chrome.find_element(by='xpath', value='//div[@class="boss-popup__close"]//i[@class="icon-close"]').click()
            print(f'{datetime.datetime.now()} 叉掉广告...')
            break
        else:
            print(f'{datetime.datetime.now()} 查看是否存在广告...')
            time.sleep(0.5)
            continue
    chrome.find_element(by='xpath', value='//*[@class="menu-chat"]').click()
    print(f'{datetime.datetime.now()} 点击侧边栏: 沟通...')
    chrome.find_element(by='xpath', value='//*[@title="沟通中"]').click()
    print(f'{datetime.datetime.now()} 点击沟通中...')
    if is_element_exist_wait(chrome, '//*[@class="user-container"]//div[@role="group"]'):
        print(f'{datetime.datetime.now()} 找到用户群组...')
        user_eles = chrome.find_elements(by='xpath', value='//*[@class="user-container"]//div[@role="group"]/div')
        for ele in user_eles:
            pass

    input(f'test: ')


def init_account_info(chrome):
    chrome.add_cdp_listener('*', catch_data)
    chrome.add_cdp_listener('Network.requestWillBeSent', catch_data)
    chrome.add_cdp_listener('Network.dataReceived', catch_data)
    print(f'{datetime.datetime.now()} 开启hook...\n')
    chrome.get('https://www.zhipin.com/web/chat/recommend')
    for i in range(10):
        if job_headers and city_headers:
            break
        else:
            # 获取该账号发布所有的职位信息, 等待5s, 获取数据包
            time.sleep(0.5)
    # 初始化账号的基本信息
    print(f'{datetime.datetime.now()} 开始初始化账号...\n')
    close_icon(chrome)
    chrome.clear_cdp_listeners()
    jobs = None
    temp_list = [':authority', ':path', ':method', ':scheme']
    if job_headers:
        print(f'{datetime.datetime.now()} 开始获取到发布的所有职位...\n')
        url = f'https://www.zhipin.com/wapi/zpjob/job/recJobList?_={int(time.time()*1000)}'
        if ':authority' in job_headers.keys():
            job_headers['authority'] = job_headers[':authority']
        for one in temp_list:
            if one in job_headers.keys():
                del job_headers[one]
        res_jobs = simple_get(url=url, headers=job_headers)
        try:
            jobs = json.loads(res_jobs)['zpData']['onlineJobList']
            print(f'{datetime.datetime.now()} 获取到发布的所有职位! \n\n')
        except Exception as e:
            print(f'{datetime.datetime.now()} 获取发布的所有职位失败: {traceback.format_exc()}')
            pass
    if city_headers and jobs:
        jobs_city = []
        job_list_location = []
        print(f'{datetime.datetime.now()} 开始获取所有职位对应的城市列表\n'
              f'')
        for job in jobs:
            temp_dict = {"job_name": None, "job_citys": []}
            if 'jobName' in job.keys() and 'salaryDesc' in job.keys():
                job_name = job['jobName'] + ' ' + job['salaryDesc']
            else:
                job_name = job['jobName']
            temp_dict["job_name"] = job_name
            url_ = f'https://www.zhipin.com/wapi/zpjob/job/f1/select/job/citys?encryptJobId={job["encryptId"]}&_={int(time.time()*1000)}'
            if ':authority' in city_headers.keys():
                city_headers['authority'] = city_headers[':authority']
            for one in temp_list:
                if one in city_headers.keys():
                    del city_headers[one]
            res_city = simple_get(url=url_, headers=city_headers)
            try:
                temp = []
                city_list = json.loads(res_city)['zpData']['businessDistrict'][0]['subLevelModelList']
                for one in city_list:
                    temp.append(one['name'])
                jobs_city = temp
                print(f'{datetime.datetime.now()} 拿到职位对应的城市列表!\n')
            except:
                jobs_city = []
                print(f'{datetime.datetime.now()} 拿职位对应城市列表异常: {traceback.format_exc()}')
            temp_dict["job_citys"] = jobs_city
            job_list_location.append(temp_dict)
            time.sleep(0.5)
        with open('info.json', 'r', encoding='utf-8')as file:
            old_data = file.read()
        old_data = json.loads(old_data)
        old_data['find_condition']['local']['job_list_location'] = job_list_location
        old_data['find_condition']['local']['update_time'] = int(time.time()*1000)
        with open('info.json', 'w', encoding='utf-8')as file_:
            file_.write(json.dumps(old_data, ensure_ascii=False))
        print(f'{datetime.datetime.now()} 更新账号参数成功!')
        return_data = {"data": job_list_location, "status": 'success'}
        return return_data
    else:
        print(f'{datetime.datetime.now()} 更新账号参数失败: 未能hook到完整数据包!!')
        with open(f'info.json', 'r', encoding='utf-8')as file:
            data = file.read()
        data = json.loads(data)['find_condition']['default']
        return_data = {"data": data, "status": 'fail'}
        print(f'return_data: {return_data}')

        return return_data


def simple_get(url, headers, cookies=None):
    for i in range(2):
        try:
            if cookies:
                res = requests.get(url=url, headers=headers, cookies=cookies)
            else:
                res = requests.get(url=url, headers=headers)
            if res.status_code < 300:
                print(f'{datetime.datetime.now()} {url} 请求成功!')
                return res.text
            else:
                print(f'{datetime.datetime.now()} 请求异常: {res.status_code} {res.text}')
        except Exception as e:
            print(f'{datetime.datetime.now()} 请求出错: {traceback.format_exc()}\n')
            time.sleep(0.5)
            continue
    print(f'{datetime.datetime.now()} {url} 请求失败!!')
    return None


def catch_data(message):
    global job_headers
    global city_headers
    temp = str(message)
    if 'recJobList' in temp and 'requestWillBeSentExtraInfo' in temp:
        try:
            message = dict(message)
            job_headers = message['params']['headers']
            print(f'{datetime.datetime.now()} 找到job_headers\n')
        except Exception as e:
            print(f'{datetime.datetime.now()} 解析职位数据包出错: {e}')
    elif 'select/job/citys' in temp and 'requestWillBeSentExtraInfo' in temp:
        try:
            message = dict(message)
            city_headers = message['params']['headers']
            print(f'{datetime.datetime.now()} 找到city_headers\n')
        except Exception as e:
            print(f'{datetime.datetime.now()} 解析职位对应城市数据包出错: {e}')
    else:
        # print(f'{datetime.datetime.now()} 无关log, pass...')
        pass


def close_icon(chrome):
    # 叉掉弹窗广告
    for index in range(2):
        if is_element_exist_wait(chrome, '//div[@class="boss-popup__close"]//i[@class="icon-close"]'):
            try_click(chrome, '//div[@class="boss-popup__close"]//i[@class="icon-close"]')
            print(f'{datetime.datetime.now()} 叉掉广告...')
            return True
        else:
            print(f'{datetime.datetime.now()} 查看是否存在广告...')
            continue
    return False


def is_element_exist_wait(driver, xpath, timeout=1):
    """
    显示等待：判断元素是否存在
    :param xpath: xpath语法
    :return: true or false
    """
    try:
        wait = WebDriverWait(driver, timeout=timeout, poll_frequency=0.5)
        wait.until(EC.presence_of_element_located(
            (By.XPATH, xpath)))
        return True
    except:
        return False


def try_click(chrome, xpath):
    try:
        chrome.find_element(by='xpath', value=xpath).click()
        return True
    except:
        return False


def check_chromedriver():
    print(f'\033[31m {datetime.datetime.now()} 开始检查Chrome环境, 请稍后...... \033[0m')
    if 'win32' in sys_name:
        try:
            # 从注册表中获得版本号
            key = winreg.OpenKey(winreg.HKEY_CURRENT_USER, r'Software\Google\Chrome\BLBeacon')
            _v, type = winreg.QueryValueEx(key, 'version')
            target = version_re.findall(_v)[0]
            print(f'{datetime.datetime.now()} 找到当前电脑中的chrome: {_v}')  # 这步打印会在命令行窗口显示
            return target  # 返回前3位版本号
        except WindowsError as e:
            print('请下载最新版chrome后, 再重新打开!')
            print(f'下载地址: https://www.iplaysoft.com/tools/chrome/')
    else:
        print('非win系统跳过检查...')
        return None


def test_code():
    chrome = init_browser(url='https://www.zhipin.com/dongguan/')
    temp_cookies = input(f'cookies: ')
    cookies = {one.split('=')[0]: one.split('=')[-1] for one in temp_cookies.split('; ')}
    chrome.delete_all_cookies()
    for key in cookies:
        try:
            chrome.add_cookie({'name': key, 'value': cookies[key]})
        except Exception as e:
            print(f'{datetime.datetime.now()} 添加cookies失败: {e}')
    input(f'添加cookies测试1: ')


def verify_token(token, key='loner'):
    try:
        token_str = base64.urlsafe_b64decode(token).decode('utf-8')
        token_list = token_str.split(':')
        if len(token_list) != 2:
            return False
        ts_str = token_list[0]
        if float(ts_str) < time.time():
            # token expired
            print(f'{datetime.datetime.now()} token:{token} expired')
            return 'expired'
        known_sha1_tsstr = token_list[1]
        sha1 = hmac.new(key.encode("utf-8"), ts_str.encode('utf-8'), 'sha1')
        calc_sha1_tsstr = sha1.hexdigest()
        if calc_sha1_tsstr != known_sha1_tsstr:
            # token certification failed
            print(f'{datetime.datetime.now()} token:{token} verify failed')
            return False
        # token certification success
        # print(f'{datetime.datetime.now()} token:{token} verify success')
        return True
    except Exception as e:
        print(f'{datetime.datetime.now()} token:{token} 验证异常: {e}')
        return False


if __name__ == '__main__':
    pid = os.getpid()
    print(f'进程号为 :{pid}')
    port = int(f'127{random.randint(3, 9)}{random.randint(3, 9)}')
    start_runner(port)
    # app.run(port=12777, threaded=False, processes=3)
    app.run(port=port, threaded=True)


    # test_code()


