var body = document.querySelector("body");
var mobileMenu = document.querySelector(".mobile-menu");
var openMenu = document.querySelector("header img:first-child");
var closeMenu = document.querySelector(".mobile-menu img");
var emptyCart = document.querySelector(".empty-cart");
var introduction = document.querySelector(".introduction");
var total = document.querySelector(".total");
var otherCategories = document.querySelector(".other-categories");
const applyButton = document.querySelector(".total button");
var itemsNumber = document.querySelector(".items");

openMenu.addEventListener("click", function () {
  mobileMenu.style.visibility = "visible";
  body.style.overflowY = "hidden";
});

closeMenu.addEventListener("click", function () {
  mobileMenu.style.visibility = "hidden";
  body.style.overflowY = "visible";
});

let products = JSON.parse(sessionStorage.getItem("products")) || [];
var productsContainer = document.querySelector(".products");
let productsNumber = document.getElementById("productsNumber");
productsNumber.textContent = products.length;

function checkProductsNumber() {
  if (products.length > 0) {
    emptyCart.style.display = "none";
    introduction.style.display = "flex";
    total.style.display = "flex";
    otherCategories.style.display = "none";
  } else {
    emptyCart.style.display = "flex";
    otherCategories.style.display = "flex";
    introduction.style.display = "none";
    total.style.display = "none";
  }
}

checkProductsNumber();

function renderProducts() {
  productsContainer.innerHTML = "";
  products.forEach((product) => {
    console.log(product.imgSrc)
    product.quantity = 1;
    product.totalPrice = product.quantity * product.productPrice;

    let productHTML = `
    <div class="product">
        <div class="cat">
            <p>Product</p>
            <div class="product-details">
                <img src="${product.imgSrc}" alt="product image" />
                <div class="details">
                    <p>${product.productName}</p>
                    <p>${product.productWeight}</p>
                </div>
            </div>
        </div>
        <div class="cat">
            <p>Price (EUR)</p>
            <p>${product.productPrice}</p>
        </div>
        <div class="cat">
            <p>Quantity</p>
            <div class="quantity">
                <img class="minus" src="Images/minus.svg" alt="minus" />
                <p class="quantity-value">${product.quantity}</p>
                <img class="plus" src="Images/plus.svg" alt="plus" />
            </div>
        </div>
        <div class="cat">
            <p>Total Price (EUR)</p>
            <p class="total-price">${product.totalPrice.toFixed(2)}</p>
        </div>
        <div class="cat">
            <p>Delete</p>
            <img class="delete" src="Images/trash.svg" alt="trash" />
        </div>
    </div>`;

    productsContainer.innerHTML += productHTML;
  });

  attachEventListeners();
  itemsNumber.textContent = products.length;
  updateCartTotals();
}

function attachEventListeners() {
  document.querySelectorAll(".product").forEach((productElement, index) => {
    const minusIcon = productElement.querySelector(".minus");
    const plusIcon = productElement.querySelector(".plus");
    const quantityElement = productElement.querySelector(".quantity-value");
    const totalPriceElement = productElement.querySelector(".total-price");
    const deleteIcon = productElement.querySelector(".delete");

    minusIcon.addEventListener("click", () => {
      if (products[index].quantity > 1) {
        products[index].quantity--;
        quantityElement.textContent = products[index].quantity;
        products[index].totalPrice = (
          products[index].quantity * products[index].productPrice
        ).toFixed(2);
        totalPriceElement.textContent = products[index].totalPrice;
        updateCartTotals();
      }
    });

    plusIcon.addEventListener("click", () => {
      products[index].quantity++;
      quantityElement.textContent = products[index].quantity;
      products[index].totalPrice = (
        products[index].quantity * products[index].productPrice
      ).toFixed(2);
      totalPriceElement.textContent = products[index].totalPrice;
      updateCartTotals();
    });

    deleteIcon.addEventListener("click", () => {
      const updatedProducts = JSON.parse(sessionStorage.getItem("products"));
      updatedProducts.splice(index, 1);
      sessionStorage.setItem("products", JSON.stringify(updatedProducts));
      products.splice(index, 1);
      renderProducts();
      productsNumber.textContent = products.length;
      checkProductsNumber();
      updateCartTotals();
    });
  });
}

function updateCartTotals() {
  const totalProductsElement = document.getElementById("total-products");
  const totalQuantityElement = document.getElementById("total-quantity");
  const totalPriceElement = document.getElementById("total-price");

  totalProductsElement.textContent = products.length;
  totalQuantityElement.textContent = products.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  totalPriceElement.textContent = products
    .reduce((sum, product) => sum + parseFloat(product.totalPrice), 0)
    .toFixed(2);
}

applyButton.addEventListener("click", () => {
  alert("The order has been placed!");
  products.length = 0;
  sessionStorage.setItem("products", JSON.stringify(products));
  renderProducts();
  checkProductsNumber();
});

renderProducts();
