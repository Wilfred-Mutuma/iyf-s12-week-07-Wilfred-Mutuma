// Add a product to the cart
export function addToCart(cart, product) {
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    return cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
    );
  }

  return [...cart, { ...product, quantity: 1 }];
}

// Change the quantity of a product
export function updateQuantity(cart, productId, amount) {
  return cart
    .map((item) =>
      item.id === productId
        ? { ...item, quantity: item.quantity + amount }
        : item,
    )
    .filter((item) => item.quantity > 0);
}

// Remove a product completely
export function removeFromCart(cart, productId) {
  return cart.filter((item) => item.id !== productId);
}

// Calculate the total price
export function calculateTotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Calculate the total number of items
export function calculateItemCount(cart) {
  return cart.reduce((count, item) => count + item.quantity, 0);
}

// Empty the cart
export function clearCart() {
  return [];
}
