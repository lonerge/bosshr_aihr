import datetime
import time
import base64
import hmac


def generate_token(key='loner', expire=60):
    # key固定为loner, expire以s为单位
    ts_str = str(time.time() + expire)
    ts_byte = ts_str.encode("utf-8")
    sha1_tshexstr = hmac.new(key.encode("utf-8"), ts_byte, 'sha1').hexdigest()
    token = ts_str + ':' + sha1_tshexstr
    b64_token = base64.urlsafe_b64encode(token.encode("utf-8"))
    return b64_token.decode("utf-8")


def certify_token(token, key='loner'):
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
        print(f'{datetime.datetime.now()} token:{token} verify success')
        return True
    except Exception as e:
        print(f'{datetime.datetime.now()} token:{token} 验证异常: {e}')
        return False


result = generate_token(key='loner', expire=10)
print(result, '\n')


# res = certify_token(key='loner', token='MTY3NzM5ODYyNy4wNDEyNjc6NmE2NDY0ODNjODk3ZTA2NDBiMzIyOWM0MGNkMzkxYTUxNDAzMmU0ZQ==')
# print(res)

res = certify_token('')


