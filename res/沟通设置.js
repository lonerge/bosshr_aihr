window.addEventListener('load', function() {
    /* 获取元素 */
    //1、账号和回复时间
    var li1 = document.querySelector('.menu-gt1');
    var before1 = li1.querySelector('.before');
    var item1 = document.getElementById('gt1');
    //2、首句回复内容
    var li2 = document.querySelector('.menu-gt2');
    var before2 = li2.querySelector('.before');
    var item2 = document.getElementById('gt2');
    //3、第二句回复内容
    var li3 = document.querySelector('.menu-gt3');
    var before3 = li3.querySelector('.before');
    var item3 = document.getElementById('gt3');
    //4、交换设置
    var li4 = document.querySelector('.menu-gt4');
    var before4 = li4.querySelector('.before');
    var item4 = document.getElementById('gt4');
    //5、定时运行
    var li5 = document.querySelector('.menu-gt5');
    var before5 = li5.querySelector('.before');
    var item5 = document.getElementById('gt5');
    //6、不沟通的帖子
    var li6 = document.querySelector('.menu-gt6');
    var before6 = li6.querySelector('.before');
    var item6 = document.getElementById('gt6');
    //7、年龄/性别设置
    var li7 = document.querySelector('.menu-gt7');
    var before7 = li7.querySelector('.before');
    var item7 = document.getElementById('gt7');
    //8、学历设置
    var li8 = document.querySelector('.menu-gt8');
    var before8 = li8.querySelector('.before');
    var item8 = document.getElementById('gt8');
    //9、过滤沟通
    var li9 = document.querySelector('.menu-gt9');
    var before9 = li9.querySelector('.before');
    var item9 = document.getElementById('gt9');
    //10、其他设置
    var li10 = document.querySelector('.menu-gt10');
    var before10 = li10.querySelector('.before');
    var item10 = document.getElementById('gt10');
    //11、运行日志
    var li11 = document.querySelector('.menu-gt11');
    var before11 = li11.querySelector('.before');
    var item11 = document.getElementById('gt11');
    //12、沟通日志
    var li12 = document.querySelector('.menu-gt12');
    var before12 = li12.querySelector('.before');
    var item12 = document.getElementById('gt12');

    /* 改变右侧内容 */
    //1、账号和回复时间
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
        before10.style.display = 'none';
        item10.style.display = 'none';
        before11.style.display = 'none';
        item11.style.display = 'none';
        before12.style.display = 'none';
        item12.style.display = 'none';
        before1.style.display = 'block';
        item1.style.display = 'block';
    })

    //2、首句回复内容
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
        before10.style.display = 'none';
        item10.style.display = 'none';
        before11.style.display = 'none';
        item11.style.display = 'none';
        before12.style.display = 'none';
        item12.style.display = 'none';
        before2.style.display = 'block';
        item2.style.display = 'block';
    })

    //3、第二句回复内容
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
        before10.style.display = 'none';
        item10.style.display = 'none';
        before11.style.display = 'none';
        item11.style.display = 'none';
        before12.style.display = 'none';
        item12.style.display = 'none';
        before3.style.display = 'block';
        item3.style.display = 'block';
    })

    //4、交换设置
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
        before10.style.display = 'none';
        item10.style.display = 'none';
        before11.style.display = 'none';
        item11.style.display = 'none';
        before12.style.display = 'none';
        item12.style.display = 'none';
        before4.style.display = 'block';
        item4.style.display = 'block';
    })

    //5、定时运行
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
        before10.style.display = 'none';
        item10.style.display = 'none';
        before11.style.display = 'none';
        item11.style.display = 'none';
        before12.style.display = 'none';
        item12.style.display = 'none';
        before5.style.display = 'block';
        item5.style.display = 'block';
    })

    //6、不沟通的帖子
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
        before10.style.display = 'none';
        item10.style.display = 'none';
        before11.style.display = 'none';
        item11.style.display = 'none';
        before12.style.display = 'none';
        item12.style.display = 'none';
        before6.style.display = 'block';
        item6.style.display = 'block';
    })

    //7、年龄/性别设置
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
        before10.style.display = 'none';
        item10.style.display = 'none';
        before11.style.display = 'none';
        item11.style.display = 'none';
        before12.style.display = 'none';
        item12.style.display = 'none';
        before7.style.display = 'block';
        item7.style.display = 'block';
    })

    //8、学历设置
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
        before10.style.display = 'none';
        item10.style.display = 'none';
        before11.style.display = 'none';
        item11.style.display = 'none';
        before12.style.display = 'none';
        item12.style.display = 'none';
        before8.style.display = 'block';
        item8.style.display = 'block';
    })

    //9、过滤沟通
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
        before10.style.display = 'none';
        item10.style.display = 'none';
        before11.style.display = 'none';
        item11.style.display = 'none';
        before12.style.display = 'none';
        item12.style.display = 'none';
        before9.style.display = 'block';
        item9.style.display = 'block';
    })

    //10、其他设置
    li10.addEventListener('click', function() {
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
        before9.style.display = 'none';
        item9.style.display = 'none';
        before11.style.display = 'none';
        item11.style.display = 'none';
        before12.style.display = 'none';
        item12.style.display = 'none';
        before10.style.display = 'block';
        item10.style.display = 'block';
    })

    //11、运行日志
    li11.addEventListener('click', function() {
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
        before9.style.display = 'none';
        item9.style.display = 'none';
        before10.style.display = 'none';
        item10.style.display = 'none';
        before12.style.display = 'none';
        item12.style.display = 'none';
        before11.style.display = 'block';
        item11.style.display = 'block';
    })

    //12、沟通日志
    li12.addEventListener('click', function() {
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
        before9.style.display = 'none';
        item9.style.display = 'none';
        before10.style.display = 'none';
        item10.style.display = 'none';
        before11.style.display = 'none';
        item11.style.display = 'none';
        before12.style.display = 'block';
        item12.style.display = 'block';
    })
})