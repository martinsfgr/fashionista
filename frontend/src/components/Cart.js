import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Cart ({ isActive }) {

  const closeCart = () => {
    console.log(isActive);
  }

  return (
    <div className={isActive ? "cart__container active" : "cart__container"}>
      <p>Carrinho</p>
      <FontAwesomeIcon 
        icon={faTimes}
        className="fa-lg times"
        onClick={() => closeCart()}
      />
    </div>
  )
}

export default Cart;
