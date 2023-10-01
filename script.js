function fetchProducts() {
    // Make an AJAX request to your backend endpoint
    fetch('api/products.json')
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
        productDiv.className = 'product-card';
        productDiv.innerHTML = `<div class="text-container">\n  
            <h2 class="product-title">${product.name}</h2>
            <span class="product-price">$${product.price}</span>
            <p class="product-description">${product.description}</p>
            \n</div>\n
            <button class="product-button" onclick="showDetails('${product.id}')">Show Details</button>
            `;
        if ("img" in product){
            //productDiv.innerHTML = `<div class="image-container">\n  <img src="${product.img}" alt="${product.name}" class="product-image">\n</div>` + productDiv.innerHTML;
            productDiv.innerHTML = `<img src="${product.img}" alt="${product.name}" class="product-image">\n` + productDiv.innerHTML;
        }
        productListDiv.appendChild(productDiv);
    });
}

function showDetails(id) {
    fetch(`api/${id}.json`)
        .then(response => response.json())
        .then(product => {
            const productDetailDiv = document.getElementById('product-detail');
            productDetailDiv.style.display = 'block';
            productDetailDiv.innerHTML = `
                <button class="product-back-button" onclick="backHome()">Back</button>
                <img    class="product-image" src="${product.img}" alt="${product.name}"/>
                <h2     class="product-title">${product.name}</h2>
                <span   class="product-price">$${product.price}</span>
                <p      class="product-description">${product.description}</p>
                <p      class="product-contact">Contact: ${product.contact}</p>
            `;

            const productListDiv = document.getElementById('product-container');
            productListDiv.style.display = 'none';
        })
        .catch(error => {
            Telegram.WebApp.showAlert(`Sorry, error in fetching product detail for ${id}, please contact admin @fuckkwechat`, error);
        });
}

function backHome() {
    const productDetailDiv = document.getElementById('product-detail');
    productDetailDiv.style.display = 'none';
    const productListDiv = document.getElementById('product-container');
    productListDiv.style.display = 'flex';
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
    Telegram.WebApp.showAlert("current user name is: "+Telegram.WebApp.initDataUnsafe.user.username)
}
