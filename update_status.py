import sys
import time

from pymongo import MongoClient

mongo_client = MongoClient(host='43.156.63.82', port=27018)
boss_bot_db = mongo_client['working_data']['boss_bot']

online = boss_bot_db.find({'is_online': True})
# while True:
for one in online:
    different = int(time.time()) - one['update_time']
    print(f'diff: {different} s')
    if different > 12:
        print(f'更新token: {one["token"]} 状态为not online..')
        boss_bot_db.update_one({'token': one['token']},
                               {'$set': {'is_online': False}})
    else:
        print(f'token : {one["token"]} 无需更新...')

    # print(f'休眠中...')
    # time.sleep(6)
mongo_client.close()
sys.exit()