const main = () => {
  // vars
  const STATE = {
    scroll_breakPoint: 50,
    rightMenuDesktop_open: false,
  };

  const topBigSliderBottom = document.querySelector(".top-big-slider__bottom");
  const topBigSliderBottom2 = document.querySelector(
    ".top-big-slider__bottom--2"
  );
  const sliderTop_dots = document.querySelector("#slider-top .slick-dots");
  const sliderTop_arrows = document.querySelectorAll(
    "#slider-top .slick-arrow"
  );

  const centerContent = document.querySelector("#center-content");
  const rightMenuDesktop = document.querySelector(".right-menu--desktop");
  const rightMenuDesktop_Btn = document.querySelector(
    "#right-menu--desktop-btn"
  );

  const leftCartDesktop = document.querySelector(".left-cart--desktop");
  const leftCartDesktop_Btn = document.querySelector(
    ".left-cart--desktop__btn"
  );
  const leftCartDesktop_Btn_close = document.querySelector(
    "#left-cart--desktop__btn--close"
  );

  const bottomCartMobileCont = document.querySelector(
    "#bottom-cart--mobile_cont"
  );
  const bottomCartMobile = document.querySelector(".bottom-cart--mobile");
  const bottomMenuMobile_btn = document.querySelector(
    "#bottom-menu--mobile_btn"
  );
  const bottomCartMobile_btn_close = document.querySelector(
    "#bottom-cart--mobile__btn--close"
  );

  // utils

  // const hide = (item) => {
  //   item.classList.add("hide");
  //   setInterval(() => {
  //     item.classList.add("d-none");
  //   }, 1500);
  // };
  // const show = (item) => {
  //   item.classList.remove("d-none");
  //   setInterval(() => {
  //     item.classList.remove("hide");
  //   }, 1500);
  // };

  // funcs
  const openLeftCartDesktop = () => {
    leftCartDesktop.classList.remove("removedX--n");

    leftCartDesktop_Btn.classList.add("removedX--n2");
  };
  const closeLeftCartDesktop = () => {
    leftCartDesktop.classList.add("removedX--n");

    leftCartDesktop_Btn.classList.remove("removedX--n2");
  };
  const topBigSliderBottom_show = () => {
    topBigSliderBottom.classList.remove("d-none");
    sliderTop_dots.classList.remove("d-none");
    sliderTop_arrows[0].classList.remove("d-none");
    sliderTop_arrows[1].classList.remove("d-none");

    topBigSliderBottom2.classList.add("d-none");

    //   $(".top-big-slider__bottom").fadeIn();
    //   show(topBigSliderBottom);
  };
  const topBigSliderBottom_hide = () => {
    topBigSliderBottom.classList.add("d-none");
    sliderTop_dots.classList.add("d-none");
    sliderTop_arrows[0].classList.add("d-none");
    sliderTop_arrows[1].classList.add("d-none");

    topBigSliderBottom2.classList.remove("d-none");

    //   $(".top-big-slider__bottom").fadeOut();
    //   hide(topBigSliderBottom);
  };
  const openRightMenuDesktop = () => {
    rightMenuDesktop.classList.remove("removedX");
    centerContent.classList.add("center-content--small");

    STATE.rightMenuDesktop_open = true;
  };
  const closeRightMenuDesktop = () => {
    // debugger
    rightMenuDesktop.classList.add("removedX");
    centerContent.classList.remove("center-content--small");

    STATE.rightMenuDesktop_open = false;
  };

  // handlers
  let handle_window_scroll;
  (handle_window_scroll = () => {
    // debugger
    const user_scrollY = window.scrollY;
    // const user_screenHeight = window.innerHeight;

    if (user_scrollY < STATE.scroll_breakPoint) {
      if (!topBigSliderBottom.classList.contains("d-none")) return;

      topBigSliderBottom_show();
    } else if (user_scrollY > STATE.scroll_breakPoint) {
      if (topBigSliderBottom.classList.contains("d-none")) return;

      topBigSliderBottom_hide();
    }
  })();
  const handle_rightMenuDesktop_btn_click = () => {
    if (STATE.rightMenuDesktop_open) closeRightMenuDesktop();
    else openRightMenuDesktop();

    // debugger
  };
  const handle_centerContent_click = (e) => {
    const target = e.target;
    // console.log(target);
    if (STATE.rightMenuDesktop_open && !(rightMenuDesktop_Btn == target))
      closeRightMenuDesktop();
  };
  const handle_leftCartDesktop_Btn_click = () => {
    openLeftCartDesktop();
  };
  const handle_leftCartDesktop_Btn_close_click = () => {
    closeLeftCartDesktop();
  };
  const handle_bottomMenuMobile_btn_click = () => {
    bottomCartMobileCont.classList.remove("hide");
    bottomCartMobile.classList.remove("removedY");
  };
  const handle_bottomCartMobile_btn_close_click = () => {
    bottomCartMobileCont.classList.add("hide");
    bottomCartMobile.classList.add("removedY");
  };

  // events
  leftCartDesktop_Btn_close.addEventListener(
    "click",
    handle_leftCartDesktop_Btn_close_click
  );
  leftCartDesktop_Btn.addEventListener(
    "click",
    handle_leftCartDesktop_Btn_click
  );
  centerContent.addEventListener("click", handle_centerContent_click);
  rightMenuDesktop_Btn.addEventListener(
    "click",
    handle_rightMenuDesktop_btn_click
  );
  bottomMenuMobile_btn.addEventListener(
    "click",
    handle_bottomMenuMobile_btn_click
  );
  bottomCartMobile_btn_close.addEventListener(
    "click",
    handle_bottomCartMobile_btn_close_click
  );

  window.addEventListener("scroll", handle_window_scroll);
};

window.addEventListener("load", main);

// window.addEventListener("scroll", () => {
//   console.log(window.document.body.scrollTop);
//   //   document.querySelector("header>div").innerText = document.body.scrollTop;
// });
