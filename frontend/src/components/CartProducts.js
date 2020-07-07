import React from 'react';
import { useHistory } from 'react-router-dom';

import { formatProductName } from '../utils';

import placeholderImg from '../assets/product-placeholder.png';

function CartProduct ({ product, size, quantity }) {
  const history = useHistory();

  const totalPrice = size * quantity;

  const handleProductDetails = (product) => {
    const productName = formatProductName(product.name);
    const id = product.style;

    history.push(`produto/${productName}/${id}/`);
  }

  return (
    <li className="cart__product" onClick={() => handleProductDetails(product)}>
      <div className="cart__product__apresentation">
        <img className="cart__product__image" src={product.image ? product.image : placeholderImg} alt={product.name} />
      </div>
      <div className="cart__product__infos">
        <div>
          <p className="cart__product__name">{product.name}</p>
          <p className="cart__product__size">{size}</p>
          <p className="cart__product__quantity">{quantity}</p>
        </div>
        <div>
          <p className="cart__product__price">R$ {totalPrice}</p>
        </div>
      </div>
    </li>
  )
}

export default CartProduct;
