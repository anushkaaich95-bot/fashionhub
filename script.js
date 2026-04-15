let cart = [];

function addToCart(productName) {
  cart.push(productName);
  alert(productName + " added to cart");
}

// Button click event
document.querySelectorAll(".card button").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    addToCart("Product " + (index + 1));
  });
});