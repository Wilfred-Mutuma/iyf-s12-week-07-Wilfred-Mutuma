import {
  addToCart,
  updateQuantity,
  removeFromCart,
  clearCart,
} from "./cart-logic.js";

import { loadCart, saveCart } from "./storage.js";

// Central cart state
let cart = loadCart();

// Return a safe copy of the current cart
export function getCart() {
  return cart.map((item) => ({ ...item }));
}

// Add a product
export function addProduct(product) {
  cart = addToCart(cart, product);
  saveCart(cart);
}

// Increase or decrease quantity
export function changeProductQuantity(productId, amount) {
  cart = updateQuantity(cart, productId, amount);
  saveCart(cart);
}

// Remove a product
export function deleteProduct(productId) {
  cart = removeFromCart(cart, productId);
  saveCart(cart);
}

// Clear all products
export function emptyCart() {
  cart = clearCart();
  saveCart(cart);
}
