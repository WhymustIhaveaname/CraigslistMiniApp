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
    // productListDiv.innerHTML = '';

    // Loop through the products and create HTML elements to display them
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-card';
        // <div class="product-card">
        //     <img src="resources/burger.png" alt="Product 1" class="product-image">
        //     <h2 class="product-title">Product 1</h2>
        //     <p class="product-description">Description of Product 1 goes here.</p>
        //     <span class="product-price">$19.99</span>
        // </div>
        productDiv.innerHTML = `
            <h2 class="product-title">${product.name}</h2>
            <span class="product-price">$${product.price}</span>
            <p class="product-description">${product.description}</p>
            `;
        if ("img" in product){
            productDiv.innerHTML = `<img src="${product.img}" alt="${product.name}" class="product-image">\n` + productDiv.innerHTML;
        }
        productListDiv.appendChild(productDiv);
    });
}

function tryPopup() {
    Telegram.WebApp.showPopup({
        title: 'Popup title',
        message: 'Popup message',
        buttons: [
            {id: 'delete', type: 'destructive', text: 'Delete all'},
            {id: 'faq', type: 'default', text: 'Open FAQ'},
            {type: 'cancel'},
        ]
    }, function(buttonId) {
        if (buttonId === 'delete') {
            Telegram.WebApp.showAlert("'Delete all' selected");
        } else if (buttonId === 'faq') {
            Telegram.WebApp.openLink('https://telegram.org/faq');
        }
    });
}

function tryAlert() {
    Telegram.WebApp.showAlert("current user name is: "+initDataUnsafe.user.username)
}
