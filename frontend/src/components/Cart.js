import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleCart } from '../store/actions/cart'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Cart () {
  const dispatch = useDispatch();
  const isCartActive = useSelector(state => state.cart.isActive);

  const handleCart = () => {
    isCartActive ? dispatch(toggleCart(false)) : dispatch(toggleCart(true));
  }

  return (
    <div className={isCartActive ? "cart__container active" : "cart__container"}>
      <p>Carrinho</p>
      <FontAwesomeIcon 
        icon={faTimes}
        className="fa-lg times"
        onClick={() => handleCart()}
      />
    </div>
  )
}

export default Cart;
