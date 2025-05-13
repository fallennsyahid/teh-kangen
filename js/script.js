// Toggle Class Active Hamburger Menu
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');

hamburger.onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

// Click Outside Element for Close Nav
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// Toggle Class Active Search Form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
const searchButton = document.querySelector('#search-button');

searchButton.addEventListener('click', (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
});

// Click Outside Element for Search Box
document.addEventListener('click', function (e) {
    if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
});

// Toggle Class Active Shopping Cart
const shoppingCartButton = document.querySelector('#shopping-cart-button');
const shoppingCartBox = document.querySelector('.shopping-cart');

shoppingCartButton.addEventListener('click', function (e) {
    shoppingCartBox.classList.toggle('active');
    e.preventDefault();
});

// Click Outside Element for Shopping Cart
document.addEventListener('click', function (e) {
    if (!shoppingCartButton.contains(e.target) && !shoppingCartBox.contains(e.target)) {
        shoppingCartBox.classList.remove('active');
    }
});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');
const itemDetailCloseButton = document.querySelector('.close-icon');

itemDetailButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    });
})


itemDetailCloseButton.addEventListener('click', (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
});

// Click Outside Element for Modal Box
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
}
