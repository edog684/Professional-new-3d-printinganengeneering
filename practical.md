---
layout: default
title: Practical Items
---

## Practical Items

<div class="products-grid">
{% for product in site.data.products.practical_items %}
    <div class="product-card">
        <img src="{{ product.image }}" alt="{{ product.name }}">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <span class="price">{{ product.price }}</span>
    </div>
{% endfor %}
</div>
