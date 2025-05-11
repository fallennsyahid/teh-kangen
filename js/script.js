// Toggle Class Active
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu')

hamburger.onclick = () => {
    navbarNav.classList.toggle('active');
}

// Click Outside Sidebar for Close Nav
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});