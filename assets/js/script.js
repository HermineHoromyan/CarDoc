
//  ================ -menu-click-start- ================
$(document).ready(function () {
    var time = 0;
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if (window.innerHeight < 380) {
            // $('.sidenav').css({'overflow-y': 'auto'})
        }

        if ($(this).hasClass('close-menu')) {
            $('.menu-cnt').addClass('transition-menu');
            $('.menu-header-mobile').css({'max-width': '100%', transition: '0.3s'})
            $('.menu-cnt').css({width: '500px', transition: '0.4s'});
            $('body').addClass('body_fix');
            var menu_li = $(".sidenav>ul>li");
            $(menu_li).each(function () {
                time++;
                $(this).css({'transition-delay': '0.' + time + 's'});
                $(this).addClass('anim-menu')
            })
        } else {
            $('.menu-cnt').css({width: '0%'});
            $('body').removeClass('body_fix');
            time = 0;
            var menu_lis = $(".sidenav ul li");
            $(menu_lis).each(function () {
                if ($(this).hasClass('anim-menu')) {
                    $(this).removeClass('anim-menu');
                    $(this).css({'opacity': '0', transition: '0.2s'})
                }
            })
        }

    });

    $('.for-mobile-bg').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').css({width: '0%'});
        $('body').removeClass('body_fix');
        time = 0;
        var menu_li = $(".sidenav ul li");
        $(menu_li).each(function () {
            if ($(this).hasClass('anim-menu')) {
                $(this).removeClass('anim-menu');
                $(this).css({'opacity': '0', transition: '0.2s'})
            }
        })
    })
})

//  ================ -menu-click-end- ================


function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("filterInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("filterList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

$(document).ready(function () {
    $(".scroller").click(function () {
        var aid = $(this).attr("href");
        $('html,body').animate({ scrollTop: $(aid).offset().top + 20 }, 'slow');
    });
});





$('.auto-service__slide--js').slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                arrows: false,
                autoplay:true

            }
        },

        {
            breakpoint: 767.98,
            settings: {
                slidesToShow: 1,
                arrows: false,

            }
        },

    ]
});


// scroll to
$("body").on('click', '.mouser-dun', function(e){
    var scrollTo = $(this).data('scroll');
    $('html,body').stop().animate({ scrollTop: $('#'+scrollTo).offset().top }, 1000);
    e.preventDefault();
});


//typical-page

$(document).ready(function () {
    addActiveClass('active-tab__ul', 'active-tab__active');
    changeCaseBlock(this, 'active-tab__ul', 'active-tab__blocks',  'active-tab__active', 'click-active__tab');

    $('.click-active__tab').on('click', function () {
        changeActiveClassWithClick(this, 'active-tab__ul', 'active-tab__active')
        changeCaseBlock(this, 'active-tab__ul', 'active-tab__blocks',  'active-tab__active', 'click-active__tab');
    })

    //    add Active Class for case menu
    function addActiveClass(parent_menu, active_class) {
        var prt = $('.' + parent_menu);
        var prt_childrens = $(prt).children();
        var prt_child_li = $(prt_childrens).children();
        var first_child = $(prt_child_li)[0]
        if (!$(first_child).hasClass(active_class)) {
            !$(first_child).addClass(active_class)
        }
    }

    //  change  active class with click menu case
    function changeActiveClassWithClick($this, parent_block, active_class) {
        var prt = $($this).parents('.' + parent_block);
        var prt_child = $(prt).find('li');
        $(prt_child).each(function () {
            $(this).removeClass(active_class);
        })
        $($this).addClass(active_class);
    }

    //   change case block with click  case menu
    function changeCaseBlock($this, case_menu, case_block, active_class, menu_link) {
        var case_menu_block = $('.' + case_menu);
        var case_block_sub = $('.' + case_block);

        var case_block_child = $(case_block_sub).children();

        $(case_block_child).each(function () {
            $(this).hide();
        })

        if ($($this).hasClass(menu_link)) {
            var this_attr = $($this).attr('data-catalog');

            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == this_attr) {
                    $(this).fadeIn()
                }
            })

        } else {
            var active_find = $(case_menu_block).find('.' + active_class);
            var active_find_attr = $(active_find).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == active_find_attr) {
                    $(this).fadeIn()
                }
            })

        }
    }

})


// mask
$(document).ready(function () {
    $(".phone").mask('+7 999 - 999 - 99 - 99');
});

//  modal
$('.open_modal').on('click', function () {
    var attr = $(this).attr('data-val');
    var modal = $('#' + attr);
    modal.removeClass('out')
    $('body').css({overflow: 'hidden '})
    modal.fadeIn()

})

$('.close').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100)
    $('body').css({overflow: 'visible '})


})

$(window).on('click', function (event) {
    $('.modal').each(function () {
        var gtattr = $(this).attr('id');
        var new_mod = $('#' + gtattr);
        var md_cnt = $(new_mod).find('.modal-content')

        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out')
                $(new_mod).fadeOut()

            }, 100)
            $('body').css({overflow: 'visible '})
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out')
                $(new_mod).fadeOut()

            }, 100)
            $('body').css({overflow: 'visible '})

        }
    })
})



$(document).ready(function() {

    $('.license-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true,
        }
    });

});

//range
$("#slider-range").slider({
    range: true,
orientation: "horizontal",
min: 0,
max: 20000,
values: [0, 20000],
step: 100,
slide: function (event, ui) {
    if (ui.values[0] == ui.values[1]) {
        return false;
    }
    $("#min_price").val(ui.values[0]);
    $("#max_price").val(ui.values[1]);
}
});



$('.review-list').click(function(){
    $(this).toggleClass('active-list');
});