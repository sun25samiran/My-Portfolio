// Handle dynamic year in footer
document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('ion-icon');
        
        if (navLinks.classList.contains('active')) {
            icon.setAttribute('name', 'close-outline');
        } else {
            icon.setAttribute('name', 'menu-outline');
        }
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('ion-icon');
            if (icon) {
                icon.setAttribute('name', 'menu-outline');
            }
        });
    });
}

// Navbar dynamic styling on scroll
const navbar = document.querySelector('.navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
            navbar.style.background = 'rgba(9, 10, 15, 0.85)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.background = 'rgba(9, 10, 15, 0.6)';
        }
    });
}

// Intersection Observer for scroll animations
const observeElements = document.querySelectorAll('.fade-in-on-scroll');

if ('IntersectionObserver' in window && observeElements.length > 0) {
    const observerOptions = {
        threshold: 0.1, // Trigger earlier
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve after animating to only animate once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observeElements.forEach(el => observer.observe(el));
} else {
    // Fallback if IntersectionObserver is not supported
    observeElements.forEach(el => el.classList.add('visible'));
}
