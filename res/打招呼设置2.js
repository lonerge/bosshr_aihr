window.addEventListener('load', function() {
    /* 获取元素 */
    //1、开启简历关键词筛选
    var li1 = document.querySelector('.menu-zh21');
    var before1 = li1.querySelector('.before');
    var item1 = document.getElementById('zh21');
    //2、开启区域筛选
    var li2 = document.querySelector('.menu-zh22');
    var before2 = li2.querySelector('.before');
    var item2 = document.getElementById('zh22');

    /* 改变右侧内容 */
    //1、开启简历关键词筛选
    li1.addEventListener('click', function() {
        before2.style.display = 'none';
        item2.style.display = 'none';
        before1.style.display = 'block';
        item1.style.display = 'block';
    })

    //2、开启区域筛选
    li2.addEventListener('click', function() {
        before1.style.display = 'none';
        item1.style.display = 'none';
        before2.style.display = 'block';
        item2.style.display = 'block';
    })
})