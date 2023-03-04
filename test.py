import time

import requests
from multiprocessing import Pool


temp = 'MTY3NzY2ODg3OC4zNjE4NDg0OjI0N2JhZjgwOTU4ZThkMTEyOTBiNzhiYmJkOTNjZmEyYTViMjQxNzM=, MTY3NzY2ODg3OC4zNjE5NzE5OmM4MTliNmMxNDc5Yzk2Y2M0N2NhM2M0YmFkMzk2ZmRjMTgzZmEzYjA=, MTY3NzY2ODg3OC4zNjE4ODI0OmM2MTRlZjYyMGQwYTUzNWM2Y2M0Yzk2M2RjNGQyZGU4YjdkY2ZkM2E=, MTY3NzY2ODg3OC4zNjE4NzM2OjRmNjhmZWRhN2QwOTc1OWE5NTE3MWZhODU4N2IwM2JlZTMwOTYwZGQ=, MTY3NzY2ODg3OC4zNjE5NTU2OjE3NDcxZGE3ZTMyYjYwMGI3MzI3MDM2ZjQ0ZmJkN2QxZDFmOTBmNjk=, MTY3NzY2ODg3OC4zNjE5MzEzOmU2OWExYTU5ZjlmYWMwN2RiYjdhMDkyOWJmYzA3ZTllYzc0ZjdjNzU=, MTY3NzY2ODg3OC4zNjE4MTMzOjM5ZTZiMWYyNDQ1NWUzYTBjMjcyMzFkMjM3ZTdiNWYyYTJjODYyYzU=, MTY3NzY2ODg3OC4zNjE5MjM6MWFkMzM4MDJhY2IzNmYzMDYyYWMxN2UzN2UxNzY5MzA4ZGZjOWEyMw==, MTY3NzY2ODg3OC4zNjE5NDczOmFmMTBmNjg1ODU0ZGQ4ZWEyMzQ0OGJmMWQ3YmM0MDUxM2YwMWVjMTU=, MTY3NzY2ODg3OC4zNjE4NTY3OjFmODkxYWRhZGUyMDFlM2EzYjg2ODA4NWQ3YzdiN2E5YjM2M2Y0OTk=, MTY3NzY2ODg3OC4zNjE5MTQ5OjA5OWZhNzMyMDJiYmMwNDc4OWE3OGUwMTU1NzM2MGI3MjU1ZjA4OTg=, MTY3NzY2ODg3OC4zNjE5MzkyOjMxNTUzZTFjNzhjZGE4ZGQ2M2M4YjA4NmM1ODQ4YjUwY2IwZWEzMDI=, MTY3NzY2ODg3OC4zNjE4OTAzOjA3NjVmOTNjMjk0YzFhMjk3MzM3YzU0ODYzMTNhZjc0NDdkYWMxNzM=, MTY3NzY2ODg3OC4zNjE4NjUzOmE2ZTBiOTMxNTU1YjNhMGNjODk3NGU0ZDRiZGU3NzQ5MWQyYzgxY2E=, MTY3NzY2ODg3OC4zNjE4Mjg2OjRkYmY5ZGU3OGMyODAxZWQ2MzdhZjA2ZmJlMmFlODdjNjRlYjllODM=, MTY3NzY2ODg3OC4zNjE5NjM3OjdkYTg1NzVmMGUxNTg5YmY0NzAwYjU5MDc5ODcwNDgwNzgyODQzYWM=, MTY3NzY2ODg3OC4zNjE3NTMyOjU0MTAwMzI4NWFjNzYwOTcxYWRlMmJkOWVkYmQ0ZDRjN2MxYjc5YWU=, MTY3NzY2ODg3OC4zNjE4MzkzOmYzZGU5YTQ0ZjZmYmY0YmU1OGIzNWY1MGY4NjQ2OTgzYzk2ZDgyNjg=, MTY3NzY2ODg3OC4zNjE4OTg0OjlkMmIyZWY2N2Y2Nzc5N2Q3YTJhNTVlYmM4OTg1YjgxY2ZkOTRjMDU=, MTY3NzY2ODg3OC4zNjE5MDY4OjYzM2RkOTE1MjVlMGMwOGVkNjk5M2U3YTFkODZhNTc3NDk0YWY1YWY='

temp_list = temp.split(',')


def test(token):
    global success_num
    global error_num
    global fail_num
    try:
        url = f'http://43.156.63.82:12778/update_status?local_token={110}&update=1&token={token}'
        res = requests.get(url=url, timeout=3)
        if res.status_code == 200:
            print(f'请求成功!!')
            # success_num += 1

        else:
            print(f'请求失败: {res.status_code}')
            # fail_num += 1
    except:
        print(f'请求异常!')
        # error_num += 1


if __name__ == '__main__':
    error_num = 0
    success_num = 0
    fail_num = 0
    pool = Pool(processes=30)
    for i in range(100000):
        for one in temp_list:
            pool.apply_async(test, (one,))
    pool.close()
    pool.join()
        # time.sleep(1)
    # print(f'success: {success_num} fail: {fail_num} error: {error_num}')

