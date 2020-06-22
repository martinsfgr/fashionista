import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleSearch } from '../store/actions/search';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Cart () {
  const dispatch = useDispatch();
  const isSearchActive = useSelector(state => state.search.isActive);

  const handleSearch = () => {
    isSearchActive ? dispatch(toggleSearch(false)) : dispatch(toggleSearch(true));
  }

  return (
    <div className={isSearchActive ? "search__container active" : "search__container"}>
      <p>Buscar Produto(s)</p>
      <FontAwesomeIcon 
        icon={faTimes}
        className="fa-lg times"
        onClick={() => handleSearch()}
      />
    </div>
  )
}

export default Cart;
