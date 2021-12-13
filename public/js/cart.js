let carts = document.querySelectorAll('.bxs-cart-add');

let compProducts = [
    {
        name: 'AMD Prebuilt 1',
        tag: "amdprebuilt1",
        prev_price: "600",
        curr_price: "500",
        inCart: 0
    }
];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(compProducts[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(compProducts) {
    
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } 
    else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(compProducts);
}

function setItems(compProducts) {
    let cartItems = localStorage.getItem('productsInCart');
    console.log("My cartItems are", cartItems);
    
    compProducts.inCart = 1;
    
    cartItems = {
        [compProducts.tag]: compProducts
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

onLoadCartNumbers();