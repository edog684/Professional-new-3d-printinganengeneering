---
layout: default
title: Holiday Specials
---

## Holiday Specials

<div class="products-grid">
{% for product in site.data.products.holiday_specials %}
    <div class="product-card"
         data-id="{{ product.name | slugify }}"
         data-name="{{ product.name }}"
         data-description="{{ product.description }}"
         data-price="{{ product.price | remove: '$' }}"
         data-image="{{ product.image }}"
         data-buy="#"
         data-url="/products/{{ product.name | slugify }}">

        <img src="{{ product.image }}" alt="{{ product.name }}">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <span class="price">{{ product.price }}</span>
    </div>
{% endfor %}
</div>
