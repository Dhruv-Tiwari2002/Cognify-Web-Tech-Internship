// Cache DOM elements
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("#nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const slides = document.querySelectorAll(".mySlides");
const modalOverlay = document.getElementById("modal-overlay");
const modal = document.getElementById("enlarge-image");
const modalImage = document.getElementById("modal-image");
const galleryImages = document.querySelectorAll("#gallery-image");

let slideIndex = 0;

// Mobile menu toggle
function mobileMenu() {
    navMenu.classList.toggle("display");
}

// Close menu when a nav link is clicked
function closeMenu() {
    navMenu.classList.remove("display");
}

// Slideshow function
function showSlides() {
    const slides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".dot");

    // Hide all slides
    slides.forEach(slide => slide.style.display = "none");

    slideIndex = (slideIndex + 1) > slides.length ? 1 : slideIndex + 1;

    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove("active"));

    // Show current slide and activate corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    // Automatically change slide every 2 seconds
    setTimeout(showSlides, 2000);
}

showSlides();

// Event listener for hamburger menu
hamburger.addEventListener("click", mobileMenu);

// Event listener for closing menu when clicking a nav link
navLinks.forEach(link => link.addEventListener("click", closeMenu));

// Event listeners for slideshow image click to open modal
[...slides, ...galleryImages].forEach(image => {
    image.addEventListener("click", (e) => {
        modalOverlay.style.display = "block";
        modalImage.src = e.target.src;
        modal.showModal();
    });
});

// Close modal when clicking outside the image
modalOverlay.addEventListener("click", () => {
    modal.close();
    modalOverlay.style.display = "none";
});
