import React, { useState } from 'react';

function ProductDetail ({ product }) {
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSize = (size) => {
    setSize(size);
  }

  const handleQuantity = (quantity) => {
    setQuantity(quantity);
  }

  console.log(size);
  console.log(quantity);

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
          <label for="quantity">Selecione a quantidade:</label>
          <input 
            type="number" 
            id="quantity" 
            defaultValue="1" 
            min="1" 
            max="5"
            onChange={() => handleQuantity(event.target.value)}
          />
        </div>

        <button>Adicionar ao carrinho</button>
      </div>

    </div>
  )
}

export default ProductDetail;
