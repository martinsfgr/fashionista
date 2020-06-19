import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setProducts } from '../store/actions/products';

import api from '../services/api';

import CatalogProducts from '../components/CatalogProducts';

function Catalog() {
  const dispatch = useDispatch();

  const data = useSelector(state => state.products);

  useEffect(() => {
    const getProducts = async () => {
      const response = await api.get('catalog');
      dispatch(setProducts(response.data));
    }

    getProducts();
  }, [dispatch]);

  return (
    <section>
      <p className="catalog__length">
        {data.products.length} itens
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
