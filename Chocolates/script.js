var body = document.querySelector("body");
var mobileMenu = document.querySelector(".mobile-menu");
var openMenu = document.querySelector("header img:first-child");
var closeMenu = document.querySelector(".mobile-menu img");
var itemsNumber = document.querySelector(".items");

openMenu.addEventListener("click", function () {
  mobileMenu.style.visibility = "visible";
  body.style.overflowY = "hidden";
});

closeMenu.addEventListener("click", function () {
  mobileMenu.style.visibility = "hidden";
  body.style.overflowY = "visible";
});

var button1 = document.querySelector(
  ".chocolates-container .chocolate:nth-child(1) button"
);
var button2 = document.querySelector(
  ".chocolates-container .chocolate:nth-child(2) button"
);
var button3 = document.querySelector(
  ".chocolates-container .chocolate:nth-child(3) button"
);
var button4 = document.querySelector(
  ".chocolates-container .chocolate:nth-child(4) button"
);
var button5 = document.querySelector(
  ".chocolates-container .chocolate:nth-child(5) button"
);
var button6 = document.querySelector(
  ".chocolates-container .chocolate:nth-child(6) button"
);
var button7 = document.querySelector(
  ".chocolates-container .chocolate:nth-child(7) button"
);
var button8 = document.querySelector(
  ".chocolates-container .chocolate:nth-child(8) button"
);
var button9 = document.querySelector(
  ".chocolates-container .chocolate:nth-child(9) button"
);
var button10 = document.querySelector(
  ".chocolates-container .chocolate:nth-child(10) button"
);
var button11 = document.querySelector(
  ".chocolates-container .chocolate:nth-child(11) button"
);
var button12 = document.querySelector(
  ".chocolates-container .chocolate:nth-child(12) button"
);
var button13 = document.querySelector(
  ".chocolates-container .chocolate:nth-child(13) button"
);
var button14 = document.querySelector(
  ".chocolates-container .chocolate:nth-child(14) button"
);
var button15 = document.querySelector(
  ".chocolates-container .chocolate:nth-child(15) button"
);

let products = JSON.parse(sessionStorage.getItem("products")) || [];

function saveProductInfo(orderNum) {
  let imgSrc = document
    .querySelector(`.chocolate:nth-child(${orderNum}) img`)
    .getAttribute("src");
  let productDetails = document.querySelector(
    `.chocolate:nth-child(${orderNum}) p:nth-child(2)`
  ).textContent;
  let productPrice = document.querySelector(
    `.chocolate:nth-child(${orderNum}) p:nth-child(3)`
  ).textContent;

  let product = {
    imgSrc: "../Chocolates/" + imgSrc,
    productName: productDetails.split(",")[0],
    productWeight: productDetails.split(",")[1],
    productPrice: productPrice.split(" ")[1],
  };

  products = JSON.parse(sessionStorage.getItem("products")) || [];

  let productExists = products.some(
    (p) => p.productName === product.productName
  );

  if (!productExists) {
    products.push(product);
    sessionStorage.setItem("products", JSON.stringify(products));
  } else {
    alert("This product was already added in your cart!");
  }

  itemsNumber.textContent = products.length;
}

itemsNumber.textContent = products.length;

button1.addEventListener("click", () => saveProductInfo(1));
button2.addEventListener("click", () => saveProductInfo(2));
button3.addEventListener("click", () => saveProductInfo(3));
button4.addEventListener("click", () => saveProductInfo(4));
button5.addEventListener("click", () => saveProductInfo(5));
button6.addEventListener("click", () => saveProductInfo(6));
button7.addEventListener("click", () => saveProductInfo(7));
button8.addEventListener("click", () => saveProductInfo(8));
button9.addEventListener("click", () => saveProductInfo(9));
button10.addEventListener("click", () => saveProductInfo(10));
button11.addEventListener("click", () => saveProductInfo(11));
button12.addEventListener("click", () => saveProductInfo(12));
button13.addEventListener("click", () => saveProductInfo(13));
button14.addEventListener("click", () => saveProductInfo(14));
button15.addEventListener("click", () => saveProductInfo(15));
