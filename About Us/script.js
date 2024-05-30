var body = document.querySelector("body");
var mobileMenu = document.querySelector(".mobile-menu");
var openMenu = document.querySelector("header img:first-child");
var closeMenu = document.querySelector(".mobile-menu img");
var itemsNumber = document.querySelector(".items");
var leftArrow = document.querySelector(".review-nav img:first-child");
var rightArrow = document.querySelector(".review-nav img:last-child");
var reviewList = document.querySelectorAll(".review");
let reviewIndex = 1;

openMenu.addEventListener("click", function () {
  mobileMenu.style.visibility = "visible";
  body.style.overflowY = "hidden";
});

closeMenu.addEventListener("click", function () {
  mobileMenu.style.visibility = "hidden";
  body.style.overflowY = "visible";
});

let products = JSON.parse(sessionStorage.getItem("products")) || [];
itemsNumber.textContent = products.length;

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
