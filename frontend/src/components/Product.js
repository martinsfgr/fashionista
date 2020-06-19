import React from 'react';

function Product ({ product }) {
  return (
    <li key={product.code_color} className="catalog__product">
      <img src={product.image} className="catalog__product__image" />
      <h3 className="catalog__product__name">{product.name}</h3>
      <p className="catalog__product__price">{product.regular_price}</p>
    </li>
  )
}

export default Product;
