import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleSearch, searchProducts } from '../store/actions/search';

import catalogData from '../data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Cart () {
  const dispatch = useDispatch();

  const isSearchActive = useSelector(state => state.search.isActive);
  const products = useSelector(state => state.search.products);

  const allProducts = catalogData;

  const handleSearch = () => {
    isSearchActive ? dispatch(toggleSearch(false)) : dispatch(toggleSearch(true));
  }

  const handleChange = (event) => {
    event.preventDefault();

    const searchedProducts = event.target.value.length > 0 ? allProducts.filter(product => {
      return product.name.includes(event.target.value.toUpperCase());
    }) : [];

    dispatch(searchProducts(searchedProducts));
  }

  console.log('Produtos da pesquisa', products);

  return (
    <div className={isSearchActive ? "search__container active" : "search__container"}>
      <div>
        <p>Buscar Produto(s)</p>
        <FontAwesomeIcon 
          icon={faTimes}
          className="fa-lg times"
          onClick={() => handleSearch()}
        />
      </div>
      <div>
        <input type="text" onChange={(event) => handleChange(event)} />
      </div>
    </div>
  )
}

export default Cart;
