import React from 'react';

function ProductDetail ({ product }) {
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
          <button>P</button>
          <button>M</button>
          <button>G</button>
        </div>

        <button>Adicionar ao carrinho</button>
      </div>

    </div>
  )
}

export default ProductDetail;
