import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleCart } from '../store/actions/cart';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import CartProducts from '../components/CartProducts';

function Cart () {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart.products);
  const isCartActive = useSelector(state => state.cart.isActive);

  console.log(cart);

  const handleCart = () => {
    isCartActive ? dispatch(toggleCart(false)) : dispatch(toggleCart(true));
  }

  return (
    <div className={isCartActive ? "cart__container active" : "cart__container"}>
      <div className="cart__navbar">
        <FontAwesomeIcon 
          icon={faTimes}
          className="fa-lg times cart__close-button"
          onClick={() => handleCart()}
        />
        <p className="cart__title">Carrinho</p>
      </div>

      <div className="cart__products">
        {cart.length > 0 ? cart.map(item => 
          <CartProducts 
            product={item.product}
            size={item.size}
            quantity={item.quantity} 
            key={item.product.code_color} 
          />
        ) : <p className="cart__empty">Não há nenhum produto no carrinho.</p>}
      </div>

      <div className="cart__subtotal">
        <p>SUBTOTAL: </p>
      </div>
    </div>
  )
}

export default Cart;
