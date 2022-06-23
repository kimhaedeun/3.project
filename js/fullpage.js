
    //js/dot.js
    $(function(){
      var dot = $("#dot ul li");
      var contents = $(".page_wrap>.page");

      dot.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        var section = contents.eq(index);
        var offset = section.offset().top;
        $("html,body").animate({scrollTop:offset},600);
      });

      $(window).scroll(function(){
        var wScroll = $(this).scrollTop();

        if(wScroll >= contents.eq(0).offset().top){
          dot.css({"background":"rgba(255,255,255,0.1)"});
          dot.find("a").css({"background":"rgba(255,255,255,0.5)"});
          dot.removeClass("active");
          dot.eq(0).addClass("active");
          dot.eq(0).find("a").css({"background":"#0cdaff"});
        }
        if(wScroll >= contents.eq(1).offset().top){
          dot.css({"background":"rgba(0,0,0,0.7)"});
          dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
          dot.removeClass("active");
          dot.eq(1).addClass("active");
          dot.eq(1).find("a").css({"background":"#0189ff"});
        }
        if(wScroll >= contents.eq(2).offset().top){
          dot.removeClass("active");
          dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
          dot.eq(2).addClass("active");
          dot.eq(2).find("a").css({"background":"#f0a91b"});
        }
        if(wScroll >= contents.eq(3).offset().top){
          dot.removeClass("active");
          dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
          dot.eq(3).addClass("active");
          dot.eq(3).find("a").css({"background":"#fff"});
        }
        if(wScroll >= contents.eq(4).offset().top){
          dot.removeClass("active");
          dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
          dot.eq(4).addClass("active");
          dot.eq(4).find("a").css({"background":"#d6130f"});
        }
        if(wScroll >= contents.eq(5).offset().top){
          dot.removeClass("active");
          dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
          dot.eq(5).addClass("active");
          dot.eq(5).find("a").css({"background":"#a0ef08"});
        }
        if(wScroll >= contents.eq(6).offset().top){
          dot.removeClass("active");
          dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
          dot.eq(6).addClass("active");
          dot.eq(6).find("a").css({"background":"#9517ff"});
        }

      });

      return false;
    });

    //js/side.js
    $(function(){

      $('.wrap_af').hide();

      $(".fa-bars").click(function(){
        $("#side").animate({left:'0'},500);
        $(this).fadeOut();
        $('.wrap_af').fadeIn();
      });



      $(".fa-chevron-left").click(function(){
        $("#side").animate({left:'-310'},500);
        $(".fa-bars").fadeIn();
        $('.wrap_af').fadeOut();
      });

    });


    //js/mousewheel.js
    $(function(){
      var win_h = $(window).height();
      $('.page').each(function(index){
        $(this).attr("data-index",win_h * index);
      });

      $('.page').on("mousewheel",function(e){
        var pagePos = parseInt($(this).attr("data-index"));
        if(e.originalEvent.wheelDelta >=0 ){
          $("html,body").stop().animate({scrollTop:pagePos - win_h});
          return false;
        } else if (e.originalEvent.wheelDelta < 0) {
          $("html,body").stop().animate({scrollTop:pagePos + win_h});
          return false;
        }
      });
    });
