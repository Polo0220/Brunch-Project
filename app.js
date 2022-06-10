$(document).ready(function () {
  // 漢堡選單
  $(".openIcon").on("click", function (e) {
    e.preventDefault();
    $(".sideList").toggleClass("openSideList");
  });

  // Animate.css 設定
  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();

    $(".animateFadeInUp").each(function () {
      var thisPos = $(this).offset().top;
      if (windowHeight + scrollPos >= thisPos) {
        $(this).addClass("animate__animated animate__fadeInUp");
      }
    });

    $(".animatedZoomIn").each(function () {
      var thisPos = $(this).offset().top;
      if (windowHeight + scrollPos >= thisPos) {
        $(this).addClass("animate__animated animate__zoomIn");
      }
    });

    $(".animatedZoomIn_1s").each(function () {
      var thisPos = $(this).offset().top;
      if (windowHeight + scrollPos >= thisPos) {
        $(this).addClass("animate__animated animate__zoomIn animate__delay-1s");
      }
    });

    $(".animatedZoomIn_2s").each(function () {
      var thisPos = $(this).offset().top;
      if (windowHeight + scrollPos >= thisPos) {
        $(this).addClass("animate__animated animate__zoomIn animate__delay-2s");
      }
    });

    $(".animatedFlipInX").each(function () {
      var thisPos = $(this).offset().top;
      if (windowHeight + scrollPos >= thisPos) {
        $(this).addClass("animate__animated animate__flipInX");
      }
    });
  });
});
