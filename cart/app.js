import {
  getCart,
  addProduct,
  changeProductQuantity,
  deleteProduct,
  emptyCart,
} from "./state.js";

import { products, renderProducts, renderCart } from "./ui.js";

// Get elements from HTML
const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const clearCartButton = document.getElementById("clear-cart");

// Display products and cart
function renderApp() {
  renderProducts();
  renderCart(getCart());
}

// Add products to cart
productList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product-id]");

  if (!button || !button.classList.contains("add-button")) {
    return;
  }

  const productId = Number(button.dataset.productId);
  const product = products.find((item) => item.id === productId);

  if (product) {
    addProduct(product);
    renderApp();
  }
});

// Handle quantity changes and removal
cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");

  if (!button) {
    return;
  }

  const productId = Number(button.dataset.productId);
  const action = button.dataset.action;

  if (action === "increase") {
    changeProductQuantity(productId, 1);
  } else if (action === "decrease") {
    changeProductQuantity(productId, -1);
  } else if (action === "remove") {
    deleteProduct(productId);
  }

  renderApp();
});

// Clear the entire cart
clearCartButton.addEventListener("click", () => {
  emptyCart();
  renderApp();
});

// Initial display when the page loads
renderApp();
