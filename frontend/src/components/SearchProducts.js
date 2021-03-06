import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { toggleSearch } from '../store/actions/search';

import { formatProductName } from '../utils/index';

import placeholderImg from '../assets/product-placeholder.png';

function SearchProduct ({ product }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleProductDetails = (product) => {
    const productName = formatProductName(product.name);
    const id = product.style;

    history.push(`/produto/${productName}/${id}/`);
    window.location.reload();
    dispatch(toggleSearch(false));
  }

  return (
    <li className="search__product">
      <div className="search__product__apresentation">
        <img 
          className="search__product__image"
          src={product.image ? product.image : placeholderImg} 
          alt={product.name}
          onClick={() => handleProductDetails(product)}
        />
      </div>

      <div className="search__product__infos">
        <div>
          <p 
            className="search__product__name"
            onClick={() => handleProductDetails(product)}
          >
            {product.name}
          </p>
        </div>

        <div>
          <p className="search__product__price">
            {product.actual_price}
            <span className="search__product__installments">
              {product.installments}
            </span>
          </p>
        </div>
      </div>
    </li>
  )
}

export default SearchProduct;
