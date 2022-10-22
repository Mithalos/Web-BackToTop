window.addEventListener('load', function () {
    window.addEventListener('scroll', function () {
    if (window.pageYOffset > 75) {
    document.getElementById('backtotop').style.visibility = 'visible';
    document.getElementById('backtotop').style.display = 'block';
    } else {
    document.getElementById('backtotop').style.display = 'none';
    document.getElementById('backtotop').style.visibility = 'hidden';
    }
    }, false);
    document.getElementById('backtotop').addEventListener('click', function () {
    var docu_scroltop = window.pageYOffset;
    var setInt = setInterval(function () {
    if (docu_scroltop <= 0) {
    clearInterval(setInt);
    } else {
    window.scroll(0, docu_scroltop -= 100);
    }
    }, 10);
    }, false);
    }, false);
