const cartItemFunc = () => {
  console.log("cartItemFunc");

  //   vars
  const cardCartClose = document.querySelectorAll(".card--cart .closee");
  //   const cardCartTotalPrice = document.querySelectorAll(".card--cart .total-price");
  const productCounterPlus = document.querySelectorAll(
    ".product-counter > div:first-child"
  );
  const productCounterMin = document.querySelectorAll(
    ".product-counter > div:last-child"
  );

  //   utils
  function toPersianNum(num, dontTrim) {
    // alert("hi");
    // alert("hj");
    var i = 0,
      dontTrim = dontTrim || false,
      num = dontTrim ? num.toString() : num.toString().trim(),
      len = num.length,
      res = "",
      pos,
      persianNumbers =
        typeof persianNumber == "undefined"
          ? ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
          : persianNumbers;

    for (; i < len; i++)
      if ((pos = persianNumbers[num.charAt(i)])) res += pos;
      else res += num.charAt(i);

    return res;
  }
  function toEnglishNum(string) {
    return string
      .replace(/[\u0660-\u0669]/g, function (c) {
        return c.charCodeAt(0) - 0x0660;
      })
      .replace(/[\u06f0-\u06f9]/g, function (c) {
        return c.charCodeAt(0) - 0x06f0;
      });
  }

  // funcs

  // handlers
  const handle_cardCartClose_click = (e) => {
    const target = e.currentTarget;
    const card = target.parentNode;

    card.classList.add("d-none");
  };

  const handle_productCounterMin_click = (e) => {
    // alert("min");
    const change = e.currentTarget.parentNode.querySelector("div:nth-child(2)");
    const value = change.innerText;

    if (Number(toEnglishNum(value)) > 0)
      change.innerText = toPersianNum(Number(toEnglishNum(value)) - 1);
  };

  const handle_productCounterPlus_click = (e) => {
    // alert("plus");
    const change = e.currentTarget.parentNode.querySelector("div:nth-child(2)");
    const value = change.innerText;
    change.innerText = toPersianNum(Number(toEnglishNum(value)) + 1);
  };

  // events
  cardCartClose.forEach((item) =>
    item.addEventListener("click", handle_cardCartClose_click)
  );

  productCounterPlus.forEach((item) =>
    item.addEventListener("click", handle_productCounterPlus_click)
  );
  productCounterMin.forEach((item) =>
    item.addEventListener("click", handle_productCounterMin_click)
  );
};

window.addEventListener("load", cartItemFunc);
