import React from 'react';
import { useHistory } from 'react-router-dom';

import { formatProductName } from '../utils';

import placeholderImg from '../assets/product-placeholder.png';

function CatalogProduct ({ product }) {
  const history = useHistory();

  const handleProductDetails = (product) => {
    const productName = formatProductName(product.name);
    const id = product.style;

    history.push(`produto/${productName}/${id}/`);
  }

  return (
    <li className="catalog__product" onClick={() => handleProductDetails(product)}>
      <div className="catalog__product__apresentation">
        {product.on_sale ? <div class="container__discount_percentage">
            <span className="catalog__product__discount_percentage">
              -${product.discount_percentage}
            </span>
          </div> : null}
        <img src={product.image ? product.image : placeholderImg} className="catalog__product__image" alt={product.name} />
      </div>
      <h3 className="catalog__product__name">{product.name}</h3>
      <div className="catalog__product__prices">
        <p
          className={product.on_sale ?
           "catalog__product__regular_price-sale" :
           "catalog__product__regular_price"}
        >
          {product.regular_price}
        </p>
        {product.on_sale ? 
        <p className="catalog__product__actual_price">
          {product.actual_price}
        </p>
        : null}
      </div>
    </li>
  )
}

export default CatalogProduct;
