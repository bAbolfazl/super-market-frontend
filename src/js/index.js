const main = () => {
  // vars
  const STATE = {
    scroll_breakPoint: 200,
  };

  const topBigSliderBottom = document.querySelector(".top-big-slider__bottom");
  const sliderTop_dots = document.querySelector("#slider-top .slick-dots");
  const sliderTop_arrows = document.querySelectorAll(
    "#slider-top .slick-arrow"
  );

  // utils
  const hide = (item) => {
    item.classList.add("hide");
    setInterval(() => {
      item.classList.add("d-none");
    }, 1500);
  };
  const show = (item) => {
    item.classList.remove("d-none");
    setInterval(() => {
      item.classList.remove("hide");
    }, 1500);
  };

  // funcs
  const topBigSliderBottom_show = () => {
    topBigSliderBottom.classList.remove("d-none");
    sliderTop_dots.classList.remove("d-none");
    sliderTop_arrows[0].classList.remove("d-none");
    sliderTop_arrows[1].classList.remove("d-none");

    //   $(".top-big-slider__bottom").fadeIn();
    //   show(topBigSliderBottom);
  };
  const topBigSliderBottom_hide = () => {
    topBigSliderBottom.classList.add("d-none");
    sliderTop_dots.classList.add("d-none");
    sliderTop_arrows[0].classList.add("d-none");
    sliderTop_arrows[1].classList.add("d-none");

    //   $(".top-big-slider__bottom").fadeOut();
    //   hide(topBigSliderBottom);
  };

  // handlers
  const handle_window_scroll = () => {
    const user_scrollY = window.scrollY;
    // const user_screenHeight = window.innerHeight;

    if (user_scrollY < STATE.scroll_breakPoint) {
      if (!topBigSliderBottom.classList.contains("d-none")) return;

      topBigSliderBottom_show();
    } else if (scrollY > STATE.scroll_breakPoint) {
      if (topBigSliderBottom.classList.contains("d-none")) return;

      topBigSliderBottom_hide();
    }
  };

  // events
  window.addEventListener("scroll", handle_window_scroll);
};

window.addEventListener("load", main);

window.addEventListener("scroll", () => {
  console.log(window.document.body.scrollTop);
  //   document.querySelector("header>div").innerText = document.body.scrollTop;
});
