$(function(){
  $(".carousel").carousel()
  $("li").each(function(){
          var href = $(this).children("a").attr("href");
          if (href) {
              if (window.location.pathname.substr(-href.length) == href) {
                  console.log("found");
                  $(this).addClass("active");
              }
          }
      })
      })

