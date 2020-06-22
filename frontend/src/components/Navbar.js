import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleCart } from '../store/actions/cart'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import Cart from './Cart';

import logoImg from '../assets/logo.png';

function Nav() {
  const dispatch = useDispatch();
  const isCartActive = useSelector(state => state.cart.isActive);

  const [toggleSearch, setToggleSearch] = useState(false);

  const handleCart = () => {
    isCartActive ? dispatch(toggleCart(false)) : dispatch(toggleCart(true));
    console.log(isCartActive);
  }

  const handleSearch = () => {
    toggleSearch ? setToggleSearch(false) : setToggleSearch(true);
  }

  return (
    <div className="navbar__container">
      <nav>
        <div className="navbar__infos">
          <img
            src={logoImg} 
            alt="Ilustração de um cabide representado a logo da Fashionista"
            className="company__logo"
            />

          <p className="company__name">FASHIONISTA</p>
        </div>
        
        <div className="navbar__icons">
          <FontAwesomeIcon 
            className="fa-lg search-icon"
            icon={faSearch}
            onClick={() => handleSearch()}
            />

          <FontAwesomeIcon 
            className="fa-lg cart-icon" 
            icon={faShoppingBag}
            onClick={() => handleCart()}
          />
        </div>
      </nav>

      <Cart />
    </div>
  )
}

export default Nav;
