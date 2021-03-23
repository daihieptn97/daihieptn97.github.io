/*
 Theme Name: Resume
 Theme URI: http:/newtemplate.net/demo/resume/index.html
 Author: NewTemplate
 Author URI: https://themeforest.net/user/newtemplete
 Version: 1.0.1
 Description:  Resume One Page HTML5 Theme comes out with tons of powerful features. Its modern, attractive and clean design.
*/

(function ($) {

    "use strict";


    $('.close-popup').on("click", function () {
        $('.whatsapp-area').css('display', 'none');
    });

    $('#form-area').submit(function (event) {
        var msg = document.getElementById('whats-in').value;
        console.log(msg);
        window.open('https://m.me/100008636955206');
        event.preventDefault();
    });

    $(window).on('scroll', function () {

        var speed = 1000;

        if ($(window).scrollTop() >= 500) {
            $('.chat-button-area').addClass('zoomIn');
            $('.chat-button-area').removeClass('zoomOut');
            setTimeout(function () {
                $('.chat-button-area').css('display', 'block');
            }, speed);
        } else {
            $('.chat-button-area').removeClass('zoomIn');
            $('.chat-button-area').addClass('zoomOut');
            setTimeout(function () {
                $('.chat-button-area').css('display', 'none');
            }, speed);
        }

        if ($(window).scrollTop() >= 1000) {
            $('.whatsapp-popup').addClass('bounceInDown');
            $('.whatsapp-popup').removeClass('fadeOut');
            setTimeout(function () {
                $('.whatsapp-popup').css('display', 'block');
            }, speed);

            setTimeout(function () {
                $('.chat-area').addClass('bounceIn');
                $('.chat-area').css('visibility', 'visible');
            }, 2000);

        } else {
            $('.whatsapp-popup').removeClass('bounceInDown');
            $('.whatsapp-popup').addClass('fadeOut');
            setTimeout(function () {
                $('.whatsapp-popup').css('display', 'none');
            }, speed);
        }
    });


})(jQuery);
