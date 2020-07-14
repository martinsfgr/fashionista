import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addToCart, editProductQuantity } from '../store/actions/cart';

function ProductDetail ({ product }) {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  console.log(cart);

  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSize = (size) => {
    setSize(size);
  }

  const handleQuantity = (quantity) => {
    setQuantity(quantity);
  }

  const handleCart = (product, size, quantity) => {
    const matchProduct = cart.products.find(item => item.product.name === product.name && item.size === size);

    matchProduct ? dispatch(editProductQuantity({
      product: product,
      size: size,
      quantity: quantity,
    })) : dispatch(addToCart({
      product: product,
      size: size,
      quantity: quantity,
    }))
  }

  return (
    <div className="product__container">
      <div className="product__image">
        <img src={product.image} alt={product.name}/>
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
                onClick={() => handleSize(singleSize.size)}
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
            defaultValue="1" 
            min="1" 
            max="5"
            onChange={() => handleQuantity(Number(event.target.value))}
          />
        </div>

        <button className="product__button" onClick={() => handleCart(product, size, quantity)}>Adicionar ao carrinho</button>
      </div>

    </div>
  )
}

export default ProductDetail;
