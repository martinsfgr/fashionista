import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addToCart, editProductQuantity, getSubtotal } from '../store/actions/cart';

import placeholderImg from '../assets/product-placeholder.png';

function ProductDetail ({ product }) {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);

  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleCart = (product, size, quantity) => {
    const matchProduct = cart.products.find(item => item.product.name === product.name && item.size === size);

    matchProduct ? dispatch(editProductQuantity({
      product: product,
      size: size,
      quantity: quantity,
    })) : size === '' ? alert('É necessário escolher um tamanho para o produto.') : dispatch(addToCart({
      product: product,
      size: size,
      quantity: quantity,
    }));

    setSize('');
    setQuantity(1);
    dispatch(getSubtotal());
  }

  return (
    <div className="product__container">
      <div className="product__image">
        <img 
          src={product.image ? product.image : placeholderImg} 
          alt={product.name}
        />
      </div>

      <div className="product__infos">
        <h3 className="product__name">
          {product.name}
        </h3>

        <div className="product__payment">
          <p className="product__price">
            {product.regular_price}
          </p>

          <p className="product__installments">
            em até {product.installments}
          </p>
        </div>

        <div className="product__size">
          {product.sizes ? product.sizes.map(singleSize => {
            if (singleSize.available) {
              return <button
                className={size === singleSize.size ? 'active' : null}
                key={singleSize.sku}
                onClick={() => setSize(singleSize.size)}
              >{singleSize.size}</button>
            }
            return null
          }) : null}
        </div>

        <div className="product__quantity">
          <label>Quantidade:</label>
          <input 
            type="number" 
            id="quantity"
            value={quantity}
            min="1" 
            max="5"
            onChange={() => setQuantity(Number(event.target.value))}
          />
        </div>

        <button className="product__button" onClick={() => handleCart(product, size, quantity)}>Adicionar ao carrinho</button>
      </div>

    </div>
  )
}

export default ProductDetail;
