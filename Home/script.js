var body = document.querySelector("body");
var mobileMenu = document.querySelector(".mobile-menu");
var openMenu = document.querySelector("header img:first-child");
var closeMenu = document.querySelector(".mobile-menu img");
var galleryImages = document.querySelectorAll(".gallery img");
var mainImage = galleryImages[0];
var radioBtsList = document.querySelectorAll(".radio-bts input");
var mainRadioInput = radioBtsList[0];
var imageIndex = 0;
var itemsNumber = document.querySelector(".items");
var leftArrow = document.querySelector(".review-nav img:first-child");
var rightArrow = document.querySelector(".review-nav img:last-child");
var reviewList = document.querySelectorAll(".review");
let reviewIndex = 1;

function imageCarousel() {
  if (imageIndex >= galleryImages.length) {
    imageIndex = 0;
  }

  mainImage.style.display = "none";
  mainImage = galleryImages[imageIndex];
  mainImage.style.display = "block";

  mainRadioInput.checked = false;
  mainRadioInput = radioBtsList[imageIndex];
  mainRadioInput.checked = true;

  radioBtsList.forEach((radio) => {
    radio.disabled = true;
  });

  mainRadioInput.disabled = false;

  imageIndex++;
}

setInterval(imageCarousel, 3000);

openMenu.addEventListener("click", function () {
  mobileMenu.style.visibility = "visible";
  body.style.overflowY = "hidden";
});

closeMenu.addEventListener("click", function () {
  mobileMenu.style.visibility = "hidden";
  body.style.overflowY = "visible";
});

function changeReview() {
  reviewList.forEach((review, index) => {
    review.style.display = index === reviewIndex ? "flex" : "none";
  });
}

leftArrow.addEventListener("click", function () {
  reviewIndex = reviewIndex === 0 ? reviewList.length - 1 : reviewIndex - 1;
  changeReview();
});

rightArrow.addEventListener("click", function () {
  reviewIndex = reviewIndex === reviewList.length - 1 ? 0 : reviewIndex + 1;
  changeReview();
});

setInterval(function () {
  reviewIndex = reviewIndex === reviewList.length - 1 ? 0 : reviewIndex + 1;
  changeReview();
}, 5000);

var button1 = document.querySelector(".sweets .product:nth-child(1) button");
var button2 = document.querySelector(".sweets .product:nth-child(2) button");
var button3 = document.querySelector(".sweets .product:nth-child(3) button");
var button4 = document.querySelector(".sweets .product:nth-child(4) button");
var button5 = document.querySelector(".sweets .product:nth-child(5) button");
var button6 = document.querySelector(".sweets .product:nth-child(6) button");

let products = JSON.parse(sessionStorage.getItem("products")) || [];

function saveProductInfo(orderNum) {
  let imgSrc = document
    .querySelector(`.product:nth-child(${orderNum}) img`)
    .getAttribute("src");
  let productDetails = document.querySelector(
    `.product:nth-child(${orderNum}) p:nth-child(3)`
  ).textContent;
  let productPrice = document.querySelector(
    `.product:nth-child(${orderNum}) p:nth-child(4)`
  ).textContent;

  let product = {
    imgSrc: "../" + imgSrc,
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
