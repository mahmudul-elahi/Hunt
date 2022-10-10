$(function () {
  $(".about-message").hover(
    function () {
      var postion = $(this).attr("class").split(/\s+/)[2];
      $(".dot." + postion).css("background", "#fec600");
    },
    function () {
      var postion = $(this).attr("class").split(/\s+/)[2];
      $(".dot." + postion).css("background", "#111");
    }
  );

  var navbar = $("#navbar");
  var padding = $("#navbar ul li a");
  $(window).scroll(() => {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > 150) {
      navbar.addClass("navbarScrollEffect");
      padding.addClass("navbarPadding");
    } else if (scrollTop <= 50) {
      navbar.removeClass("navbarScrollEffect");
      padding.removeClass("navbarPadding");
    }
  });

  //Banner Slider
  $(".services-main").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    infinite: true,
    arrows: true,
    verticalSwiping: true,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    nextArrow:
      '<div class="slider-arrow top"><i class="fas fa-angle-right"></i></div>',
    prevArrow:
      '<div class="slider-arrow bottom"><i class="fas fa-angle-left"></i></div>',
  });

  $(".testimonial-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    infinite: true,
    arrows: true,
    verticalSwiping: true,
    centerMode: true,
    centerPadding: "0px",
    nextArrow:
      '<div class="testimonial-arrow top"><i class="fas fa-angle-right"></i></div>',
    prevArrow:
      '<div class="testimonial-arrow bottom"><i class="fas fa-angle-left"></i></div>',
    asNavFor: ".items-text-slider",
  });

  $(".items-text-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    verticalSwiping: true,
    fade: true,
    speed: 500,
    cssEase: "ease-in-out",
    asNavFor: ".testimonial-slider",
  });

  //Counter UP
  $(".counter").counterUp({
    delay: 10,
    time: 2500,
  });
});
