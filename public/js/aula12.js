$(function() {

    var nav = $('.menu');

    $(window).scroll(function() {
        if($(this).scrollTop() > 100) {
            nav.addClass('menu-fixo');
        } else {
            nav.removeClass('menu-fixo');
        }
    });

});