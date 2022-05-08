'use strict';

// Elements

const heroNavBar = document.querySelector('#hero-nav');
const heroNavMenu = document.querySelector('#hero-nav-menu');
const heroNavBurger = document.querySelector('#hero-nav-functions-burger');
const heroNavCloseBtn = document.querySelector('#hero-nav-menu-close');

const productDecrement = document.querySelector('.decrement');
const productIncrement = document.querySelector('.increment');
const productNumber = document.querySelector('.product-number');

let productCounter = Number(productNumber.textContent);

const addToCartBtn = document.querySelector('#hero-content-3-cta-add');
const cartProductAmount = document.querySelector('#hero-nav-functions-shopping-cart-amount');

// Functions

const heroNavBarStatic = () => {
    heroNavBar.classList.remove('bg-opacity-100');
    heroNavBar.classList.remove('py-4');
    heroNavBar.classList.remove('shadow-xl');
};

const heroNavBarOnScroll = () => {
    heroNavBar.classList.add('bg-opacity-100');
    heroNavBar.classList.add('py-4');
    heroNavBar.classList.add('shadow-xl');
};

window.onscroll = () => {
    if (window.pageYOffset > 0) {
        heroNavBarOnScroll();
    } else {
        heroNavBarStatic();
    };
};

// Event listeners

heroNavBurger.addEventListener('click', () => {
    heroNavMenu.classList.add('w-full');
});

heroNavCloseBtn.addEventListener('click', () => {
    heroNavMenu.classList.remove('w-full');
});

productDecrement.addEventListener('click', () => {
    if (productCounter > 0) {
        productCounter--;
        productNumber.textContent = productCounter;
    } else {
        productNumber.textContent = 0;
    };
});

productIncrement.addEventListener('click', () => {
    productCounter++;
    productNumber.textContent = productCounter;
});

addToCartBtn.addEventListener('click', () => {
    cartProductAmount.classList.add('active');
    
    let cartProductCounter = Number(cartProductAmount.textContent);
    cartProductCounter++;
    cartProductAmount.textContent = cartProductCounter;
});