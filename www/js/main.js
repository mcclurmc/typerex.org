$(function(){
  $(".carousel").carousel();
  $(".carousel").find(".left").click(function () { $(".carousel").carousel('prev') });
  $(".carousel").find(".right").click(function () { $(".carousel").carousel('next') });
  $("li").each(function(){
          var href = $(this).children("a").attr("href");
          if (href) {
              if (window.location.pathname.substr(-href.length) == href) {
                  $(this).addClass("active");
              }
          }
      })
      })

