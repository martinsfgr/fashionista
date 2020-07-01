import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addToCart } from '../store/actions/cart';

function ProductDetail ({ product }) {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);

  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState('1');

  const handleSize = (size) => {
    setSize(size);
  }

  const handleQuantity = (quantity) => {
    setQuantity(quantity);
  }

  const handleCart = (product, size, quantity) => {
    dispatch(addToCart({
      product: product,
      size: size,
      quantity: quantity,
    }))
  }

  console.log('O produto é', product);
  console.log(size);
  console.log(quantity);
  console.log('Carrinho: ', cart.products);

  return (
    <div className="product__container">
      <div className="product__image">
        <img src={product.image} alt={product.name}/>
      </div>

      <div className="product__infos">
        <h3 className="product__name">
          {product.name}
        </h3>

        <div>
          <p className="product__price">
            {product.regular_price}
          </p>

          <p className="product__installments">
            {product.installments}
          </p>
        </div>

        <div className="product__size">
          {product.sizes ? product.sizes.map(size => {
            if (size.available) {
              return <button
                key={size.sku}
                onClick={() => handleSize(size.size)}
              >{size.size}</button>
            }
          }) : null}
        </div>

        <div className="product_quantity">
          <label>Selecione a quantidade:</label>
          <input 
            type="number" 
            id="quantity" 
            defaultValue="1" 
            min="1" 
            max="5"
            onChange={() => handleQuantity(event.target.value)}
          />
        </div>

        <button onClick={() => handleCart(product, size, quantity)}>Adicionar ao carrinho</button>
      </div>

    </div>
  )
}

export default ProductDetail;
