window.addEventListener('load', function() {
    // 获取元素
    var header1 = document.querySelector('.header1');
    var header2 = document.querySelector('.header2');
    var header3 = document.querySelector('.header3');
    var header4 = document.querySelector('.header4');
    var sy = document.querySelector('.sy');
    var zh1 = document.querySelector('.zh1');
    var zh2 = document.querySelector('.zh2');
    var gt = document.querySelector('.gt');

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
})