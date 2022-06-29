
$(function() {
    page.init();
});

var page = {
    init: function() {		
		//공통
        page.common();
        
        //페이지 에니메이션
        page.animate();       
              
    },
    common: function() {

        //btn_top
        $(function() {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 10) {
                    $('#btn_top').fadeIn();
                    $('.quick_event_box').addClass("pcbot");
                    $('.btn_quick').addClass("pcbot");
                } else {
                    $('#btn_top').fadeOut();
                    $('.quick_event_box').removeClass("pcbot");
                    $('.btn_quick').removeClass("pcbot");
                }
            });

            $("#btn_top").click(function() {
                $('html, body').animate({
                    scrollTop : 0
                }, 400);
                return false;
            });


        });


        //faq
        $(function() {
            $(".faq_wrap .faq li a.f_tit").on("click", function() {
                if($(this).hasClass("active")) {
                    $(this).removeClass("active").next().stop(true,true).slideUp(200);
                }
                else {
                    //$(".faq_wrap .faq li a.active").removeClass("active").next().stop(true,true).slideUp(200);
                    $(this).addClass("active").next().stop(true,true).slideDown(200);
                }
                return false;
            });
        });
        

    },
    animate: function() {
        var getAnimate = $(".page_animate");
        if(getAnimate.length > 0) {
            var animateInterval = null;
            var mainNumberObj = $("#main_number");
            function animateScroll() {
                clearTimeout(animateInterval);
                animateInterval = setTimeout(function() {
                    var getScroll = $(window).scrollTop();
                    var getScrollTop = getScroll + $(window).height();
                    var animateIdx = 0;
                    $(".page_animate").each(function() {
                        var getObj = $(this);
                        var getTop = getObj.offset().top;
                        //var getHeight = getObj.height();
                        if(getScrollTop > getTop) {
                            if(!getObj.hasClass("animate")) {
                                animateIdx += 1;
                                var getAnimateIdx = animateIdx;
                                setTimeout(function() {
                                    getObj.addClass("animate");
                                    if(getObj.hasClass("number_box")) {
                                        var getNumber = parseInt(mainNumberObj.data("value"), 100);
                                        mainNumberObj.html("").prop("count",0).stop(true,true).delay(animateIdx * 100).animate({
                                            count:getNumber
                                        }, {
                                            duration: 2000,
                                            easing:"easeOutExpo",
                                            step: function (now) {
                                                var getStep = Math.ceil(now);
                                                getStep = getStep.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                                $(this).text(getStep);
                                            }
                                        });
                                    }
                                }, getAnimateIdx * 100);

                            }
                        }
                        else {
                            getObj.removeClass("animate");
                        }
                    });
                    
                }, 10);
            }
            $(window).on("scroll resize", function() {
                animateScroll();
            });
            animateScroll();
        }
    }
   
    
    
}

 
function fnMove(seq){
    var offset = $("#section" + seq).offset();
    $('html, body').animate({scrollTop : offset.top - 48}, 400);
    $("html, body").removeClass("overhide");
    $("html, body").removeClass("menu_open");
}

function notiMove(seq){
    var btn_noti = $("#btn_noti" + seq);    
    var box_noti = $("#box_noti" + seq);    

    $(".noti_panel .tab_box a").removeClass("active");
    btn_noti.addClass("active");

    $(".noti_panel .box_wrap").removeClass("active");
    box_noti.addClass("active");
}





//스크롤
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    //console.log(scroll);
    if (scroll >= 50) {      
        $("body").addClass("scroll");       
    } else {     
        $("body").removeClass("scroll");
    }

    
});

/*mobile_menu 언어*/
$(document).ready(function(){
    $("#btn_menu").click(function(){
       // $("ul",this).slideToggle("fast");
       $("html").toggleClass("menu_open");
    });
});


$(document).ready(function(){
    $("#btn_lang").click(function(){
       $(this).parent().toggleClass("open");
    });
});


$(document).ready(function(){
    $(".header .gnb ul li .ic").click(function(){

        if($(this).parent().hasClass("active")) {
            $(this).parent().removeClass("active");
            $(this).next().stop(true,true).slideUp(200);
        }
        else {
            $(".header .gnb ul li.active").removeClass("active");
            $(".header .gnb ul li.active .ic").next().stop(true,true).slideUp(200);
            $(this).parent().addClass("active");
            $(this).next().stop(true,true).slideDown(200);
        }
        
    });
});

