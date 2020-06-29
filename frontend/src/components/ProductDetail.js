import React, { useState } from 'react';

function ProductDetail ({ product }) {
  const [size, setSize] = useState('');

  const handleSize = (size) => {
    setSize(size);
  }

  console.log(size);

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
                      >
                        {size.size}
                      </button>
            }
          }) : null}
        </div>

        <button>Adicionar ao carrinho</button>
      </div>

    </div>
  )
}

export default ProductDetail;
