$('.address-slider').slick({
    slidesToShow: 3,
    variableWidth: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png" alt=""></button>'
});


$(document).ready(function () {
    $('.products-slider').each(function () {
        $(this).slick({
            slidesToShow: 4,
            appendArrows: $(this).parents('.section-slider').find('.slider-nav'),
            prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png" alt=""></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png" alt=""></button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,

                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,

                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        variableWidth: true,
                        centerMode: true,
                    }
                }
            ]
        });
    });

    $('.products-slider-v2').each(function () {
        $(this).slick({
            slidesToShow: 3,
            appendArrows: $(this).parents('.section-slider').find('.slider-nav'),
            prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png" alt=""></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png" alt=""></button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,

                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        variableWidth: true,
                        centerMode: true,
                    }
                }
            ]
        });
    });
});

// slick active
$(window).on('load resize', function () {
    if ($(window).width() < 576) {
        $('.category-products:not(.slick-initialized)').slick({
            infinite: true,
            slidesToShow: 1,
            arrows: false,
            variableWidth: true,
            centerMode: true,
        });
    } else {
        $(".category-products.slick-initialized").slick("unslick");
    }
});
// slick active

$('.product-preview').slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png" alt=""></button>',
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    asNavFor: '.product-slider',
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                vertical: false,
                verticalSwiping: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                vertical: false,
                verticalSwiping: false
            }
        }

    ]
});

$('.product-slider').slick({
    slidesToShow: 1,
    asNavFor: '.product-preview',
    fade: true,
    arrows: false
});

$('.btn-search').on('click', function () {
    $('.form-search').fadeToggle();
});

$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".mobile-menu"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.fadeOut(); // скрываем его
    }
});

// show list all
$('.links-toggle').on('click', function (e) {
    e.preventDefault();

    var
        $this = $(this),
        content = $(this).parents('.product-details-description').find('.box-text');


    if (!$this.hasClass('trigger')) {
        $this.addClass('trigger');
        $this.html('Свернуть');

        content.addClass('open');
    } else {
        $this.removeClass('trigger');
        $this.html('Показать ещё');

        content.removeClass('open');
    }
});
// show list all

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});