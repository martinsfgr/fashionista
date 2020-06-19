import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import logoImg from '../assets/logo.png';

function Nav() {
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
        <FontAwesomeIcon icon={faSearch} className="fa-lg search-icon" />
        <FontAwesomeIcon icon={faShoppingBag} className="fa-lg cart-icon" />
      </div>
    </nav>
  )
}

export default Nav;
