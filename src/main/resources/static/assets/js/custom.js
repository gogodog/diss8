(function ($) {

    "use strict";

    // Preloader
    function stylePreloader() {
        $('body').addClass('preloader-deactive');
    }

    // Off Canvas JS
    var canvasWrapper = $(".off-canvas-wrapper");
    $(".btn-menu").on('click', function () {
        canvasWrapper.addClass('active');
        $("body").addClass('fix');
    });

    $(".close-action > .btn-menu-close, .off-canvas-overlay").on('click', function () {
        canvasWrapper.removeClass('active');
        $("body").removeClass('fix');
    });

    // Fixed Menu JS
    $(".navigation-btn-menu").on('click', function () {
        $(".header-navigation-fixed, .navigation-btn-menu").toggleClass("show");
    });

    // Sside Menu JS
    var AsideMenuWrap = $(".aside-menu-wrap");
    $(".btn-aside-menu").on('click', function () {
        AsideMenuWrap.addClass('show');
    });
    $(".btn-aside-menu-close").on('click', function () {
        AsideMenuWrap.removeClass('show');
    });

    // Sside Menu JS
    var AsideFormLoginWrap2 = $(".aside-login-form-wrap.aside-login-form-wrap-two");
    $(".aside-login-form-register-open").on('click', function () {
        AsideFormLoginWrap2.addClass('show');
    });
    $(".aside-login-form-close.aside-login-form-close-two").on('click', function () {
        AsideFormLoginWrap2.removeClass('show');
    });

    // Sticky Header Js
    var headroom = $(".sticky-header");
    headroom.headroom({
        offset: 280,
        tolerance: 5,
        classes: {
            initial: "headroom",
            pinned: "slideDown",
            unpinned: "slideUp",
            notTop: "sticky"
        }
    });

    //Responsive Slicknav JS
    $('.main-menu').slicknav({
        appendTo: '.res-mobile-menu',
        closeOnClick: false,
        removeClasses: true,
        closedSymbol: '<i class="lastudioicon-down-arrow"></i>',
        openedSymbol: '<i class="lastudioicon-up-arrow"></i>'
    });

    // Menu Activeion Js
    var cururl = window.location.pathname;
    var curpage = cururl.substr(cururl.lastIndexOf('/') + 1);
    var hash = window.location.hash.substr(1);
    if ((curpage === "" || curpage === "/" || curpage === "admin") && hash === "") {
    } else {
        $(".header-navigation-area li").each(function () {
            $(this).removeClass("active");
        });
        if (hash != "")
            $(".header-navigation-area li a[href='" + hash + "']").parents("li").addClass("active");
        else
            $(".header-navigation-area li a[href='" + curpage + "']").parents("li").addClass("active");
    }

    // Search Box  JS
    var searchwrapper = $(".search-box-wrapper");
    $(".btn-search-menu").on('click', function () {
        searchwrapper.addClass('show');
        $("#search-input").focus();
    });
    $(".search-close").on('click', function () {
        searchwrapper.removeClass('show');
    });

    // Swiper Slider Js
    var carouselSlider = new Swiper('.default-slider-container', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        speed: 500,
        spaceBetween: 0,
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 0,
            shadowScale: 0,
        },
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.default-slider-container .swiper-button-next',
            prevEl: '.default-slider-container .swiper-button-prev',
        },
        pagination: {
            el: '.default-slider-container .swiper-pagination',
            clickable: 'true',
        },
    });
    $(".default-slider-container").hover(function () {
        (this).swiper.autoplay.stop();
    }, function () {
        (this).swiper.autoplay.start();
    });

    var carouselSlider2 = new Swiper('.default-slider2-container', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        speed: 900,
        spaceBetween: 0,
        mousewheel: true,
        autoplay: {
            delay: 20000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.default-slider2-container .swiper-button-next',
            prevEl: '.default-slider2-container .swiper-button-prev',
        },
        keyboard: {
            enabled: true,
        },
    });
    $(".default-slider2-container").hover(function () {
        (this).swiper.autoplay.stop();
    }, function () {
        (this).swiper.autoplay.start();
    });

    // Brand Logo Slider Js
    var swiper = new Swiper('.portfolio-slider-container', {
        loop: true,
        autoplay: {
            delay: 8000,
            disableOnInteraction: false
        },
        slidesPerGroup: 1,
        speed: 500,
        navigation: {
            nextEl: '.portfolio-slider-container .swiper-button-next',
            prevEl: '.portfolio-slider-container .swiper-button-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        }
    });

    // Brand Logo Slider Js
    var swiper = new Swiper('.brand-logo-slider-container', {
        autoplay: {
            delay: 4000,
        },
        lope: true,
        slidesPerGroup: 1,
        speed: 500,
        breakpoints: {
            1200: {
                slidesPerView: 6,
                spaceBetween: 0,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            576: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        }
    });

    // t Slider Js
    var swiper = new Swiper('.testi-slider-container', {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 600,
        pagination: {
            el: '.testi-slider-container .swiper-pagination',
            clickable: 'true',
        },
    });

    // Brand Logo Slider Js
    var swiper = new Swiper('.testi-col3-slider-container', {
        autoplay: {
            delay: 4000,
        },
        lope: true,
        slidesPerGroup: 1,
        speed: 500,
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        }
    });

    // Brand Logo Slider Js
    var swiper = new Swiper('.testi-col4-slider-container', {
        autoplay: {
            delay: 4000,
        },
        lope: true,
        slidesPerGroup: 1,
        spaceBetween: 30,
        speed: 500,
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        }
    });

    // Projecet Details Slider Js
    var swiper = new Swiper('.projecet-details-thumb-slider', {
        slidesPerGroup: 1,
        slidesPerView: 1,
        lope: true,
        spaceBetween: 30,
        speed: 600,
        navigation: {
            nextEl: '.projecet-details-thumb-slider .swiper-button-next',
            prevEl: '.projecet-details-thumb-slider .swiper-button-prev',
        },
    });

    // Projecet Details Slider Js
    var swiper = new Swiper('.post-gallery-slider', {
        slidesPerGroup: 1,
        slidesPerView: 1,
        lope: true,
        spaceBetween: 0,
        speed: 600,
        navigation: {
            nextEl: '.post-gallery-slider .swiper-button-next',
            prevEl: '.post-gallery-slider .swiper-button-prev',
        },
    });

    // Brand Logo Slider Js
    var swiper = new Swiper('.post-slider-container', {
        autoplay: {
            delay: 4000,
        },
        lope: true,
        spaceBetween: 30,
        slidesPerGroup: 1,
        speed: 500,
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });

    // Fancybox Js
    $('.image-popup').fancybox();
    $('.video-popup').fancybox();

    // Parallax Js
    $('.parallax').jarallax({
        // Element jarallax Parallax
    });

    // Aos Js
    AOS.init({
        once: true,
        duration: 1200,
    });

    // Svg Icon Js
    var $svgIconBox = $('.svg-icon-style');
    $svgIconBox.each(function () {
        var $this = $(this),
            $svgIcon = $this.find('.svg-icon'),
            $id = $svgIcon.attr('id'),
            $icon = $svgIcon.data('svg-icon');
        var $vivus = new Vivus($id, {duration: 140, file: $icon});
        $this.on('scroll', function () {
            $vivus.reset().play();
        });
    });

    //Progress Bar JS
    var skillsBar = $(".progress-line-bar");
    skillsBar.appear(function () {
        skillsBar.each(function (index, elem) {
            var elementItem = $(elem),
                skillBarAmount = elementItem.data('percent');
            elementItem.animate({
                width: skillBarAmount
            }, 1500);
            elementItem.closest('.progress-bar-item').find('.percent').text(skillBarAmount);
            elementItem.closest('.progress-bar-item').find('.progress-info').css('width', skillBarAmount);
        });
    });

    // Ajax Contact Form JS
    var form = $('#contact-form');
    var formMessages = $('.form-message');

    $(form).submit(function (e) {
        e.preventDefault();
        var formData = form.serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: formData
        }).done(function (response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('alert alert-danger');
            $(formMessages).addClass('alert alert-success fade show');

            // Set the message text.
            formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
            formMessages.append(response);

            // Clear the form.
            $('#contact-form input,#contact-form textarea').val('');
        }).fail(function (data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('alert alert-success');
            $(formMessages).addClass('alert alert-danger fade show');

            // Set the message text.
            if (data.responseText === '') {
                formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
                formMessages.append(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occurred and your message could not be sent.');
            }
        });
    });

    // Reveal JS
    let revealId = $(".reveal-footer"),
        footerHeight = revealId.outerHeight(),
        windowWidth = $(window).width(),
        windowHeight = $(window).outerHeight(),
        leftFixedHeader = $(".header-fixed-left"),
        leftFixedHeaderWidth = leftFixedHeader.innerWidth();

    if (windowWidth > 1399 && windowHeight > footerHeight) {
        $(".site-wrapper-reveal").css({
            'margin-bottom': footerHeight + 'px'
        });
    }

    if (windowWidth > 1399 && leftFixedHeader.length > 0) {
        $(".footer-area, .search-box-wrapper, .site-wrapper-left-header").css({
            'padding-left': leftFixedHeaderWidth + 'px'
        });
    }

    function scrollToTop() {
        var $scrollUp = $('#scroll-to-top'),
            $lastScrollTop = 0,
            $window = $(window);
        $window.on('scroll', function () {
            var st = $(this).scrollTop();
            if (st > $lastScrollTop) {
                $scrollUp.removeClass('show');
            } else {
                if ($window.scrollTop() > 120) {
                    $scrollUp.addClass('show');
                } else {
                    $scrollUp.removeClass('show');
                }
            }
            $lastScrollTop = st;
        });
        $scrollUp.on('click', function (evt) {
            $('html, body').animate({scrollTop: 0}, 50);
            evt.preventDefault();
        });
    }

    scrollToTop();

    /* ==========================================================================
       When document is loading, do
       ========================================================================== */
    var varWindow = $(window);
    varWindow.on('load', function () {
        stylePreloader();

        // Masonry Grid Js
        $(".masonry-grid").isotope();

        // Portfolio Filter Js
        const activeId = $(".portfolio-filter-menu li");
        $(".portfolio-filter-content").isotope();
        activeId.on('click', function () {
            const $this = $(this),
                filterValue = $this.data('filter');
            $(".portfolio-filter-content").isotope({
                filter: filterValue
            });
            activeId.removeClass('active');
            $this.addClass('active');
        });
    });

})(window.jQuery);