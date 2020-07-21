import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { toggleCart } from '../store/actions/cart';
import { toggleSearch } from '../store/actions/search';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import Cart from './Cart';
import Search from './Search';

import logoImg from '../assets/logo.png';

function Nav() {
  const history = useHistory();
  const dispatch = useDispatch();

  const isCartActive = useSelector(state => state.cart.isActive);
  const isSearchActive = useSelector(state => state.search.isActive);
  const cart = useSelector(state => state.cart.products);
 
  const pushToHome = () => {
    history.push('/');
  }

  const handleCart = () => {
    isCartActive ? dispatch(toggleCart(false)) : dispatch(toggleCart(true));
  }

  const handleSearch = () => {
    isSearchActive ? dispatch(toggleSearch(false)) : dispatch(toggleSearch(true));
  }

  let cartLength = cart.reduce((accumulator, product) => {
    return accumulator += product.quantity;
  }, 0);

  return (
    <div className="navbar__container">
      <nav>
        <div className="navbar__infos">
          <img
            className="company__logo"
            src={logoImg} 
            alt="Ilustração de um cabide representado a logo da Fashionista"
            onClick={() => pushToHome()}
          />

          <p className="company__name" onClick={() => pushToHome()}>FASHIONISTA</p>
        </div>
        
        <div className="navbar__icons">
          <div className="container__search__icon">
            <FontAwesomeIcon 
              className="fa-lg search-icon"
              icon={faSearch}
              onClick={() => handleSearch()}
            />
          </div>

          <div className="container__cart__icon">
            <FontAwesomeIcon 
              className="fa-lg cart-icon" 
              icon={faShoppingBag}
              onClick={() => handleCart()}
            />
            
            <p className="cart__length">{cartLength}</p>
          </div>
        </div>
      </nav>

      <Cart />
      <Search />
    </div>
  )
}

export default Nav;
