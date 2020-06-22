import React from 'react';
import { useHistory } from 'react-router-dom';

import { formatProductName } from '../utils';

import placeholderImg from '../assets/product-placeholder.png';

function Product ({ product }) {
  const history = useHistory();

  const handleProductDetails = (product) => {
    const productName = formatProductName(product.name);
    const id = product.style;

    history.push(`produto/${productName}/${id}/`);
  }

  return (
    <li className="catalog__product" onClick={() => handleProductDetails(product)}>
      <div className="catalog__product__apresentation">
        {product.on_sale ? <span className="catalog__product__discount_percentage">-${product.discount_percentage}</span> : null}
        <img src={product.image ? product.image : placeholderImg} className="catalog__product__image" alt={product.name} />
      </div>
      <h3 className="catalog__product__name">{product.name}</h3>
      <div>
        {product.on_sale ? <p className="catalog__product__actual_price">{product.actual_price}</p> : null}
        <p className="catalog__product__regular_price">{product.regular_price}</p>
      </div>
    </li>
  )
}

export default Product;
