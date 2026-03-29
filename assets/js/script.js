let slideIndex = 1;

// Initialize slideshow
document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
    startAutoSlide();
});

function changeSlide(n) {
    clearTimeout(autoSlideTimer);
    showSlides(slideIndex += n);
    startAutoSlide();
}

function currentSlide(n) {
    clearTimeout(autoSlideTimer);
    showSlides(slideIndex = n);
    startAutoSlide();
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

let autoSlideTimer;

function startAutoSlide() {
    autoSlideTimer = setTimeout(function() {
        slideIndex++;
        showSlides(slideIndex);
        startAutoSlide();
    }, 5000); // Change slide every 5 seconds
}

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    const successBox = document.getElementById('form-success');

    if (contactForm) {
        contactForm.addEventListener('submit', function() {
            // Show success message immediately
            if (successBox) {
                successBox.style.display = 'block';
                successBox.style.opacity = '1';

                // Fade out after 3 seconds
                setTimeout(() => {
                    successBox.style.opacity = '0';
                }, 3000);

                // Hide completely after fade
                setTimeout(() => {
                    successBox.style.display = 'none';
                }, 3500);
            }

            // IMPORTANT:
            // Do NOT preventDefault()
            // Do NOT reset the form
            // Let Formspree handle the submission normally
        });
    }
});
