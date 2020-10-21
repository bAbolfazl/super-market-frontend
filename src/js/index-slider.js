$("#slider-top").slick({
  rtl: true,
  dots: true,
  arrows: true,
  // autoplay: true,
});

$(".products-slider").slick({
  rtl: true,
  arrows: true,
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        // infinite: true,
        // dots: true
      },
    },
  ],
});
