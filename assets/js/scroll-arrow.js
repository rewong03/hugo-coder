$(window).scroll(function(){
    $(".arrows").css("opacity", 1 - $(window).scrollTop() / 500);
  });
