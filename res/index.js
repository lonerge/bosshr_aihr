window.addEventListener('load', function() {
    /* 主页面切换 */
    // 获取元素
    var header1 = document.querySelector('.header1');
    var header2 = document.querySelector('.header2');
    var header3 = document.querySelector('.header3');
    var header4 = document.querySelector('.header4');
    var sy = document.querySelector('.sy');
    var zh1 = document.querySelector('.zh1');
    var zh2 = document.querySelector('.zh2');
    var gt = document.querySelector('.gt');
    //初始化账号
    var csh = document.getElementById('csh');
    //保存设置
    var bc = document.getElementById('bc');
    //启动打招呼
    var dzh = document.getElementById('dzh');
    //启动智能回复
    var hf = document.getElementById('hf');
    //关闭所有服务
    var gb = document.getElementById('gb');

    //事件
    header1.addEventListener('click', function() {
        header1.className = 'current header1';
        sy.style.display = 'block';
        header2.className = 'header2';
        zh1.style.display = 'none';
        header3.className = 'header3';
        zh2.style.display = 'none';
        header4.className = 'header4';
        gt.style.display = 'none';
    })
    header2.addEventListener('click', function() {
        header1.className = 'header1';
        sy.style.display = 'none';
        header2.className = 'current header2';
        zh1.style.display = 'block';
        header3.className = 'header3';
        zh2.style.display = 'none';
        header4.className = 'header4';
        gt.style.display = 'none';
    })
    header3.addEventListener('click', function() {
        header1.className = 'header1';
        sy.style.display = 'none';
        header2.className = 'header2';
        zh1.style.display = 'none';
        header3.className = 'current header3';
        zh2.style.display = 'block';
        header4.className = 'header4';
        gt.style.display = 'none';
    })
    header4.addEventListener('click', function() {
        header1.className = 'header1';
        sy.style.display = 'none';
        header2.className = 'header2';
        zh1.style.display = 'none';
        header3.className = 'header3';
        zh2.style.display = 'none';
        header4.className = 'current header4';
        gt.style.display = 'block';
    })




    /* 打招呼1 */
    /* 打招呼1 */
    /* 打招呼1 */
    /* 打招呼1 */
    /* 打招呼1 */
    /* 打招呼1 */
    /* 打招呼1 */

    /* 改变右侧内容 */
    /* 获取元素 */
    //1、打招呼优先级
    var li1 = document.querySelector('.menu-zh11');
    var before1 = li1.querySelector('.before');
    var item1 = document.getElementById('zh11');
    //2、经验要求
    var li2 = document.querySelector('.menu-zh12');
    var before2 = li2.querySelector('.before');
    var item2 = document.getElementById('zh12');
    //3、学历要求
    var li3 = document.querySelector('.menu-zh13');
    var before3 = li3.querySelector('.before');
    var item3 = document.getElementById('zh13');
    //4、薪资待遇
    var li4 = document.querySelector('.menu-zh14');
    var before4 = li4.querySelector('.before');
    var item4 = document.getElementById('zh14');
    //5、求职意向
    var li5 = document.querySelector('.menu-zh15');
    var before5 = li5.querySelector('.before');
    var item5 = document.getElementById('zh15');
    //6、简历关键字匹配
    var li6 = document.querySelector('.menu-zh16');
    var before6 = li6.querySelector('.before');
    var item6 = document.getElementById('zh16');
    //7、VIP筛选条件
    var li7 = document.querySelector('.menu-zh17');
    var before7 = li7.querySelector('.before');
    var item7 = document.getElementById('zh17');
    //8、运行日志
    var li8 = document.querySelector('.menu-zh18');
    var before8 = li8.querySelector('.before');
    var item8 = document.getElementById('zh18');
    //9、检查日志
    var li9 = document.querySelector('.menu-zh19');
    var before9 = li9.querySelector('.before');
    var item9 = document.getElementById('zh19');

    //1、打招呼优先级
    li1.addEventListener('click', function() {
        before2.style.display = 'none';
        item2.style.display = 'none';
        before3.style.display = 'none';
        item3.style.display = 'none';
        before4.style.display = 'none';
        item4.style.display = 'none';
        before5.style.display = 'none';
        item5.style.display = 'none';
        before6.style.display = 'none';
        item6.style.display = 'none';
        before7.style.display = 'none';
        item7.style.display = 'none';
        before8.style.display = 'none';
        item8.style.display = 'none';
        before9.style.display = 'none';
        item9.style.display = 'none';
        before1.style.display = 'block';
        item1.style.display = 'block';
    })

    //2、经验要求
    li2.addEventListener('click', function() {
        before1.style.display = 'none';
        item1.style.display = 'none';
        before3.style.display = 'none';
        item3.style.display = 'none';
        before4.style.display = 'none';
        item4.style.display = 'none';
        before5.style.display = 'none';
        item5.style.display = 'none';
        before6.style.display = 'none';
        item6.style.display = 'none';
        before7.style.display = 'none';
        item7.style.display = 'none';
        before8.style.display = 'none';
        item8.style.display = 'none';
        before9.style.display = 'none';
        item9.style.display = 'none';
        before2.style.display = 'block';
        item2.style.display = 'block';
    })

    //3、学历要求
    li3.addEventListener('click', function() {
        before1.style.display = 'none';
        item1.style.display = 'none';
        before2.style.display = 'none';
        item2.style.display = 'none';
        before4.style.display = 'none';
        item4.style.display = 'none';
        before5.style.display = 'none';
        item5.style.display = 'none';
        before6.style.display = 'none';
        item6.style.display = 'none';
        before7.style.display = 'none';
        item7.style.display = 'none';
        before8.style.display = 'none';
        item8.style.display = 'none';
        before9.style.display = 'none';
        item9.style.display = 'none';
        before3.style.display = 'block';
        item3.style.display = 'block';
    })

    //4、薪资待遇
    li4.addEventListener('click', function() {
        before1.style.display = 'none';
        item1.style.display = 'none';
        before2.style.display = 'none';
        item2.style.display = 'none';
        before3.style.display = 'none';
        item3.style.display = 'none';
        before5.style.display = 'none';
        item5.style.display = 'none';
        before6.style.display = 'none';
        item6.style.display = 'none';
        before7.style.display = 'none';
        item7.style.display = 'none';
        before8.style.display = 'none';
        item8.style.display = 'none';
        before9.style.display = 'none';
        item9.style.display = 'none';
        before4.style.display = 'block';
        item4.style.display = 'block';
    })

    //5、求职意向
    li5.addEventListener('click', function() {
        before1.style.display = 'none';
        item1.style.display = 'none';
        before2.style.display = 'none';
        item2.style.display = 'none';
        before3.style.display = 'none';
        item3.style.display = 'none';
        before4.style.display = 'none';
        item4.style.display = 'none';
        before6.style.display = 'none';
        item6.style.display = 'none';
        before7.style.display = 'none';
        item7.style.display = 'none';
        before8.style.display = 'none';
        item8.style.display = 'none';
        before9.style.display = 'none';
        item9.style.display = 'none';
        before5.style.display = 'block';
        item5.style.display = 'block';
    })

    //6、简历关键字匹配
    li6.addEventListener('click', function() {
        before1.style.display = 'none';
        item1.style.display = 'none';
        before2.style.display = 'none';
        item2.style.display = 'none';
        before3.style.display = 'none';
        item3.style.display = 'none';
        before4.style.display = 'none';
        item4.style.display = 'none';
        before5.style.display = 'none';
        item5.style.display = 'none';
        before7.style.display = 'none';
        item7.style.display = 'none';
        before8.style.display = 'none';
        item8.style.display = 'none';
        before9.style.display = 'none';
        item9.style.display = 'none';
        before6.style.display = 'block';
        item6.style.display = 'block';
    })

    //7、VIP筛选条件
    li7.addEventListener('click', function() {
        before1.style.display = 'none';
        item1.style.display = 'none';
        before2.style.display = 'none';
        item2.style.display = 'none';
        before3.style.display = 'none';
        item3.style.display = 'none';
        before4.style.display = 'none';
        item4.style.display = 'none';
        before5.style.display = 'none';
        item5.style.display = 'none';
        before6.style.display = 'none';
        item6.style.display = 'none';
        before8.style.display = 'none';
        item8.style.display = 'none';
        before9.style.display = 'none';
        item9.style.display = 'none';
        before7.style.display = 'block';
        item7.style.display = 'block';
    })

    //8、运行日志
    li8.addEventListener('click', function() {
        before1.style.display = 'none';
        item1.style.display = 'none';
        before2.style.display = 'none';
        item2.style.display = 'none';
        before3.style.display = 'none';
        item3.style.display = 'none';
        before4.style.display = 'none';
        item4.style.display = 'none';
        before5.style.display = 'none';
        item5.style.display = 'none';
        before6.style.display = 'none';
        item6.style.display = 'none';
        before7.style.display = 'none';
        item7.style.display = 'none';
        before9.style.display = 'none';
        item9.style.display = 'none';
        before8.style.display = 'block';
        item8.style.display = 'block';
    })

    //9、检查日志
    li9.addEventListener('click', function() {
        before1.style.display = 'none';
        item1.style.display = 'none';
        before2.style.display = 'none';
        item2.style.display = 'none';
        before3.style.display = 'none';
        item3.style.display = 'none';
        before4.style.display = 'none';
        item4.style.display = 'none';
        before5.style.display = 'none';
        item5.style.display = 'none';
        before6.style.display = 'none';
        item6.style.display = 'none';
        before7.style.display = 'none';
        item7.style.display = 'none';
        before8.style.display = 'none';
        item8.style.display = 'none';
        before9.style.display = 'block';
        item9.style.display = 'block';
    })

    /* 获取元素输入内容 */
    var token = document.getElementById('token');


    /* 打招呼优先级 */
    /* 获取元素 */
    //开启牛人打招呼
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


    jy3.disabled = true;
    jy4.disabled = true;
    jy5.disabled = true;
    jy6.disabled = true;
    jy7.disabled = true;
    jy8.disabled = true;

    xl3.disabled = true;
    xl4.disabled = true;
    xl5.disabled = true;
    xl6.disabled = true;
    xl7.disabled = true;
    xl8.disabled = true;
    xl9.disabled = true;
    xl10.disabled = true;

    xz3.disabled = true;
    xz4.disabled = true;
    xz5.disabled = true;
    xz6.disabled = true;
    xz7.disabled = true;
    xz8.disabled = true;

    qz3.disabled = true;
    qz4.disabled = true;
    qz5.disabled = true;
    qz6.disabled = true;

    nl3.disabled = true;
    nl4.disabled = true;

    /* 不限的限制 */
    jy1.addEventListener('click', function() {
        jy3.checked = false;
        jy4.checked = false;
        jy5.checked = false;
        jy6.checked = false;
        jy7.checked = false;
        jy8.checked = false;
        jy3.disabled = true;
        jy4.disabled = true;
        jy5.disabled = true;
        jy6.disabled = true;
        jy7.disabled = true;
        jy8.disabled = true;
    })
    xl1.addEventListener('click', function() {
        xl3.checked = false;
        xl4.checked = false;
        xl5.checked = false;
        xl6.checked = false;
        xl7.checked = false;
        xl8.checked = false;
        xl9.checked = false;
        xl10.checked = false;
        xl3.disabled = true;
        xl4.disabled = true;
        xl5.disabled = true;
        xl6.disabled = true;
        xl7.disabled = true;
        xl8.disabled = true;
        xl9.disabled = true;
        xl10.disabled = true;
    })
    xz1.addEventListener('click', function() {
        xz3.checked = false;
        xz4.checked = false;
        xz5.checked = false;
        xz6.checked = false;
        xz7.checked = false;
        xz8.checked = false;
        xz3.disabled = true;
        xz4.disabled = true;
        xz5.disabled = true;
        xz6.disabled = true;
        xz7.disabled = true;
        xz8.disabled = true;
    })
    qz1.addEventListener('click', function() {
        qz3.checked = false;
        qz4.checked = false;
        qz5.checked = false;
        qz6.checked = false;
        qz3.disabled = true;
        qz4.disabled = true;
        qz5.disabled = true;
        qz6.disabled = true;
    })
    nl1.addEventListener('click', function() {
        nl3.value = "";
        nl4.value = "";
        nl3.disabled = true;
        nl4.disabled = true;
    })

    /* 多选的限制 */
    jy2.addEventListener('click', function() {
        jy3.checked = false;
        jy4.checked = false;
        jy5.checked = false;
        jy6.checked = false;
        jy7.checked = false;
        jy8.checked = false;
        jy3.disabled = false;
        jy4.disabled = false;
        jy5.disabled = false;
        jy6.disabled = false;
        jy7.disabled = false;
        jy8.disabled = false;
    })
    xl2.addEventListener('click', function() {
        xl3.checked = false;
        xl4.checked = false;
        xl5.checked = false;
        xl6.checked = false;
        xl7.checked = false;
        xl8.checked = false;
        xl9.checked = false;
        xl10.checked = false;
        xl3.disabled = false;
        xl4.disabled = false;
        xl5.disabled = false;
        xl6.disabled = false;
        xl7.disabled = false;
        xl8.disabled = false;
        xl9.disabled = false;
        xl10.disabled = false;
    })
    xz2.addEventListener('click', function() {
        xz3.checked = false;
        xz4.checked = false;
        xz5.checked = false;
        xz6.checked = false;
        xz7.checked = false;
        xz8.checked = false;
        xz3.disabled = false;
        xz4.disabled = false;
        xz5.disabled = false;
        xz6.disabled = false;
        xz7.disabled = false;
        xz8.disabled = false;
    })
    qz2.addEventListener('click', function() {
        qz3.checked = false;
        qz4.checked = false;
        qz5.checked = false;
        qz6.checked = false;
        qz3.disabled = false;
        qz4.disabled = false;
        qz5.disabled = false;
        qz6.disabled = false;
    })
    nl2.addEventListener('click', function() {
        nl3.value = "";
        nl4.value = "";
        nl3.disabled = false;
        nl4.disabled = false;
    })




    /* 打招呼2 */
    /* 打招呼2 */
    /* 打招呼2 */
    /* 打招呼2 */
    /* 打招呼2 */
    /* 打招呼2 */
    /* 打招呼2 */

    /* 获取元素 */
    //1、开启简历关键词筛选
//    var li10 = document.querySelector('.menu-zh21');
//    var before10 = li10.querySelector('.before');
//    var item10 = document.getElementById('zh21');
//    //2、开启区域筛选
//    var li11 = document.querySelector('.menu-zh22');
//    var before11 = li11.querySelector('.before');
//    var item11 = document.getElementById('zh22');



    /* 改变右侧内容 */
    //1、开启简历关键词筛选
//    li10.addEventListener('click', function() {
//        before11.style.display = 'none';
//        item11.style.display = 'none';
//        before10.style.display = 'block';
//        item10.style.display = 'block';
//    })
//
//    //2、开启区域筛选
//    li11.addEventListener('click', function() {
//        before10.style.display = 'none';
//        item10.style.display = 'none';
//        before11.style.display = 'block';
//        item11.style.display = 'block';
//    })




    /* 沟通设置 */
    /* 沟通设置 */
    /* 沟通设置 */
    /* 沟通设置 */
    /* 沟通设置 */
    /* 沟通设置 */
    /* 沟通设置 */

    /* 获取元素 */
    //1、账号和回复时间
    var li12 = document.querySelector('.menu-gt1');
    var before12 = li12.querySelector('.before');
    var item12 = document.getElementById('gt1');
    //2、首句回复内容
    var li13 = document.querySelector('.menu-gt2');
    var before13 = li13.querySelector('.before');
    var item13 = document.getElementById('gt2');
    //3、第二句回复内容
    var li14 = document.querySelector('.menu-gt3');
    var before14 = li14.querySelector('.before');
    var item14 = document.getElementById('gt3');
    //4、交换设置
    var li15 = document.querySelector('.menu-gt4');
    var before15 = li15.querySelector('.before');
    var item15 = document.getElementById('gt4');
    //5、定时运行
    var li16 = document.querySelector('.menu-gt5');
    var before16 = li16.querySelector('.before');
    var item16 = document.getElementById('gt5');
    //6、不沟通的帖子
    var li17 = document.querySelector('.menu-gt6');
    var before17 = li17.querySelector('.before');
    var item17 = document.getElementById('gt6');
    //7、年龄/性别设置
    var li18 = document.querySelector('.menu-gt7');
    var before18 = li18.querySelector('.before');
    var item18 = document.getElementById('gt7');
    //8、学历设置
    var li19 = document.querySelector('.menu-gt8');
    var before19 = li19.querySelector('.before');
    var item19 = document.getElementById('gt8');
    //9、过滤沟通
    var li20 = document.querySelector('.menu-gt9');
    var before20 = li20.querySelector('.before');
    var item20 = document.getElementById('gt9');
    //10、其他设置
    var li21 = document.querySelector('.menu-gt10');
    var before21 = li21.querySelector('.before');
    var item21 = document.getElementById('gt10');
    //11、运行日志
    var li22 = document.querySelector('.menu-gt11');
    var before22 = li22.querySelector('.before');
    var item22 = document.getElementById('gt11');
    //12、沟通日志
    var li23 = document.querySelector('.menu-gt12');
    var before23 = li23.querySelector('.before');
    var item23 = document.getElementById('gt12');

    /* 改变右侧内容 */
    //1、账号和回复时间
    li12.addEventListener('click', function() {
        before13.style.display = 'none';
        item13.style.display = 'none';
        before14.style.display = 'none';
        item14.style.display = 'none';
        before15.style.display = 'none';
        item15.style.display = 'none';
        before16.style.display = 'none';
        item16.style.display = 'none';
        before17.style.display = 'none';
        item17.style.display = 'none';
        before18.style.display = 'none';
        item18.style.display = 'none';
        before19.style.display = 'none';
        item19.style.display = 'none';
        before20.style.display = 'none';
        item20.style.display = 'none';
        before21.style.display = 'none';
        item21.style.display = 'none';
        before22.style.display = 'none';
        item22.style.display = 'none';
        before23.style.display = 'none';
        item23.style.display = 'none';
        before12.style.display = 'block';
        item12.style.display = 'block';
    })

    //2、首句回复内容
    li13.addEventListener('click', function() {
        before12.style.display = 'none';
        item12.style.display = 'none';
        before14.style.display = 'none';
        item14.style.display = 'none';
        before15.style.display = 'none';
        item15.style.display = 'none';
        before16.style.display = 'none';
        item16.style.display = 'none';
        before17.style.display = 'none';
        item17.style.display = 'none';
        before18.style.display = 'none';
        item18.style.display = 'none';
        before19.style.display = 'none';
        item19.style.display = 'none';
        before20.style.display = 'none';
        item20.style.display = 'none';
        before21.style.display = 'none';
        item21.style.display = 'none';
        before22.style.display = 'none';
        item22.style.display = 'none';
        before23.style.display = 'none';
        item23.style.display = 'none';
        before13.style.display = 'block';
        item13.style.display = 'block';
    })

    //3、第二句回复内容
    li14.addEventListener('click', function() {
        before13.style.display = 'none';
        item13.style.display = 'none';
        before12.style.display = 'none';
        item12.style.display = 'none';
        before15.style.display = 'none';
        item15.style.display = 'none';
        before16.style.display = 'none';
        item16.style.display = 'none';
        before17.style.display = 'none';
        item17.style.display = 'none';
        before18.style.display = 'none';
        item18.style.display = 'none';
        before19.style.display = 'none';
        item19.style.display = 'none';
        before20.style.display = 'none';
        item20.style.display = 'none';
        before21.style.display = 'none';
        item21.style.display = 'none';
        before22.style.display = 'none';
        item22.style.display = 'none';
        before23.style.display = 'none';
        item23.style.display = 'none';
        before14.style.display = 'block';
        item14.style.display = 'block';
    })

    //4、交换设置
    li15.addEventListener('click', function() {
        before13.style.display = 'none';
        item13.style.display = 'none';
        before14.style.display = 'none';
        item14.style.display = 'none';
        before12.style.display = 'none';
        item12.style.display = 'none';
        before16.style.display = 'none';
        item16.style.display = 'none';
        before17.style.display = 'none';
        item17.style.display = 'none';
        before18.style.display = 'none';
        item18.style.display = 'none';
        before19.style.display = 'none';
        item19.style.display = 'none';
        before20.style.display = 'none';
        item20.style.display = 'none';
        before21.style.display = 'none';
        item21.style.display = 'none';
        before22.style.display = 'none';
        item22.style.display = 'none';
        before23.style.display = 'none';
        item23.style.display = 'none';
        before15.style.display = 'block';
        item15.style.display = 'block';
    })

    //5、定时运行
    li16.addEventListener('click', function() {
        before13.style.display = 'none';
        item13.style.display = 'none';
        before14.style.display = 'none';
        item14.style.display = 'none';
        before15.style.display = 'none';
        item15.style.display = 'none';
        before12.style.display = 'none';
        item12.style.display = 'none';
        before17.style.display = 'none';
        item17.style.display = 'none';
        before18.style.display = 'none';
        item18.style.display = 'none';
        before19.style.display = 'none';
        item19.style.display = 'none';
        before20.style.display = 'none';
        item20.style.display = 'none';
        before21.style.display = 'none';
        item21.style.display = 'none';
        before22.style.display = 'none';
        item22.style.display = 'none';
        before23.style.display = 'none';
        item23.style.display = 'none';
        before16.style.display = 'block';
        item16.style.display = 'block';
    })

    //6、不沟通的帖子
    li17.addEventListener('click', function() {
        before13.style.display = 'none';
        item13.style.display = 'none';
        before14.style.display = 'none';
        item14.style.display = 'none';
        before15.style.display = 'none';
        item15.style.display = 'none';
        before16.style.display = 'none';
        item16.style.display = 'none';
        before12.style.display = 'none';
        item12.style.display = 'none';
        before18.style.display = 'none';
        item18.style.display = 'none';
        before19.style.display = 'none';
        item19.style.display = 'none';
        before20.style.display = 'none';
        item20.style.display = 'none';
        before21.style.display = 'none';
        item21.style.display = 'none';
        before22.style.display = 'none';
        item22.style.display = 'none';
        before23.style.display = 'none';
        item23.style.display = 'none';
        before17.style.display = 'block';
        item17.style.display = 'block';
    })

    //7、年龄/性别设置
    li18.addEventListener('click', function() {
        before13.style.display = 'none';
        item13.style.display = 'none';
        before14.style.display = 'none';
        item14.style.display = 'none';
        before15.style.display = 'none';
        item15.style.display = 'none';
        before16.style.display = 'none';
        item16.style.display = 'none';
        before17.style.display = 'none';
        item17.style.display = 'none';
        before12.style.display = 'none';
        item12.style.display = 'none';
        before19.style.display = 'none';
        item19.style.display = 'none';
        before20.style.display = 'none';
        item20.style.display = 'none';
        before21.style.display = 'none';
        item21.style.display = 'none';
        before22.style.display = 'none';
        item22.style.display = 'none';
        before23.style.display = 'none';
        item23.style.display = 'none';
        before18.style.display = 'block';
        item18.style.display = 'block';
    })

    //8、学历设置
    li19.addEventListener('click', function() {
        before13.style.display = 'none';
        item13.style.display = 'none';
        before14.style.display = 'none';
        item14.style.display = 'none';
        before15.style.display = 'none';
        item15.style.display = 'none';
        before16.style.display = 'none';
        item16.style.display = 'none';
        before17.style.display = 'none';
        item17.style.display = 'none';
        before18.style.display = 'none';
        item18.style.display = 'none';
        before12.style.display = 'none';
        item12.style.display = 'none';
        before20.style.display = 'none';
        item20.style.display = 'none';
        before21.style.display = 'none';
        item21.style.display = 'none';
        before22.style.display = 'none';
        item22.style.display = 'none';
        before23.style.display = 'none';
        item23.style.display = 'none';
        before19.style.display = 'block';
        item19.style.display = 'block';
    })

    //9、过滤沟通
    li20.addEventListener('click', function() {
        before13.style.display = 'none';
        item13.style.display = 'none';
        before14.style.display = 'none';
        item14.style.display = 'none';
        before15.style.display = 'none';
        item15.style.display = 'none';
        before16.style.display = 'none';
        item16.style.display = 'none';
        before17.style.display = 'none';
        item17.style.display = 'none';
        before18.style.display = 'none';
        item18.style.display = 'none';
        before19.style.display = 'none';
        item19.style.display = 'none';
        before12.style.display = 'none';
        item12.style.display = 'none';
        before21.style.display = 'none';
        item21.style.display = 'none';
        before22.style.display = 'none';
        item22.style.display = 'none';
        before23.style.display = 'none';
        item23.style.display = 'none';
        before20.style.display = 'block';
        item20.style.display = 'block';
    })

    //10、其他设置
    li21.addEventListener('click', function() {
        before13.style.display = 'none';
        item13.style.display = 'none';
        before14.style.display = 'none';
        item14.style.display = 'none';
        before15.style.display = 'none';
        item15.style.display = 'none';
        before16.style.display = 'none';
        item16.style.display = 'none';
        before17.style.display = 'none';
        item17.style.display = 'none';
        before18.style.display = 'none';
        item18.style.display = 'none';
        before19.style.display = 'none';
        item19.style.display = 'none';
        before20.style.display = 'none';
        item20.style.display = 'none';
        before12.style.display = 'none';
        item12.style.display = 'none';
        before22.style.display = 'none';
        item22.style.display = 'none';
        before23.style.display = 'none';
        item23.style.display = 'none';
        before21.style.display = 'block';
        item21.style.display = 'block';
    })

    //11、运行日志
    li22.addEventListener('click', function() {
        before13.style.display = 'none';
        item13.style.display = 'none';
        before14.style.display = 'none';
        item14.style.display = 'none';
        before15.style.display = 'none';
        item15.style.display = 'none';
        before16.style.display = 'none';
        item16.style.display = 'none';
        before17.style.display = 'none';
        item17.style.display = 'none';
        before18.style.display = 'none';
        item18.style.display = 'none';
        before19.style.display = 'none';
        item19.style.display = 'none';
        before20.style.display = 'none';
        item20.style.display = 'none';
        before21.style.display = 'none';
        item21.style.display = 'none';
        before12.style.display = 'none';
        item12.style.display = 'none';
        before23.style.display = 'none';
        item23.style.display = 'none';
        before22.style.display = 'block';
        item22.style.display = 'block';
    })

    //12、沟通日志
    li23.addEventListener('click', function() {
        before13.style.display = 'none';
        item13.style.display = 'none';
        before14.style.display = 'none';
        item14.style.display = 'none';
        before15.style.display = 'none';
        item15.style.display = 'none';
        before16.style.display = 'none';
        item16.style.display = 'none';
        before17.style.display = 'none';
        item17.style.display = 'none';
        before18.style.display = 'none';
        item18.style.display = 'none';
        before19.style.display = 'none';
        item19.style.display = 'none';
        before20.style.display = 'none';
        item20.style.display = 'none';
        before21.style.display = 'none';
        item21.style.display = 'none';
        before22.style.display = 'none';
        item22.style.display = 'none';
        before12.style.display = 'none';
        item12.style.display = 'none';
        before23.style.display = 'block';
        item23.style.display = 'block';
    })




    /* 初始化账号 */
    /* 初始化账号 */
    /* 初始化账号 */
    /* 初始化账号 */
    /* 初始化账号 */
    /* 初始化账号 */
    /* 初始化账号 */
    csh.addEventListener("click", function() {
        //页面刷新
        //        location.reload();
        //清空缓存
        //        localStorage.clear();
        //        初始化账号函数
//    lonerbbb:初始化账号
        init();
//        alert('初始化账号成功！');
    })




    /* 保存设置 */
    /* 保存设置 */
    /* 保存设置 */
    /* 保存设置 */
    /* 保存设置 */
    /* 保存设置 */
    /* 保存设置 */
    bc.addEventListener("click", function() {
        /* 打招呼1 */
        //存在
        let dzh1 = {
            token: token.value,
            kq: kq.checked,
            yx: yx.checked,
            bxh: bxh.checked,
            ts: ts.checked,
            qy: qy.checked,
            cs: cs.checked,
            tj: tj.checked,
            x: x.checked,
            kg: kg.checked,

            jy1: jy1.checked,
            jy2: jy2.checked,
            jy3: jy3.checked,
            jy4: jy4.checked,
            jy5: jy5.checked,
            jy6: jy6.checked,
            jy7: jy7.checked,
            jy8: jy8.checked,

            xl1: xl1.checked,
            xl2: xl2.checked,
            xl3: xl3.checked,
            xl4: xl4.checked,
            xl5: xl5.checked,
            xl6: xl6.checked,
            xl7: xl7.checked,
            xl8: xl8.checked,
            xl9: xl9.checked,
            xl10: xl10.checked,

            xz1: xz1.checked,
            xz2: xz2.checked,
            xz3: xz3.checked,
            xz4: xz4.checked,
            xz5: xz5.checked,
            xz6: xz6.checked,
            xz7: xz7.checked,
            xz8: xz8.checked,

            qz1: qz1.checked,
            qz2: qz2.checked,
            qz3: qz3.checked,
            qz4: qz4.checked,
            qz5: qz5.checked,
            qz6: qz6.checked,

            dd: dd.value,

            nl1: nl1.checked,
            nl2: nl2.checked,
            nl3: nl3.value,
            nl4: nl4.value,

            xb1: xb1.checked,
            xb2: xb2.checked,
            xb3: xb3.checked,

            jh1: jh1.checked,
            jh2: jh2.checked,

            jq1: jq1.checked,
            jq2: jq2.checked,

            tc1: tc1.checked,
            tc2: tc2.checked,
            tc3: tc3.checked,

            hy1: hy1.checked,
            hy2: hy2.checked,
            hy3: hy3.checked,
            hy4: hy4.checked,
            hy5: hy5.checked,
            hy6: hy6.checked,
            hy7: hy7.checked,

            yx1: yx1.checked,
            yx2: yx2.checked,
            yx3: yx3.checked,
            yx4: yx4.checked,
            yx5: yx5.checked,
            yx6: yx6.checked,
            yx7: yx7.checked,

            zy1: zy1.checked,
            zy2: zy2.checked,
            zy3: zy3.checked,
            zy4: zy4.checked,
            zy5: zy5.checked,
            zy6: zy6.checked,
            zy7: zy7.checked,
        }

        // 存储
        localStorage.setItem('cc', JSON.stringify(dzh1));
        //        保存设置到本地
//    lonerbbb:保存设置到本地
        save_changes()

        alert('保存成功！');
    })


    /* 启动打招呼 */
    /* 启动打招呼 */
    /* 启动打招呼 */
    /* 启动打招呼 */
    /* 启动打招呼 */
    /* 启动打招呼 */
    /* 启动打招呼 */
    dzh.addEventListener("click", function() {
        //        开启打招呼
//    lonerbbb:开启打招呼
        test()
    })


    /* 启动智能回复 */
    /* 启动智能回复 */
    /* 启动智能回复 */
    /* 启动智能回复 */
    /* 启动智能回复 */
    /* 启动智能回复 */
    /* 启动智能回复 */
    hf.addEventListener("click", function() {
        alert('已启动智能回复！');
    })

    /* 关闭所有服务 */
    /* 关闭所有服务 */
    /* 关闭所有服务 */
    /* 关闭所有服务 */
    /* 关闭所有服务 */
    /* 关闭所有服务 */
    /* 关闭所有服务 */
    gb.addEventListener("click", function() {
//        lonerbbb:退出所有服务
        quit(0)
    })




    /* 打开页面自动获取最新localStorage值 */
//    lonerbbb:读取打招呼1设置,并渲染页面
    load_hello1_changes()


//    let cc = JSON.parse(localStorage.getItem('cc'));
//    if (cc) {
//        kq.checked = cc.kq;
//        yx.checked = cc.yx;
//        bxh.checked = cc.bxh;
//        ts.checked = cc.ts;
//        qy.checked = cc.qy;
//        cs.checked = cc.cs;
//        tj.checked = cc.tj;
//        x.checked = cc.x;
//        kg.checked = cc.kg;
//
//        jy1.checked = cc.jy1;
//        jy2.checked = cc.jy2;
//        jy3.checked = cc.jy3;
//        jy4.checked = cc.jy4;
//        jy5.checked = cc.jy5;
//        jy6.checked = cc.jy6;
//        jy7.checked = cc.jy7;
//        jy8.checked = cc.jy8;
//
//        xl1.checked = cc.xl1;
//        xl2.checked = cc.xl2;
//        xl3.checked = cc.xl3;
//        xl4.checked = cc.xl4;
//        xl5.checked = cc.xl5;
//        xl6.checked = cc.xl6;
//        xl7.checked = cc.xl7;
//        xl8.checked = cc.xl8;
//        xl9.checked = cc.xl9;
//        xl10.checked = cc.xl10;
//
//        xz1.checked = cc.xz1;
//        xz2.checked = cc.xz2;
//        xz3.checked = cc.xz3;
//        xz4.checked = cc.xz4;
//        xz5.checked = cc.xz5;
//        xz6.checked = cc.xz6;
//        xz7.checked = cc.xz7;
//        xz8.checked = cc.xz8;
//
//        qz1.checked = cc.qz1;
//        qz2.checked = cc.qz2;
//        qz3.checked = cc.qz3;
//        qz4.checked = cc.qz4;
//        qz5.checked = cc.qz5;
//        qz6.checked = cc.qz6;
//
//        dd.value = cc.dd;
//
//        nl1.checked = cc.nl1;
//        nl2.checked = cc.nl2;
//        nl3.value = cc.nl3;
//        nl4.value = cc.nl4;
//
//        xb1.checked = cc.xb1;
//        xb2.checked = cc.xb2;
//        xb3.checked = cc.xb3;
//
//        jh1.checked = cc.jh1;
//        jh2.checked = cc.jh2;
//
//        jq1.checked = cc.jq1;
//        jq2.checked = cc.jq2;
//
//        tc1.checked = cc.tc1;
//        tc2.checked = cc.tc2;
//        tc3.checked = cc.tc3;
//
//        hy1.checked = cc.hy1;
//        hy2.checked = cc.hy2;
//        hy3.checked = cc.hy3;
//        hy4.checked = cc.hy4;
//        hy5.checked = cc.hy5;
//        hy6.checked = cc.hy6;
//        hy7.checked = cc.hy7;
//
//        yx1.checked = cc.yx1;
//        yx2.checked = cc.yx2;
//        yx3.checked = cc.yx3;
//        yx4.checked = cc.yx4;
//        yx5.checked = cc.yx5;
//        yx6.checked = cc.yx6;
//        yx7.checked = cc.yx7;
//
//        zy1.checked = cc.zy1;
//        zy2.checked = cc.zy2;
//        zy3.checked = cc.zy3;
//        zy4.checked = cc.zy4;
//        zy5.checked = cc.zy5;
//        zy6.checked = cc.zy6;
//        zy7.checked = cc.zy7;
//
//        if (jy3.checked === true) {
//            jy2.checked = true;
//            jy3.checked = true;
//            jy3.disabled = false;
//            jy4.disabled = false;
//            jy5.disabled = false;
//            jy6.disabled = false;
//            jy7.disabled = false;
//            jy8.disabled = false;
//        }
//        if (jy4.checked === true) {
//            jy2.checked = true;
//            jy4.checked = true;
//            jy3.disabled = false;
//            jy4.disabled = false;
//            jy5.disabled = false;
//            jy6.disabled = false;
//            jy7.disabled = false;
//            jy8.disabled = false;
//        }
//        if (jy5.checked === true) {
//            jy2.checked = true;
//            jy5.checked = true;
//            jy3.disabled = false;
//            jy4.disabled = false;
//            jy5.disabled = false;
//            jy6.disabled = false;
//            jy7.disabled = false;
//            jy8.disabled = false;
//        }
//        if (jy6.checked === true) {
//            jy2.checked = true;
//            jy6.checked = true;
//            jy3.disabled = false;
//            jy4.disabled = false;
//            jy5.disabled = false;
//            jy6.disabled = false;
//            jy7.disabled = false;
//            jy8.disabled = false;
//        }
//        if (jy7.checked === true) {
//            jy2.checked = true;
//            jy7.checked = true;
//            jy3.disabled = false;
//            jy4.disabled = false;
//            jy5.disabled = false;
//            jy6.disabled = false;
//            jy7.disabled = false;
//            jy8.disabled = false;
//        }
//        if (jy8.checked === true) {
//            jy2.checked = true;
//            jy8.checked = true;
//            jy3.disabled = false;
//            jy4.disabled = false;
//            jy5.disabled = false;
//            jy6.disabled = false;
//            jy7.disabled = false;
//            jy8.disabled = false;
//        }
//
//        if (xl3.checked === true) {
//            xl2.checked = true;
//            xl3.checked = true;
//            xl3.checked = false;
//            xl3.disabled = false;
//            xl4.disabled = false;
//            xl5.disabled = false;
//            xl6.disabled = false;
//            xl7.disabled = false;
//            xl8.disabled = false;
//            xl9.disabled = false;
//            xl10.disabled = false;
//        }
//        if (xl4.checked === true) {
//            xl2.checked = true;
//            xl4.checked = true;
//            xl3.disabled = false;
//            xl4.disabled = false;
//            xl5.disabled = false;
//            xl6.disabled = false;
//            xl7.disabled = false;
//            xl8.disabled = false;
//            xl9.disabled = false;
//            xl10.disabled = false;
//        }
//        if (xl5.checked === true) {
//            xl2.checked = true;
//            xl5.checked = true;
//            xl3.disabled = false;
//            xl4.disabled = false;
//            xl5.disabled = false;
//            xl6.disabled = false;
//            xl7.disabled = false;
//            xl8.disabled = false;
//            xl9.disabled = false;
//            xl10.disabled = false;
//        }
//        if (xl6.checked === true) {
//            xl2.checked = true;
//            xl6.checked = true;
//            xl3.disabled = false;
//            xl4.disabled = false;
//            xl5.disabled = false;
//            xl6.disabled = false;
//            xl7.disabled = false;
//            xl8.disabled = false;
//            xl9.disabled = false;
//            xl10.disabled = false;
//        }
//        if (xl7.checked === true) {
//            xl2.checked = true;
//            xl7.checked = true;
//            xl3.disabled = false;
//            xl4.disabled = false;
//            xl5.disabled = false;
//            xl6.disabled = false;
//            xl7.disabled = false;
//            xl8.disabled = false;
//            xl9.disabled = false;
//            xl10.disabled = false;
//        }
//        if (xl8.checked === true) {
//            xl2.checked = true;
//            xl8.checked = true;
//            xl3.disabled = false;
//            xl4.disabled = false;
//            xl5.disabled = false;
//            xl6.disabled = false;
//            xl7.disabled = false;
//            xl8.disabled = false;
//            xl9.disabled = false;
//            xl10.disabled = false;
//        }
//        if (xl9.checked === true) {
//            xl2.checked = true;
//            xl9.checked = true;
//            xl3.disabled = false;
//            xl4.disabled = false;
//            xl5.disabled = false;
//            xl6.disabled = false;
//            xl7.disabled = false;
//            xl8.disabled = false;
//            xl9.disabled = false;
//            xl10.disabled = false;
//        }
//        if (xl10.checked === true) {
//            xl2.checked = true;
//            xl10.checked = true;
//            xl3.disabled = false;
//            xl4.disabled = false;
//            xl5.disabled = false;
//            xl6.disabled = false;
//            xl7.disabled = false;
//            xl8.disabled = false;
//            xl9.disabled = false;
//            xl10.disabled = false;
//        }
//
//        if (xz3.checked === true) {
//            xz2.checked = true;
//            xz3.checked = true;
//            xz3.disabled = false;
//            xz4.disabled = false;
//            xz5.disabled = false;
//            xz6.disabled = false;
//            xz7.disabled = false;
//            xz8.disabled = false;
//        }
//        if (xz4.checked === true) {
//            xz2.checked = true;
//            xz4.checked = true;
//            xz3.disabled = false;
//            xz4.disabled = false;
//            xz5.disabled = false;
//            xz6.disabled = false;
//            xz7.disabled = false;
//            xz8.disabled = false;
//        }
//        if (xz5.checked === true) {
//            xz2.checked = true;
//            xz5.checked = true;
//            xz3.disabled = false;
//            xz4.disabled = false;
//            xz5.disabled = false;
//            xz6.disabled = false;
//            xz7.disabled = false;
//            xz8.disabled = false;
//        }
//        if (xz6.checked === true) {
//            xz2.checked = true;
//            xz6.checked = true;
//            xz3.disabled = false;
//            xz4.disabled = false;
//            xz5.disabled = false;
//            xz6.disabled = false;
//            xz7.disabled = false;
//            xz8.disabled = false;
//        }
//        if (xz7.checked === true) {
//            xz2.checked = true;
//            xz7.checked = true;
//            xz3.disabled = false;
//            xz4.disabled = false;
//            xz5.disabled = false;
//            xz6.disabled = false;
//            xz7.disabled = false;
//            xz8.disabled = false;
//        }
//        if (xz8.checked === true) {
//            xz2.checked = true;
//            xz8.checked = true;
//            xz3.disabled = false;
//            xz4.disabled = false;
//            xz5.disabled = false;
//            xz6.disabled = false;
//            xz7.disabled = false;
//            xz8.disabled = false;
//        }
//
//        if (qz3.checked === true) {
//            qz2.checked = true;
//            qz3.checked = true;
//            qz3.disabled = false;
//            qz4.disabled = false;
//            qz5.disabled = false;
//            qz6.disabled = false;
//        }
//        if (qz4.checked === true) {
//            qz2.checked = true;
//            qz4.checked = true;
//            qz3.disabled = false;
//            qz4.disabled = false;
//            qz5.disabled = false;
//            qz6.disabled = false;
//        }
//        if (qz5.checked === true) {
//            qz2.checked = true;
//            qz5.checked = true;
//            qz3.disabled = false;
//            qz4.disabled = false;
//            qz5.disabled = false;
//            qz6.disabled = false;
//        }
//        if (qz6.checked === true) {
//            qz2.checked = true;
//            qz6.checked = true;
//            qz3.disabled = false;
//            qz4.disabled = false;
//            qz5.disabled = false;
//            qz6.disabled = false;
//        }
//
//        if (cc.nl3 = null) {
//            nl2.checked = true;
//            nl3.value === cc.nl3;
//            nl3.disabled = false;
//            nl4.disabled = false;
//        }
//        if (cc.nl4 = null) {
//            nl2.checked = true;
//            nl4.value === cc.nl4;
//            nl3.disabled = false;
//            nl4.disabled = false;
//        }
//
//    }


})