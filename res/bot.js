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
                alert('token 过期! 请更换token!!')
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
    $("#showResult").append("<div><img src='https://www.intogif.com/resource/image/loading/chrome.gif' height='40px' width='40px'></div>");
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
    $("#showResult").append("<div><img src='https://www.intogif.com/resource/image/loading/chrome.gif' height='40px' width='40px'></div>");
//    var hello_num = document.getElementById('hello_num').value
//    var filter = document.getElementById('filter').value
    $.ajax({
        url:'/run_test',
        data: '',
        type: 'GET',
        dataType: 'text',
        contentType: 'application/json; charset=utf-8',
        success: function (data_) {
            var show = document.getElementById('showResult') //找到存放日志的块
            show.innerHTML = "" // 每次跑清空div内内容
            console.log(data_)
            alert('本次打招呼完成!')

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
    $("#showResult").append("<div><img src='https://www.intogif.com/resource/image/loading/chrome.gif' height='40px' width='40px'></div>");
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
//                  alert('初始化完成!')
                var show = document.getElementById('showResult') //找到存放日志的块
                show.innerHTML = "" // 每次跑清空div内内容
                $("#showResult").append("<div align='center'> 	初始化完成!  </div>");
                load_hello2(result['data'])

                alert('初始化完成!')


            }else if (result['status']==='fail'){
                var show = document.getElementById('showResult') //找到存放日志的块
                show.innerHTML = "" // 每次跑清空div内内容
                $("#showResult").append("<div align='center'> 	初始化失败!!  </div>");
                alert('初始化失败!')

//                  alert('初始化失败!')

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

function save_changes() {
    let token = document.getElementById('token').value
    let change1 = localStorage.getItem('cc')
    console.log('change1: ', change1)

    let change2 = JSON.stringify(get_hello2_changes())
//    console.log('change2: ', change2)
    let all_changes = {"change1": change1, "change2": change2}
//    let change_data = JSON.parse(all_changes)
//    change_data.change1.token = token
//    all_changes.change1.token = token
    $.ajax({
        url:'/save_changes',
        data: all_changes,
        type: 'GET',
        dataType: 'text',
        contentType: 'application/json; charset=utf-8',
        success: function (data_) {
            console.log('save_changes: ', data_)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('save_changes error', errorThrown)
            alert('保存失败! 服务异常!!')
        }
    });
}


function load_hello1_changes() {
        $.ajax({
            url:'/load_hello1_changes',
            data: '',
            type: 'GET',
            dataType: 'json',
            success: function (data_) {
                if(data_ != null){
                    console.log('save_changes: ', data_)
    //                开启牛人打招呼
                    var kq = document.getElementById('kq');
                    //优先打招呼
                    var yx = document.getElementById('yx');
                    //不与同事沟通过的打招呼
                    var ts = document.getElementById('ts');
                    //优先与不消耗沟通权益的牛人打招呼
                    var bxh = document.getElementById('bxh');
                    //权益上限自动下一贴
                    var qy = document.getElementById('qy');
                    //次数完成后自动下一贴
                    var cs = document.getElementById('cs');
                    //推荐牛人
                    var tj = document.getElementById('tj');
                    //新牛人
                    var x = document.getElementById('x');
                    //看过我
                    var kg = document.getElementById('kg');

                    /* 经验要求 */
                    /* 获取元素 */
                    //不限
                    var jy1 = document.getElementById('jy1');
                    //多选
                    var jy2 = document.getElementById('jy2');
                    //在校/应届
                    var jy3 = document.getElementById('jy3');
                    //一年以内
                    var jy4 = document.getElementById('jy4');
                    //1-3年
                    var jy5 = document.getElementById('jy5');
                    //3-5年
                    var jy6 = document.getElementById('jy6');
                    //5-10年
                    var jy7 = document.getElementById('jy7');
                    //10年以上
                    var jy8 = document.getElementById('jy8');

                    /* 学历要求 */
                    /* 获取元素 */
                    //不限
                    var xl1 = document.getElementById('xl1');
                    //多选
                    var xl2 = document.getElementById('xl2');
                    //初中及以下
                    var xl3 = document.getElementById('xl3');
                    //中专/中技
                    var xl4 = document.getElementById('xl4');
                    //高中
                    var xl5 = document.getElementById('xl5');
                    //大专
                    var xl6 = document.getElementById('xl6');
                    //本科
                    var xl7 = document.getElementById('xl7');
                    //硕士
                    var xl8 = document.getElementById('xl8');
                    //博士
                    var xl9 = document.getElementById('xl9');
                    //全日制
                    var xl10 = document.getElementById('xl10');

                    /* 薪资待遇 */
                    /* 获取元素 */
                    //不限
                    var xz1 = document.getElementById('xz1');
                    //多选
                    var xz2 = document.getElementById('xz2');
                    //3k以下
                    var xz3 = document.getElementById('xz3');
                    //3-5k
                    var xz4 = document.getElementById('xz4');
                    //5-10k
                    var xz5 = document.getElementById('xz5');
                    //10-20k
                    var xz6 = document.getElementById('xz6');
                    //20-50k
                    var xz7 = document.getElementById('xz7');
                    //50k以上
                    var xz8 = document.getElementById('xz8');

                    /* 求职意向 */
                    /* 获取元素 */
                    //不限
                    var qz1 = document.getElementById('qz1');
                    //多选
                    var qz2 = document.getElementById('qz2');
                    //离职-随时到岗
                    var qz3 = document.getElementById('qz3');
                    //在职-暂不考虑
                    var qz4 = document.getElementById('qz4');
                    //在职-考虑机会
                    var qz5 = document.getElementById('qz5');
                    //在职-月内到岗
                    var qz6 = document.getElementById('qz6');

                    /* 简历关键字匹配 */
                    /* 获取元素 */
                    var dd = document.getElementById('dd');

                    /* VIP筛选条件 */
                    /* 获取元素 */
                    //年龄
                    var nl1 = document.getElementById('nl1');
                    var nl2 = document.getElementById('nl2');
                    var nl3 = document.getElementById('nl3');
                    var nl4 = document.getElementById('nl4');
                    //性别
                    var xb1 = document.getElementById('xb1');
                    var xb2 = document.getElementById('xb2');
                    var xb3 = document.getElementById('xb3');
                    //是否与同事交换简历
                    var jh1 = document.getElementById('jh1');
                    var jh2 = document.getElementById('jh2');
                    //近期没有看过
                    var jq1 = document.getElementById('jq1');
                    var jq2 = document.getElementById('jq2');
                    //跳槽频率
                    var tc1 = document.getElementById('tc1');
                    var tc2 = document.getElementById('tc2');
                    var tc3 = document.getElementById('tc3');
                    //活跃度
                    var hy1 = document.getElementById('hy1');
                    var hy2 = document.getElementById('hy2');
                    var hy3 = document.getElementById('hy3');
                    var hy4 = document.getElementById('hy4');
                    var hy5 = document.getElementById('hy5');
                    var hy6 = document.getElementById('hy6');
                    var hy7 = document.getElementById('hy7');
                    //院校
                    var yx1 = document.getElementById('yx1');
                    var yx2 = document.getElementById('yx2');
                    var yx3 = document.getElementById('yx3');
                    var yx4 = document.getElementById('yx4');
                    var yx5 = document.getElementById('yx5');
                    var yx6 = document.getElementById('yx6');
                    var yx7 = document.getElementById('yx7');
                    //专业
                    var zy1 = document.getElementById('zy1');
                    var zy2 = document.getElementById('zy2');
                    var zy3 = document.getElementById('zy3');
                    var zy4 = document.getElementById('zy4');
                    var zy5 = document.getElementById('zy5');
                    var zy6 = document.getElementById('zy6');
                    var zy7 = document.getElementById('zy7');

                    let cc_all = eval(data_)
                    let cc = cc_all['hello1']

                    kq.checked = cc.kq;
                    yx.checked = cc.yx;
                    bxh.checked = cc.bxh;
                    ts.checked = cc.ts;
                    qy.checked = cc.qy;
                    cs.checked = cc.cs;
                    tj.checked = cc.tj;
                    x.checked = cc.x;
                    kg.checked = cc.kg;

                    jy1.checked = cc.jy1;
                    jy2.checked = cc.jy2;
                    jy3.checked = cc.jy3;
                    jy4.checked = cc.jy4;
                    jy5.checked = cc.jy5;
                    jy6.checked = cc.jy6;
                    jy7.checked = cc.jy7;
                    jy8.checked = cc.jy8;

                    xl1.checked = cc.xl1;
                    xl2.checked = cc.xl2;
                    xl3.checked = cc.xl3;
                    xl4.checked = cc.xl4;
                    xl5.checked = cc.xl5;
                    xl6.checked = cc.xl6;
                    xl7.checked = cc.xl7;
                    xl8.checked = cc.xl8;
                    xl9.checked = cc.xl9;
                    xl10.checked = cc.xl10;

                    xz1.checked = cc.xz1;
                    xz2.checked = cc.xz2;
                    xz3.checked = cc.xz3;
                    xz4.checked = cc.xz4;
                    xz5.checked = cc.xz5;
                    xz6.checked = cc.xz6;
                    xz7.checked = cc.xz7;
                    xz8.checked = cc.xz8;

                    qz1.checked = cc.qz1;
                    qz2.checked = cc.qz2;
                    qz3.checked = cc.qz3;
                    qz4.checked = cc.qz4;
                    qz5.checked = cc.qz5;
                    qz6.checked = cc.qz6;

                    dd.value = cc.dd;

                    nl1.checked = cc.nl1;
                    nl2.checked = cc.nl2;
                    nl3.value = cc.nl3;
                    nl4.value = cc.nl4;

                    xb1.checked = cc.xb1;
                    xb2.checked = cc.xb2;
                    xb3.checked = cc.xb3;

                    jh1.checked = cc.jh1;
                    jh2.checked = cc.jh2;

                    jq1.checked = cc.jq1;
                    jq2.checked = cc.jq2;

                    tc1.checked = cc.tc1;
                    tc2.checked = cc.tc2;
                    tc3.checked = cc.tc3;

                    hy1.checked = cc.hy1;
                    hy2.checked = cc.hy2;
                    hy3.checked = cc.hy3;
                    hy4.checked = cc.hy4;
                    hy5.checked = cc.hy5;
                    hy6.checked = cc.hy6;
                    hy7.checked = cc.hy7;

                    yx1.checked = cc.yx1;
                    yx2.checked = cc.yx2;
                    yx3.checked = cc.yx3;
                    yx4.checked = cc.yx4;
                    yx5.checked = cc.yx5;
                    yx6.checked = cc.yx6;
                    yx7.checked = cc.yx7;

                    zy1.checked = cc.zy1;
                    zy2.checked = cc.zy2;
                    zy3.checked = cc.zy3;
                    zy4.checked = cc.zy4;
                    zy5.checked = cc.zy5;
                    zy6.checked = cc.zy6;
                    zy7.checked = cc.zy7;
                    if (jy3.checked === true) {
                        jy2.checked = true;
                        jy3.checked = true;
                        jy3.disabled = false;
                        jy4.disabled = false;
                        jy5.disabled = false;
                        jy6.disabled = false;
                        jy7.disabled = false;
                        jy8.disabled = false;
                    }
                    if (jy4.checked === true) {
                        jy2.checked = true;
                        jy4.checked = true;
                        jy3.disabled = false;
                        jy4.disabled = false;
                        jy5.disabled = false;
                        jy6.disabled = false;
                        jy7.disabled = false;
                        jy8.disabled = false;
                    }
                    if (jy5.checked === true) {
                        jy2.checked = true;
                        jy5.checked = true;
                        jy3.disabled = false;
                        jy4.disabled = false;
                        jy5.disabled = false;
                        jy6.disabled = false;
                        jy7.disabled = false;
                        jy8.disabled = false;
                    }
                    if (jy6.checked === true) {
                        jy2.checked = true;
                        jy6.checked = true;
                        jy3.disabled = false;
                        jy4.disabled = false;
                        jy5.disabled = false;
                        jy6.disabled = false;
                        jy7.disabled = false;
                        jy8.disabled = false;
                    }
                    if (jy7.checked === true) {
                        jy2.checked = true;
                        jy7.checked = true;
                        jy3.disabled = false;
                        jy4.disabled = false;
                        jy5.disabled = false;
                        jy6.disabled = false;
                        jy7.disabled = false;
                        jy8.disabled = false;
                    }
                    if (jy8.checked === true) {
                        jy2.checked = true;
                        jy8.checked = true;
                        jy3.disabled = false;
                        jy4.disabled = false;
                        jy5.disabled = false;
                        jy6.disabled = false;
                        jy7.disabled = false;
                        jy8.disabled = false;
                    }

                    if (xl3.checked === true) {
                        xl2.checked = true;
                        xl3.checked = true;
                        xl3.checked = false;
                        xl3.disabled = false;
                        xl4.disabled = false;
                        xl5.disabled = false;
                        xl6.disabled = false;
                        xl7.disabled = false;
                        xl8.disabled = false;
                        xl9.disabled = false;
                        xl10.disabled = false;
                    }
                    if (xl4.checked === true) {
                        xl2.checked = true;
                        xl4.checked = true;
                        xl3.disabled = false;
                        xl4.disabled = false;
                        xl5.disabled = false;
                        xl6.disabled = false;
                        xl7.disabled = false;
                        xl8.disabled = false;
                        xl9.disabled = false;
                        xl10.disabled = false;
                    }
                    if (xl5.checked === true) {
                        xl2.checked = true;
                        xl5.checked = true;
                        xl3.disabled = false;
                        xl4.disabled = false;
                        xl5.disabled = false;
                        xl6.disabled = false;
                        xl7.disabled = false;
                        xl8.disabled = false;
                        xl9.disabled = false;
                        xl10.disabled = false;
                    }
                    if (xl6.checked === true) {
                        xl2.checked = true;
                        xl6.checked = true;
                        xl3.disabled = false;
                        xl4.disabled = false;
                        xl5.disabled = false;
                        xl6.disabled = false;
                        xl7.disabled = false;
                        xl8.disabled = false;
                        xl9.disabled = false;
                        xl10.disabled = false;
                    }
                    if (xl7.checked === true) {
                        xl2.checked = true;
                        xl7.checked = true;
                        xl3.disabled = false;
                        xl4.disabled = false;
                        xl5.disabled = false;
                        xl6.disabled = false;
                        xl7.disabled = false;
                        xl8.disabled = false;
                        xl9.disabled = false;
                        xl10.disabled = false;
                    }
                    if (xl8.checked === true) {
                        xl2.checked = true;
                        xl8.checked = true;
                        xl3.disabled = false;
                        xl4.disabled = false;
                        xl5.disabled = false;
                        xl6.disabled = false;
                        xl7.disabled = false;
                        xl8.disabled = false;
                        xl9.disabled = false;
                        xl10.disabled = false;
                    }
                    if (xl9.checked === true) {
                        xl2.checked = true;
                        xl9.checked = true;
                        xl3.disabled = false;
                        xl4.disabled = false;
                        xl5.disabled = false;
                        xl6.disabled = false;
                        xl7.disabled = false;
                        xl8.disabled = false;
                        xl9.disabled = false;
                        xl10.disabled = false;
                    }
                    if (xl10.checked === true) {
                        xl2.checked = true;
                        xl10.checked = true;
                        xl3.disabled = false;
                        xl4.disabled = false;
                        xl5.disabled = false;
                        xl6.disabled = false;
                        xl7.disabled = false;
                        xl8.disabled = false;
                        xl9.disabled = false;
                        xl10.disabled = false;
                    }

                    if (xz3.checked === true) {
                        xz2.checked = true;
                        xz3.checked = true;
                        xz3.disabled = false;
                        xz4.disabled = false;
                        xz5.disabled = false;
                        xz6.disabled = false;
                        xz7.disabled = false;
                        xz8.disabled = false;
                    }
                    if (xz4.checked === true) {
                        xz2.checked = true;
                        xz4.checked = true;
                        xz3.disabled = false;
                        xz4.disabled = false;
                        xz5.disabled = false;
                        xz6.disabled = false;
                        xz7.disabled = false;
                        xz8.disabled = false;
                    }
                    if (xz5.checked === true) {
                        xz2.checked = true;
                        xz5.checked = true;
                        xz3.disabled = false;
                        xz4.disabled = false;
                        xz5.disabled = false;
                        xz6.disabled = false;
                        xz7.disabled = false;
                        xz8.disabled = false;
                    }
                    if (xz6.checked === true) {
                        xz2.checked = true;
                        xz6.checked = true;
                        xz3.disabled = false;
                        xz4.disabled = false;
                        xz5.disabled = false;
                        xz6.disabled = false;
                        xz7.disabled = false;
                        xz8.disabled = false;
                    }
                    if (xz7.checked === true) {
                        xz2.checked = true;
                        xz7.checked = true;
                        xz3.disabled = false;
                        xz4.disabled = false;
                        xz5.disabled = false;
                        xz6.disabled = false;
                        xz7.disabled = false;
                        xz8.disabled = false;
                    }
                    if (xz8.checked === true) {
                        xz2.checked = true;
                        xz8.checked = true;
                        xz3.disabled = false;
                        xz4.disabled = false;
                        xz5.disabled = false;
                        xz6.disabled = false;
                        xz7.disabled = false;
                        xz8.disabled = false;
                    }

                    if (qz3.checked === true) {
                        qz2.checked = true;
                        qz3.checked = true;
                        qz3.disabled = false;
                        qz4.disabled = false;
                        qz5.disabled = false;
                        qz6.disabled = false;
                    }
                    if (qz4.checked === true) {
                        qz2.checked = true;
                        qz4.checked = true;
                        qz3.disabled = false;
                        qz4.disabled = false;
                        qz5.disabled = false;
                        qz6.disabled = false;
                    }
                    if (qz5.checked === true) {
                        qz2.checked = true;
                        qz5.checked = true;
                        qz3.disabled = false;
                        qz4.disabled = false;
                        qz5.disabled = false;
                        qz6.disabled = false;
                    }
                    if (qz6.checked === true) {
                        qz2.checked = true;
                        qz6.checked = true;
                        qz3.disabled = false;
                        qz4.disabled = false;
                        qz5.disabled = false;
                        qz6.disabled = false;
                    }

                    if (cc.nl3 = null) {
                        nl2.checked = true;
                        nl3.value === cc.nl3;
                        nl3.disabled = false;
                        nl4.disabled = false;
                    }
                    if (cc.nl4 = null) {
                        nl2.checked = true;
                        nl4.value === cc.nl4;
                        nl3.disabled = false;
                        nl4.disabled = false;
                    }

                    load_hello2(cc_all['hello2'])



                    return cc

                    }else{
                        alert('读取上次设置异常!!')
                    }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log('save_changes error', errorThrown)
//                alert('保存失败! 服务异常!!')
                return null

            }
        });
}

function load_hello2(data_list) {
    let body_ele = document.getElementById('item_zh2')
    body_ele.innerHTML = ""

    if (data_list != null){
        data_list.forEach((item, index) => {
        let ul_ele = document.createElement('ul')
        ul_ele.className = 'ul_info'
        ul_ele.setAttribute("style", "width: 800px;height: auto;background-color: #ffffff;margin-top: 10px;margin-left: 150px;padding: 20px 40px;")

        let h4_ele = document.createElement('h4')
        h4_ele.setAttribute("style", "text-align: center")
        h4_ele.textContent = item.job_name
        ul_ele.appendChild(h4_ele)

        let label_open_hello = document.createElement("label")
        label_open_hello.id = 'label_open_hello'
        label_open_hello.setAttribute("style", "margin-left: 260px")
        label_open_hello.textContent = '是否开启打招呼: '
        ul_ele.appendChild(label_open_hello)

        let input_open_true = document.createElement('input')
        input_open_true.setAttribute("style", "text-align: center")
        input_open_true.textContent = '开启'
        input_open_true.type = 'radio'
        input_open_true.id = 'open_hello_true'
        input_open_true.value = 'true'
        if (item.open_hello === true){
            input_open_true.checked = true
        }
        input_open_true.name = 'open_hello'+index
        ul_ele.appendChild(input_open_true)
        let open_true = document.createElement("label")
        open_true.id = 'open_true'
        open_true.textContent = '开启'
        ul_ele.appendChild(open_true)

        let input_open_false = document.createElement('input')
        input_open_false.setAttribute("style", "text-align: center")
        input_open_false.textContent = '关闭'
        input_open_false.type = 'radio'
        input_open_false.id = 'open_hello_false'
        input_open_false.value = 'false'
        input_open_false.name = 'open_hello'+index
        if (item.open_hello === false){
            input_open_false.checked = true
        }
        ul_ele.appendChild(input_open_false)
        let open_false = document.createElement("label")
        open_false.id = 'open_false'
        open_false.textContent = '关闭'
        ul_ele.appendChild(open_false)

        let br_ele = document.createElement('br')
        ul_ele.appendChild(br_ele)

        let hello_num_label = document.createElement("label")
        hello_num_label.id = 'hello_speed_label'
        hello_num_label.setAttribute("style", "margin-left: 260px")
        hello_num_label.textContent = '本次打招呼次数: '
        ul_ele.appendChild(hello_num_label)

        let hello_num = document.createElement('input')
        hello_num.setAttribute("style", "width: 30px")
        hello_num.id = 'hello_num'
        hello_num.type = 'text'
        if (item.hello_num != null){
            hello_num.value = item.hello_num
        }else{
            hello_num.value = '20'
        }
        ul_ele.appendChild(hello_num)

        let br_ele1 = document.createElement('br')
        ul_ele.appendChild(br_ele1)

        let favorite_location_label = document.createElement("label")
        favorite_location_label.id = 'favorite_location_label'
        favorite_location_label.setAttribute("style", "margin-left: 260px")
        favorite_location_label.textContent = '偏好地点: '
        ul_ele.appendChild(favorite_location_label)
        let favorite_location = document.createElement('input')
        favorite_location.id = 'favorite_location'
        favorite_location.type = 'text'
        favorite_location.placeholder = '地点之间请用空格隔开'
        if (item.favorite_location != null){
            favorite_location.value = item.favorite_location
        }
        ul_ele.appendChild(favorite_location)

        let br_ele2 = document.createElement('br')
        ul_ele.appendChild(br_ele2)

        let hello_speed_label = document.createElement("label")
        hello_speed_label.id = 'hello_speed_label'
        hello_speed_label.setAttribute("style", "margin-left: 260px")
        hello_speed_label.textContent = '打招呼速度: '
        ul_ele.appendChild(hello_speed_label)

        let hello_speed = document.createElement('select')
        hello_speed.id = 'hello_speed'
        let option1 = document.createElement('option')
        option1.value = 'fast'
        option1.textContent = '快速'
        if (item.hello_speed === 'fast'){
            option1.selected = true
        }
        hello_speed.appendChild(option1)
        let option2 = document.createElement('option')
        option2.value = 'normal'
        option2.textContent = '普通'
        if (item.hello_speed === 'normal'){
            option2.selected = true
        }
        hello_speed.appendChild(option2)
        let option3 = document.createElement('option')
        option3.value = 'slow'
        option3.textContent = '缓慢'
        if (item.hello_speed === 'slow'){
            option3.selected = true
        }
        hello_speed.appendChild(option3)
        ul_ele.appendChild(hello_speed)

        let br_ele3 = document.createElement('br')
        ul_ele.appendChild(br_ele3)

        let job_citys_label = document.createElement("label")
        job_citys_label.id = 'job_citys_label'
        job_citys_label.setAttribute("style", "margin-left: 260px")
        job_citys_label.textContent = '选择地点: '
        ul_ele.appendChild(job_citys_label)
        let job_citys = document.createElement('select')
        job_citys.id = 'job_citys'
        let job_citys_data = item.job_citys
        for(let i = 0, len = job_citys_data.length; i < len; i++) {
            // console.log(name[i]);
            let option_ele = document.createElement('option')
            option_ele.value = job_citys_data[i]
            option_ele.textContent = job_citys_data[i]
            job_citys.appendChild(option_ele)
        }
        ul_ele.appendChild(job_citys)

        body_ele.appendChild(ul_ele)

    })
    }else{
        console.log('打招呼2设置为空...')
    }
}

function get_hello2_changes() {
    if(document.getElementsByClassName('ul_info')) {//js判断元素是否存在
        let all_ul = document.getElementsByClassName('ul_info')
        let hello2_changes = []
        for (let index = 0; index < all_ul.length; index++) {
            let one_ul = all_ul[index]
            let h4_ele = one_ul.querySelector('h4')
            let job_name = h4_ele.textContent

            let open_hello_true = true
            let open_hello = one_ul.querySelector('#open_hello_true').checked
            open_hello_true = open_hello === true;

            let hello_num = one_ul.querySelector('#hello_num').value

            let favorite_location = one_ul.querySelector('#favorite_location').value

            let hello_speed = one_ul.querySelector('#hello_speed')
            let hello_speed_index = hello_speed.selectedIndex
            let hello_speed_str = hello_speed.options[hello_speed_index].value

            let job_citys = one_ul.querySelector('#hello_speed')
            let job_citys_index = job_citys.selectedIndex
            let job_citys_str = hello_speed.options[job_citys_index].value
            let temp = {"job_name": job_name, "hello_num": hello_num, "favorite_location": favorite_location, "hello_speed": hello_speed_str, "job_citys": job_citys_str, "open_hello": open_hello_true}
            console.log('temp: ', temp)
            hello2_changes.push(temp)
        }
        return hello2_changes
    }else{
        return null
    }
}