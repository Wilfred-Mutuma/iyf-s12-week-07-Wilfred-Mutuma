import { calculateTotal, calculateItemCount } from "./cart-logic.js";

// Sample products available for shopping
export const products = [
  { id: 1, name: "Notebook", price: 150 },
  { id: 2, name: "Pen", price: 50 },
  { id: 3, name: "Backpack", price: 1200 },
  { id: 4, name: "Headphones", price: 1800 },
  { id: 5, name: "Water Bottle", price: 350 },
];

// Display available products
export function renderProducts() {
  const productList = document.getElementById("product-list");

  productList.innerHTML = products
    .map(
      (product) => `
        <article class="product-card">
          <div>
            <h3>${product.name}</h3>
            <p>KSh ${product.price.toFixed(2)}</p>
          </div>
          <button
            class="add-button"
            data-product-id="${product.id}"
          >
            Add to Cart
          </button>
        </article>
      `,
    )
    .join("");
}

// Display shopping cart
export function renderCart(cart) {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-message">Your cart is empty.</p>';
  } else {
    cartItems.innerHTML = cart
      .map(
        (item) => `
          <article class="cart-item">
            <div>
              <h3>${item.name}</h3>
              <p>KSh ${(item.price * item.quantity).toFixed(2)}</p>
            </div>

            <div class="cart-actions">
              <button
                class="quantity-button"
                data-action="decrease"
                data-product-id="${item.id}"
                aria-label="Decrease ${item.name} quantity"
              >-</button>

              <span>${item.quantity}</span>

              <button
                class="quantity-button"
                data-action="increase"
                data-product-id="${item.id}"
                aria-label="Increase ${item.name} quantity"
              >+</button>

              <button
                class="remove-button"
                data-action="remove"
                data-product-id="${item.id}"
              >Remove</button>
            </div>
          </article>
        `,
      )
      .join("");
  }

  cartCount.textContent = calculateItemCount(cart);
  cartTotal.textContent = calculateTotal(cart).toFixed(2);
}
