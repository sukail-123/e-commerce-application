let cart = [];

function addToCart(product){
    cart.push(product);
    alert(product + " added to cart");
    localStorage.setItem("cart", JSON.stringify(cart));
}async function loadProducts() {

    const response = await fetch("http://localhost:5000/products");

    const products = await response.json();

    const container = document.getElementById("products");

    products.forEach(product => {

        container.innerHTML += `
            <div class="product">
                <h2>${product.name}</h2>
                <p>₹${product.price}</p>
            </div>
        `;
    });
}

loadProducts();
fetch("http://localhost:5000/products")
  .then(res => res.json())
  .then(data => {
    const products = document.getElementById("products");

    data.forEach(product => {
      products.innerHTML += `
        <div class="card">
          <h2>${product.name}</h2>
          <p>Price: ₹${product.price}</p>
          <button onclick="addToCart('${product.name}')">
            Add to Cart
          </button>
        </div>
      `;
    });
  });

function addToCart(productName) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(productName);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(productName + " added to cart!");
}
