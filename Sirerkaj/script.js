// JavaScript for interactivity can be added here
// Example: Toggle navigation for mobile view

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelector('.nav-links');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Menu';
    toggleButton.classList.add('nav-toggle');

    toggleButton.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    document.querySelector('nav').appendChild(toggleButton);

    const header = document.querySelector('header');
    const sticky = header.offsetTop;

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > sticky) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
});

// Scroll effect for burger section
window.addEventListener('scroll', function() {
    const burgers = document.querySelectorAll('.burger');
    const windowHeight = window.innerHeight;

    burgers.forEach(burger => {
        const position = burger.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            burger.style.animation = 'fadeIn 1s ease-in-out forwards';
        }
    });
}); 