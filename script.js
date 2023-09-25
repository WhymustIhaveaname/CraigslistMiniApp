function fetchProducts() {
    // Make an AJAX request to your backend endpoint
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            // Once you receive the products data, call a function to render them
            renderProducts(products);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}


function renderProducts(products) {
    const productListDiv = document.getElementById('product-container');

    // Clear any previous content in the product list
    productListDiv.innerHTML = '';

    // Loop through the products and create HTML elements to display them
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <p>Description: ${product.description}</p>
        `;
        productListDiv.appendChild(productDiv);
    });
}

Telegram.WebApp.ready();
fetchProducts();
