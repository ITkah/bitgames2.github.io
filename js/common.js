$.fn.extend({
    toggleText: function(a, b) {
        return this.text(this.text() == b ? a : b);
    }
});

var activeText = $(".show_more_text").val();
var disabledText = $(".show_more_text_active").val();

$('.custom_infos').each(function(index, value) {
    if ($(this).height() > 150) {
        $(this).addClass("hide_text_infos");
        $(this).siblings(".show_more_infos").addClass("active_show");
    }
});

$(".show_more_infos").on("click", function() {
    $(this).siblings(".hide_text_infos").toggleClass("hide_text_active");
    $(this).children("span").toggleText(activeText, disabledText);
    $(this).toggleClass("active_rotate");
});


$("nav ul li").each(function() {
    this_li = $(this);
    if ($(this_li).find("ul").length > 0) {
        $(this_li).append('<span class="arrow_mob"></span>');
        $(this_li).children('a').addClass("arrow_link");
    }
});

function callCook() {
    $(".cookies").addClass("cookies_add");
}


$(".del_cook").on("click", function(e) {
    e.preventDefault();
    $(".cookies").addClass("deleted");
});

$(".search_call").on("click", function() {
    $(".search_form").toggleClass("search_form_active");
});

$(".arrow_mob").on("click", function() {
    $(this).toggleClass("arr_active");
    $(this).siblings(".sub_menu").slideToggle(200);
});

$(".sub_menu .arrow_mob").on("click", function() {
    $(this).siblings(".sub_menu_2").slideToggle(200);
});


$(".sub_menu_2 .arrow_mob").on("click", function() {
    $(this).siblings(".sub_menu_3").slideToggle(200);
});

$(".call_menu").on("click", function() {
    $(".header_nav").toggleClass("header_nav_active");
});

$(".close_menu").on("click", function() {
    $(".header_nav").removeClass("header_nav_active");
});

$(".call_lang").on("click", function() {
    $(".select_lang_wrap").slideToggle(200);
    $(".header_nav ul").toggle();
});

$('.phone').on('input', function() {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
});

var year = new Date().getFullYear();
$(".year").text(year);

$('.faq_wrap .acc_head').on('click', function() {
    $('.faq_wrap .acc_body').not($(this).next()).slideUp(150).parent().removeClass("active_acc");
    $(this).next().slideToggle(150).parent().toggleClass('active_acc');
});

$(".show_more").on("click", function() {
    $(this).siblings(".hide_text").toggleClass("hide_text_active");
    $(this).children("span").toggleText(activeText, disabledText);
    $(this).toggleClass("active_rotate");
});

$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.generate_casino_tab').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});


const swiper = new Swiper('.swiper_casino', {
    loop: true,
    centerInsufficientSlides: false,
    centeredSlides: false,
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    autoplay: {
        delay: 4500,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 5
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        1100: {
            slidesPerView: 7,
            spaceBetween: 10
        }
    },
    //If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.right_slider',
        prevEl: '.left_slider',
    },
});

$(".call_hide_item").on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("active_link");
    $(this).parent().parent().siblings(".item_hide_wrap").slideToggle(200);
});


$(".blog_filter_select select").on("click", function() {
    $('.blog_filter_select select').not(this).parent().removeClass("img_active");
    $(this).parent().toggleClass("img_active");
});

$(".blog_filter_select select").on("mouseleave", function() {
    $(".blog_filter_select").removeClass("img_active");
    $(this).blur();
});


$(".blog_filter_call").on("click", function() {
    $(this).toggleClass("blog_filter_call_active")
    $(".blog_filter_wrap").slideToggle(200);
});


const swiper2 = new Swiper('.about_team_wrap', {
    loop: false,
    centerInsufficientSlides: false,
    centeredSlides: false,
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 15
        }
    },
    //If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


const swiper3 = new Swiper('.game_slider', {
    loop: false,
    centerInsufficientSlides: false,
    centeredSlides: false,
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        360: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 15
        }
    },
    //If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const swiper4 = new Swiper('.soft_holl_slider', {
    loop: false,
    centerInsufficientSlides: false,
    centeredSlides: false,
    slidesPerView: 1,
    spaceBetween: 15,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

$(".sort_filter select").on("click", function() {
    $('.sort_filter select').not(this).parent().removeClass("img_active");
    $(this).parent().toggleClass("img_active");
});

$(".sort_filter select").on("mouseleave", function() {
    $(".sort_filter").removeClass("img_active");
    $(this).blur();
});

$(".filter_item_title").on("click", function() {
    $('.filter_item_title').not(this).removeClass("arr_rotate").next(".filter_item_hide").slideUp(150);
    $(this).toggleClass("arr_rotate").next(".filter_item_hide").slideToggle(150);
});

$(".filter_title").on("click", function() {
    $(".filter_box_wrap").slideToggle(200);
});

$(".show_all").on("click", function() {
    $(this).siblings(".hide_payments").slideToggle(200);
});

$(".call_item_list").on("click", function() {
    $(this).next(".item_list").slideToggle(200);
});


$('.copy_img').click(function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(this).siblings(".copyinfo_text").text()).select();
    document.execCommand("copy");
    $temp.remove();
    $(this).parent().addClass("suces");
});

$(".page_casino_navigation").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top - 50;
    $('body,html').animate({ scrollTop: top }, 1500);
});

$(".red").on("click", function() {
    $(this).addClass("red_active");
    $(".details_tabs").addClass("red_active_border");
});

$(".dis").on("click", function() {
    $(".red").removeClass("red_active");
    $(".details_tabs").removeClass("red_active_border");
});




$(".active_more").on("click", function() {
    $(".active_more").toggleClass("hide_block");
    $(this).toggleClass("active_more_click");
    $(this).children("p").children("span").toggleText('+', '-');
    $(".detail_elements_list").toggleClass("detail_block");
});

$(".call_poll").on("click", function() {
    $(".poll_table").toggleClass("poll_table_act");
});

$(".call_poll").on("click", function(e) {
    e.preventDefault();
    $(".suc_poll").removeClass("poll_table_act");
});

var num = parseInt($.cookie("visit") || 0) + 1;
$.cookie("visit", num, { expires: 1 });
if (num == 1) {
    setTimeout(callCook, 1500);
} else {
    console.log("Куки сохранены");
}