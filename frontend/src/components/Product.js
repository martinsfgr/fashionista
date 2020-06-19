import React from 'react';
import { useHistory } from 'react-router-dom';

import { formatProductName } from '../utils';

function Product ({ product }) {
  const history = useHistory();

  const handleProductDetails = (productName) => {
    const route = formatProductName(productName);
    history.push(`profile/${route}`);
  }

  return (
    <li className="catalog__product" onClick={() => handleProductDetails(product.name)}>
      <img src={product.image} className="catalog__product__image" alt={product.name} />
      <h3 className="catalog__product__name">{product.name}</h3>
      <p className="catalog__product__price">{product.regular_price}</p>
    </li>
  )
}

export default Product;
