// sticky footer
$(function(){
  h = $(".footer").height();
  positionFooter();
  function positionFooter(){
    if($(document).height() <= $(window).height()) {
      var x = $(window).height() - h - 145;
      $(".content").css("min-height", x + "px");
    };
  };
  $(window)
    .scroll(positionFooter)
    .resize(positionFooter)
});

$(function(){
  $(".carousel").carousel();
  $(".carousel").find(".left").click(function () { $(".carousel").carousel('prev') });
  $(".carousel").find(".right").click(function () { $(".carousel").carousel('next') });
  $("li").each(function(){
          var href = $(this).children("a").attr("href");
          if (href) {
              if (window.location.pathname.substr(-href.length) == href) {
                  $(this).addClass("active");
              } else {
                  $(this).addClass("nochildren");
              }
          }
      });
  $(".nochildren").children("ul").hide();
})

