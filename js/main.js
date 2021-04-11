$(document).ready(function() {
    $('.header__burger, .nav__link').click(function(e) {
        $('.header__burger, .nav').toggleClass('active-burger');
    });

    $('.service__item-first, .service__content-first').click(function(e) {
        $('.service__item-first, .service__content-first').toggleClass('active-service__item');
    });

    $('.service__item-second, .service__content-second').click(function(e) {
        $('.service__item-second, .service__content-second').toggleClass('active-service__item');
    });

    $('.service__item-third, .service__content-third').click(function(e) {
        $('.service__item-third, .service__content-third').toggleClass('active-service__item');
    });

    $('.service__item').click(function(e) {
        $('.header__service').toggleClass('active-service__item');
    });

    $(".nav").on("click", ".nav__link", function(event) {

        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();



        //забираем идентификатор бока с атрибута href

        var id = $(this).attr('href'),



            //узнаем высоту от начала страницы до блока на который ссылается якорь

            top = $(id).offset().top;



        //анимируем переход на расстояние - top за 1500 мс

        $('body,html').animate({ scrollTop: top }, 700);

    });

});


new Swiper('.slider', {
    // стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    //пагинация
    pagination: {
        el: '.swiper-pagination-clickable',
        clickable: true,
    },

    touchAngle: 60,

    touchRatio: 1,

    spaceBetween: 100,
});