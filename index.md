---
layout: default
title: Home
---

## Portfolio Showcase

<div class="slideshow-container">
    <div class="mySlides fade">
        <img src="https://raw.githubusercontent.com/edog684/4d-print-website-professional/main/Screenshot%202026-03-26%20194458.png" alt="3D Print 1">
        <div class="caption">Elegant Modern Design</div>
    </div>
    <div class="mySlides fade">
        <img src="https://raw.githubusercontent.com/edog684/4d-print-website-professional/main/Screenshot%202026-03-26%20194451.png" alt="3D Print 2">
        <div class="caption">Functional Masterpiece</div>
    </div>
    <div class="mySlides fade">
        <img src="https://raw.githubusercontent.com/edog684/4d-print-website-professional/main/Screenshot%202026-03-26%20194446.png" alt="3D Print 3">
        <div class="caption">Artistic Creation</div>
    </div>
    <div class="mySlides fade">
        <img src="https://raw.githubusercontent.com/edog684/4d-print-website-professional/main/Screenshot%202026-03-26%20194438.png" alt="3D Print 4">
        <div class="caption">Custom Solution</div>
    </div>

    <a class="prev" onclick="changeSlide(-1)">&#10094;</a>
    <a class="next" onclick="changeSlide(1)">&#10095;</a>
</div>

<div class="dots-container">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
    <span class="dot" onclick="currentSlide(4)"></span>
</div>

## All Products

<div class="products-grid">
{% for category in site.data.products %}
  {% for product in category[1] %}
    <div class="product-card">
        <img src="{{ product.image }}" alt="{{ product.name }}">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <span class="price">{{ product.price }}</span>
    </div>
  {% endfor %}
{% endfor %}
</div>

## Recently Updated Products

<div class="products-grid">
{% for product in site.data.products.recently_updated %}
    <div class="product-card">
        <img src="{{ product.image }}" alt="{{ product.name }}">
        <h3>{{ product.name }} <span class="badge">NEW</span></h3>
        <p>{{ product.description }}</p>
        <span class="price">{{ product.price }}</span>
        <p class="update-date">Updated: {{ product.updated_date }}</p>
    </div>
{% endfor %}
</div>

## Customer Service / Problem Space

<section id="contact" class="contact-section">
    <h2>Get In Touch</h2>
    <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
        <input type="text" name="name" placeholder="Your Name" required>
        <input type="email" name="email" placeholder="Your Email" required>
        <textarea name="message" placeholder="Describe your problem or inquiry" rows="5" required></textarea>
        <button type="submit">Send Message</button>
    </form>
</section>
