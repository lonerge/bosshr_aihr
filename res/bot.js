$(document).ready(
    web_init(),
    // setTimeout(pre, 18000)
)
function pre() {
    var token = document.getElementById('token').value
    $.ajax({
        url:'/update_status',
        data: {"token": token},
        type: 'GET',
        dataType: 'text',
        success: function (return_data) {
            // console.log("return_data: ", return_data)
            if (return_data === 'no token'){
                alert('请输入token...')
            }
            else if (return_data === 'token expired'){
                alert('token 过期! 3s后退出 请联系管理员')
                quit(1)
            }else if (return_data === 'token is no found'){
                alert('token 来源不明! 3s后退出 请联系管理员')
                quit(0)
            }else if (return_data === 'token unuseful'){
                alert('token 不可用, 3s后退出 请联系管理员')
                quit(0)
            }else if (return_data === 'more devices'){
                alert('只允许一个设备在线!, 3s后退出 ')
                quit(0)
            }else if (return_data === 'need param'){
                alert('缺少参数!, 3s后退出 ')
                quit(1)
            }
            else if (return_data === 'server error'){
                alert('服务端异常! 请联系管理员 ')
            }else{
                console.log(return_data)
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(errorThrown)
            quit(1)
            alert('出现异常, 请稍后重试!')
        }
    })
    timer= setTimeout(pre, 18000)

}
function run() {
    var show = document.getElementById('showResult') //找到存放日志的块
    show.innerHTML = "" // 每次跑清空div内内容
    $("#showResult").append("<div><img src='https://www.intogif.com/resource/image/loading/chrome.gif'></div>");
    $.ajax({
        url:'/run',
        data: '',
        type: 'GET',
        dataType: 'text',
        success: function (data_) {
            console.log(data_)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(errorThrown)
        }
    });
}
function test() {
    var show = document.getElementById('showResult') //找到存放日志的块
    show.innerHTML = "" // 每次跑清空div内内容
    $("#showResult").append("<div><img src='https://www.intogif.com/resource/image/loading/chrome.gif'></div>");
    var hello_num = document.getElementById('hello_num').value
    var filter = document.getElementById('filter').value
    $.ajax({
        url:'/run_test',
        data: {"hello_num": hello_num, "filter": filter},
        type: 'GET',
        dataType: 'text',
        contentType: 'application/json',
        success: function (data_) {
            var show = document.getElementById('showResult') //找到存放日志的块
            show.innerHTML = "" // 每次跑清空div内内容
            console.log(data_)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(errorThrown)
            var show = document.getElementById('showResult') //找到存放日志的块
            show.innerHTML = "" // 每次跑清空div内内容
        }
    });
}

function quit(keep_web) {
    // keep_web: 0/1
    $.ajax({
        url:'/quit',
        data: {"keep_web": keep_web},
        type: 'GET',
        dataType: 'text',
        success: function (data_) {
            console.log(data_)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(errorThrown)
            alert('quit')
        }
    });
}

function init() {
    var show = document.getElementById('showResult') //找到存放日志的块
    show.innerHTML = "" // 每次跑清空div内内容
    $("#showResult").append("<div><img src='https://www.intogif.com/resource/image/loading/chrome.gif'></div>");
    var token = document.getElementById('token').value
    $.ajax({
        url:'/init_account',
        data: {"token": token},
        type: 'GET',
        dataType: 'json',
        success: function (data_) {
            console.log('return_data: ', data_)
            console.log(typeof data_)
            var result = eval(data_)
            if (result['status']==='success'){
                var show = document.getElementById('showResult') //找到存放日志的块
                show.innerHTML = "" // 每次跑清空div内内容
                $("#showResult").append("<div align='center'> 	初始化完成!  </div>");
            }else if (result['status']==='fail'){
                var show = document.getElementById('showResult') //找到存放日志的块
                show.innerHTML = "" // 每次跑清空div内内容
                $("#showResult").append("<div align='center'> 	初始化失败!!  </div>");
            }
            else {
                var show = document.getElementById('showResult') //找到存放日志的块
                show.innerHTML = "" // 每次跑清空div内内容
                alert(result['status'])
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            var show = document.getElementById('showResult') //找到存放日志的块
            show.innerHTML = "" // 每次跑清空div内内容
            alert('初始化异常...请重试..')
        }
    });
}

function web_init() {
    $.ajax({
        url:'/web_init',
        data: '',
        type: 'GET',
        dataType: 'json',
        success: function (data_) {
            var data = eval(data_)
            if (data['token']!=null){
                var token_ele = document.getElementById('token')
                token_ele.value = data['token']
            }else{
            }
            pre()
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('web_init error', errorThrown)
            alert('读取上次设置失败!')
            pre()
        }
    });
}

