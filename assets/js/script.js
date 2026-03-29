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
    }, 5000);
}


// ---------------------------------------------------------
// ✅ INSERT THE MODAL SCRIPT HERE
// ---------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('product-modal');
    const closeModal = document.querySelector('.close-modal');

    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');
    const modalBuyNow = document.getElementById('modal-buy-now');
    const modalAddCart = document.getElementById('modal-add-cart');

    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            modalImage.src = card.dataset.image;
            modalTitle.textContent = card.dataset.name;
            modalDescription.textContent = card.dataset.description;
            modalPrice.textContent = "$" + card.dataset.price;

            modalBuyNow.href = card.dataset.buy;

            modalAddCart.dataset.itemId = card.dataset.id;
            modalAddCart.dataset.itemName = card.dataset.name;
            modalAddCart.dataset.itemPrice = card.dataset.price;
            modalAddCart.dataset.itemUrl = card.dataset.url;
            modalAddCart.dataset.itemImage = card.dataset.image;

            modal.style.display = 'flex';
        });
    });

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});


// ---------------------------------------------------------
// Contact form handling (leave this where it is)
// ---------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    const popup = document.getElementById('popup');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const formData = new FormData(contactForm);

            await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            popup.classList.add('show');

            setTimeout(() => {
                popup.classList.remove('show');
            }, 3000);

            contactForm.reset();
        });
    }
});
