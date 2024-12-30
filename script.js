// Simulate fetching products from the server
const products = [
    { id: 1, name: "Product 1", price: 10.99, image: "placeholder.jpg" },
    { id: 2, name: "Product 2", price: 15.99, image: "placeholder.jpg" },
    { id: 3, name: "Product 3", price: 8.99, image: "placeholder.jpg" }
];

// Load products dynamically
window.onload = () => {
    const productContainer = document.getElementById('products');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
};

// Simulate adding a product to the cart
function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
}
