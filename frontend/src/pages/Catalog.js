import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setProducts } from '../store/actions/products';

import catalogData from '../data';

import CatalogProducts from '../components/CatalogProducts';

function Catalog() {
  const dispatch = useDispatch();

  const data = useSelector(state => state.products);

  useEffect(() => {
    const getProducts = () => {
      const response = catalogData;
      dispatch(setProducts(response));
    }

    getProducts();
  }, [dispatch]);

  return (
    <section className="catalog__container">
      <p className="catalog__length">
        {data.products.length} itens encontrados.
      </p>

      <ul className="catalog">
        {data.products.map(product => (
          <CatalogProducts product={product} key={product.code_color} />
        ))}
      </ul>
    </section>
  )
}

export default Catalog;
