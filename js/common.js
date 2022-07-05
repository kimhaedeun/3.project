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

        //
        $(".select_box:not(.on)").each(function() {
            var getSelectBox = $(this);
            var getValue = $(this).find(".btn_select");
            var getSelect = $(this).find(".select");
            var getSelectList = $("<ul class='select_list'></ul>");
            getSelect.find("option").each(function() {
                getSelectList.append("<li><a href='#' data-value='" + $(this).attr("value") + "'>" + $(this).text() + "</a></li>");
            });
            getSelectBox.append(getSelectList);
            getSelectBox.addClass("on").find(".select").on("change", function() {
                getValue.html(getSelect.find("option:selected").text());
                if(getSelect.hasClass("select_email")) {
                    if(this.value == "") {
                        getSelect.closest(".email_box").find(".input_email").prop("readonly",false).val("").focus();
                    }
                    else {
                        getSelect.closest(".email_box").find(".input_email").prop("readonly",true).val(this.value);
                    }
                }
            });
            getValue.html(getSelect.find("option:selected").text());
            
            getValue.on("click", function() {
                if(getSelectBox.hasClass("active")) {
                    getSelectBox.removeClass("active");
                }
                else {
                    $(".select_box.active").removeClass("active");
                    getSelectBox.addClass("active");
                }
                return false;
            });
            getSelectList.find("a").on("click", function() {
                getSelectBox.removeClass("active");
                getSelect.val($(this).data("value")).trigger("change");
                return false;
            });
        });
		
		$(".select_box:not(.on)").each(function() {
            var getValue = $(this).find(".btn_select");
            var getSelect = $(this).find(".select");
            $(this).addClass("on").find(".select").on("change", function() {
                getValue.html(getSelect.find("option:selected").text());
                if(getSelect.hasClass("select_email")) {
                    if(this.value == "") {
                        getSelect.closest(".email_box").find(".input_email").prop("readonly",false).val("").focus();
                    }
                    else {
                        getSelect.closest(".email_box").find(".input_email").prop("readonly",true).val(this.value);
                    }
                }
            });
            getValue.html(getSelect.find("option:selected").text());
        });
        
        $(".check_box:not(.on)").each(function() {
            var getCheck = $(this).addClass("on").find(".check").on("change", function() {
                if(this.checked) {
                    $(this).parent().addClass("active");
                }
                else {
                    $(this).parent().removeClass("active");
                }
            });
            if(getCheck.is(":checked")) {
                $(this).addClass("active");
            }
        });

        $(".radio_box:not(.on)").each(function() {
            var getCheck = $(this).addClass("on").find(".radio").on("change", function() {
                $(this).closest(".radio_area").find(".active").removeClass("active");
                if(this.checked) {
                    $(this).parent().addClass("active");
                }
            });
            if(getCheck.is(":checked")) {
                $(this).addClass("active");
            }
        });



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

function priceCheck(seq){ 

    var offset = $("#form_btn").offset();
    var priceHeight = $("#form_btn").offset();

    $('html, body').animate({scrollTop : priceHeight.top - 450}, 400);

    if($(".price_panel .price_table").hasClass("active_01")) {
        $(".price_panel .price_table").removeClass("active_01");
        $(".price_panel .price_table").addClass("active_0" + seq);
    }
    else if($(".price_panel .price_table").hasClass("active_02")) {
        $(".price_panel .price_table").removeClass("active_02");
        $(".price_panel .price_table").addClass("active_0" + seq);
    }
    else if($(".price_panel .price_table").hasClass("active_03")) {
        $(".price_panel .price_table").removeClass("active_03");
        $(".price_panel .price_table").addClass("active_0" + seq);
    }
    else if($(".price_panel .price_table").hasClass("active_04")) {
        $(".price_panel .price_table").removeClass("active_04");
        $(".price_panel .price_table").addClass("active_0" + seq);
    }
    else {
        $(".price_panel .price_table").addClass("active_0" + seq);
    }
    return false;
    

}

//디바이스
function deviceCheck(seq){ 


    if($(".device_table").hasClass("active_01")) {
        $(".device_table").removeClass("active_01");
        $(".device_table").addClass("active_0" + seq);
        $(".price_desc_box").removeClass("active_01");
        $(".price_desc_box").addClass("active_0" + seq);
    }
    else if($(".device_table").hasClass("active_02")) {
        $(".device_table").removeClass("active_02");
        $(".device_table").addClass("active_0" + seq);
        $(".price_desc_box").removeClass("active_02");
        $(".price_desc_box").addClass("active_0" + seq);
    }
    else if($(".device_table").hasClass("active_03")) {
        $(".device_table").removeClass("active_03");
        $(".device_table").addClass("active_0" + seq);
        $(".price_desc_box").removeClass("active_03");
        $(".price_desc_box").addClass("active_0" + seq);
    }
    else if($(".device_table").hasClass("active_04")) {
        $(".device_table").removeClass("active_04");
        $(".device_table").addClass("active_0" + seq);
        $(".price_desc_box").removeClass("active_04");
        $(".price_desc_box").addClass("active_0" + seq);
    }
    else if($(".device_table").hasClass("active_05")) {
        $(".device_table").removeClass("active_05");
        $(".device_table").addClass("active_0" + seq);
        $(".price_desc_box").removeClass("active_05");
        $(".price_desc_box").addClass("active_0" + seq);
    }
    else {
        $(".device_table").addClass("active_0" + seq);
    }
    return false;
    

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


/*mobile_menu*/
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




