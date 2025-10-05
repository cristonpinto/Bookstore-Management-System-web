// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .tech-item, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add loading animation for video
document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('iframe');
    if (video) {
        video.addEventListener('load', () => {
            video.style.opacity = '1';
        });
    }
});

// Add copy functionality for student ID
document.addEventListener('DOMContentLoaded', () => {
    const studentIdElements = document.querySelectorAll('p:contains("D/BCS/23/0015")');
    studentIdElements.forEach(element => {
        element.style.cursor = 'pointer';
        element.title = 'Click to copy Student ID';
        element.addEventListener('click', () => {
            navigator.clipboard.writeText('D/BCS/23/0015').then(() => {
                // Show temporary feedback
                const originalText = element.textContent;
                element.textContent = 'Copied!';
                element.style.color = '#10b981';
                setTimeout(() => {
                    element.textContent = originalText;
                    element.style.color = '';
                }, 1000);
            });
        });
    });
});
