import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import logoImg from '../assets/logo.png';

function Nav() {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);

  const handleSearch = () => {
    toggleSearch ? setToggleSearch(false) : setToggleSearch(true);
  }

  const handleCart = () => {
    toggleCart ? setToggleCart(false) : setToggleCart(true);
  }

  return (
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
          icon={faSearch}
          className="fa-lg search-icon"
          onClick={() => handleSearch()}
        />

        <FontAwesomeIcon 
          className="fa-lg cart-icon" 
          icon={faShoppingBag} 
          onClick={() => handleCart()}
        />
      </div>
    </nav>
  )
}

export default Nav;