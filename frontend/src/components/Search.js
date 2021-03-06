import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleSearch, searchProducts } from '../store/actions/search';

import catalogData from '../data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import SearchProducts from '../components/SearchProducts';

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

  return (
    <div className={isSearchActive ? "search__container active" : "search__container"}>
      <div className="search__navbar">
        <FontAwesomeIcon 
          icon={faTimes}
          className="fa-lg times search__close-button"
          onClick={() => handleSearch()}
          />

          <p className="search__title">Buscar Produto(s)</p>
      </div>

      <div className="search__input">
        <input 
          type="text"
          placeholder="Buscar por produtos"
          onChange={(event) => handleChange(event)}
        />
      </div>

      <div className="search__products">
        {products.length > 0 ? products.map(product => {
          return <div key={product.code_color}>
            <SearchProducts product={product} />
          </div>
        }) : <div className="search__notfound">Nenhum item encontrado.</div>}
      </div>
    </div>
  )
}

export default Cart;
