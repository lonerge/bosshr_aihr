window.addEventListener('load', function() {
    /* 获取元素 */
    //1、打招呼优先级
    var li1 = document.querySelector('.menu-zh11');
    var before1 = li1.querySelector('.before');
    var item1 = document.getElementById('zh11');
    //2、性别/年龄设置
    var li2 = document.querySelector('.menu-zh12');
    var before2 = li2.querySelector('.before');
    var item2 = document.getElementById('zh12');
    //3、工作经验/地点设置
    var li3 = document.querySelector('.menu-zh13');
    var before3 = li3.querySelector('.before');
    var item3 = document.getElementById('zh13');
    //4、活跃度/期望岗位设置
    var li4 = document.querySelector('.menu-zh14');
    var before4 = li4.querySelector('.before');
    var item4 = document.getElementById('zh14');
    //5、薪资要求
    var li5 = document.querySelector('.menu-zh15');
    var before5 = li5.querySelector('.before');
    var item5 = document.getElementById('zh15');
    //6、学历要求
    var li6 = document.querySelector('.menu-zh16');
    var before6 = li6.querySelector('.before');
    var item6 = document.getElementById('zh16');
    //7、求职意向
    var li7 = document.querySelector('.menu-zh17');
    var before7 = li7.querySelector('.before');
    var item7 = document.getElementById('zh17');
    //8、经验要求
    var li8 = document.querySelector('.menu-zh18');
    var before8 = li8.querySelector('.before');
    var item8 = document.getElementById('zh18');
    //9、学校、公司/自我介绍
    var li9 = document.querySelector('.menu-zh19');
    var before9 = li9.querySelector('.before');
    var item9 = document.getElementById('zh19');
    //10、运行日志
    var li10 = document.querySelector('.menu-zh110');
    var before10 = li10.querySelector('.before');
    var item10 = document.getElementById('zh110');
    //11、检查日志
    var li11 = document.querySelector('.menu-zh111');
    var before11 = li11.querySelector('.before');
    var item11 = document.getElementById('zh111');

    /* 改变右侧内容 */
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
        before10.style.display = 'none';
        item10.style.display = 'none';
        before11.style.display = 'none';
        item11.style.display = 'none';
        before1.style.display = 'block';
        item1.style.display = 'block';
    })

    //2、性别/年龄设置
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
        before2.style.display = 'block';
        item2.style.display = 'block';
    })

    //3、工作经验/地点设置
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
        before3.style.display = 'block';
        item3.style.display = 'block';
    })

    //4、活跃度/期望岗位设置
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
        before4.style.display = 'block';
        item4.style.display = 'block';
    })

    //5、薪资要求
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
        before5.style.display = 'block';
        item5.style.display = 'block';
    })

    //6、学历要求
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
        before6.style.display = 'block';
        item6.style.display = 'block';
    })

    //7、求职意向
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
        before7.style.display = 'block';
        item7.style.display = 'block';
    })

    //8、经验要求
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
        before8.style.display = 'block';
        item8.style.display = 'block';
    })

    //9、学校、公司/自我介绍
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
        before9.style.display = 'block';
        item9.style.display = 'block';
    })

    //10、运行日志
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
        before10.style.display = 'block';
        item10.style.display = 'block';
    })

    //11、检查日志
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
        before11.style.display = 'block';
        item11.style.display = 'block';
    })
})