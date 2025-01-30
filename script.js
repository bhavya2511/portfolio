const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for Scroll Animation
const projectCards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target); // Trigger only once
    }
  });
}, { threshold: 0.2 });

projectCards.forEach(card => observer.observe(card));

window.addEventListener('scroll', function () {
    let sections = document.querySelectorAll('section');
    let scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach((section) => {
        if (section.offsetTop < scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            section.classList.add('section-in-view');
        } else {
            section.classList.remove('section-in-view');
        }
    });
});

window.addEventListener('scroll', function () {
    const projectsSection = document.getElementById('projects');
    const scrollPosition = window.scrollY + window.innerHeight;
    const sectionTop = projectsSection.offsetTop;

    if (scrollPosition > sectionTop + 100) {
        projectsSection.classList.add('in-view');
    } else {
        projectsSection.classList.remove('in-view');
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typewriter");
    const fadeText = document.getElementById("fade-in-text");
    
    const text = "WELCOME";
    let index = 0;
    
    function typeWriter() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 200);
        } else {
            fadeText.style.opacity = 1;
        }
    }
    
    typeWriter();
});


// script.js

const navbarToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.nav-links');

navbarToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
