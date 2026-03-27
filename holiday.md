---
layout: default
title: Holiday Specials
---

## Holiday Specials

<div class="products-grid">
{% for product in site.data.products.holiday_specials %}
    <div class="product-card">
        <img src="{{ product.image }}" alt="{{ product.name }}">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <span class="price">{{ product.price }}</span>
    </div>
{% endfor %}
</div>
