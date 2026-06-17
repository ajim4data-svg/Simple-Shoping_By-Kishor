let cartCount = 0;
let cartTotal = 0;

const cartCountEl = document.getElementById('cart-count');
const cartTotalEl = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');

document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.getAttribute('data-name');
    const price = parseInt(btn.getAttribute('data-price'), 10);

    cartCount++;
    cartTotal += price;

    cartCountEl.textContent = cartCount;
    cartTotalEl.textContent = cartTotal;

    alert(`Added to cart: ${name} (₹${price})`);
  });
});

checkoutBtn.addEventListener('click', () => {
  if (cartCount === 0) {
    alert('Your cart is empty. Add some products first.');
  } else {
    alert(`Thank you for your order!\nTotal items: ${cartCount}\nTotal price: ₹${cartTotal}`);
    // Reset cart
    cartCount = 0;
    cartTotal = 0;
    cartCountEl.textContent = cartCount;
    cartTotalEl.textContent = cartTotal;
  }
});