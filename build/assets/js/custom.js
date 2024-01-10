(function ($) {
    "use strict";

    //Preloder
    jQuery(window).on('load', function () {
        $(".preloader_area_wrap").delay(1600).fadeOut("slow");
    });

    $(function () {
        $(".lazy").lazy();
    });

    //Isotope with image load
    $(document).ready(function(){
        $('ul.tab-menu li').on('click', function () {

            $("ul.tab-menu li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');
            $(".gallery-grid").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });
        $('.gallery-grid').masonry({
            //options
            itemSelector: '.gallery-item',
        });
    });

    //Active menu
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('ul li a');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].className = "active";
        }
    }

    

    //sticky menu
    $(window).on('scroll', function () {

        if ($(this).scrollTop() > 200) {
            $('.position_top').addClass('sticky');
        } else {
            $('.position_top').removeClass('sticky');
        }
    });


    //Mobile menu
    $('.cross-btn').on('click', function (event) {
        $(this).toggleClass('h-active');
        $('.main-nav').toggleClass('slidenav');
    });

    $(".main-nav .bi").on('click', function (event) {
        var $fl = $(this);
        $(this).parent().siblings().find('.sub-menu').slideUp();
        $(this).parent().siblings().find('.bi').addClass('bi-chevron-down');
        if ($fl.hasClass('bi-chevron-down')) {
            $fl.removeClass('bi-chevron-down').addClass('bi-chevron-up');
        } else {
            $fl.removeClass('bi-chevron-up').addClass('bi-chevron-down');
        }
        $fl.next(".sub-menu").slideToggle();
    });


    //Counter up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    //Video popup
    $('.popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });


     

    //Hero slider
    var swiper = new Swiper(".hero-slider", {
        direction: "horizontal",
        speed: 1000,
        parallax: true,
        autoPlay: true,
        effect: 'fade',
        slidesPerView: 1,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        keyboard: {
            enabled: true,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            clickable: true,
        },
    });

   


    //Testimonial slider
    var swiper = new Swiper(".testimonial", {
        direction: "horizontal",
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
        },
    });


    //Testimonial slider
    var swiper = new Swiper(".reviewer", {
        direction: "horizontal",
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next-n",
            prevEl: ".swiper-button-prev-p",
            clickable: true,
        },
    });

    // Wrap every letter in a span
    var textWrapper = document.querySelector('.hero-content-title span');
    if(textWrapper){
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        anime.timeline({loop: true})
        .add({
            targets: '.hero-content-title span',
            rotateY: [-90, 0],
            duration: 1300,
            delay: (el, i) => 45 * i
        }).add({
            targets: '.hero-content-title ',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
    }

}(jQuery));