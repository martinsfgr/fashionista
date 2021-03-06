import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { toggleCart, editProductQuantity, removeProduct, getSubtotal } from '../store/actions/cart';

import { 
  formatProductName, 
  formatProductPrice, 
  formatProductInstallments, 
  convertToBRL 
} from '../utils';

import placeholderImg from '../assets/product-placeholder.png';

function CartProduct ({ product, size, quantity }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const price = formatProductPrice(product.actual_price);
  const totalPrice = convertToBRL(price * quantity);
  const installments = formatProductInstallments(product.installments, quantity);

  const handleProductDetails = (product) => {
    const productName = formatProductName(product.name);
    const id = product.style;

    history.push(`/produto/${productName}/${id}/`);
    window.location.reload();
    dispatch(toggleCart(false));
  }

  const handleProductQuantity = ({ product, size, quantity }) => {
    dispatch(editProductQuantity({
      product: product,
      size: size,
      quantity: quantity,
    }));

    dispatch(getSubtotal());
  }

  const handleRemoveProduct = ({ product, size }) => {
    dispatch(removeProduct({
      product: product,
      size: size,
    }));

    dispatch(getSubtotal());
  }

  return (
    <li className="cart__product">
      <div 
        className="cart__product__apresentation" 
        onClick={() => handleProductDetails(product)}
      >
        <img 
          className="cart__product__image" 
          src={product.image ? product.image : placeholderImg} 
          alt={product.name} 
        />
      </div>

      <div className="cart__product__infos">
        <div>
          <p 
            className="cart__product__name"
            onClick={() => handleProductDetails(product)}
          >
            {product.name}
          </p>

          <p className="cart__product__size">Tam: {size}</p>

          <p className="cart__product__quantity">
            <span 
              className="cart__product__decrease"
              onClick={() => {
                quantity !== 1 ? handleProductQuantity({
                  product: product,
                  size: size,
                  quantity: -1
                }) : handleRemoveProduct({
                  product: product,
                  size: size
                })
              }}
            >
              -
            </span>
              {quantity}
            <span 
              className="cart__product__increase"
              onClick={() => handleProductQuantity({
                product: product,
                size: size,
                quantity: 1
              })}
            >
              +
            </span>  
          </p>
        </div>

        <div>
          <p className="cart__product__price">
            {totalPrice} 
            <span className="cart__product__installments">
              em até {installments}
            </span>
          </p>

          <p 
            className="cart__product__remove-button"
            onClick={() => handleRemoveProduct({
              product: product,
              size: size,
            })}
          >
            Remover item
          </p>
        </div>
      </div>
    </li>
  )
}

export default CartProduct;
