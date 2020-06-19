import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setProducts } from '../store/actions/products';

import api from '../services/api';

import Product from '../components/Product';

function Catalog() {
  const dispatch = useDispatch();
  const history = useHistory();

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
          <Product product={product} />
        ))}
      </ul>
    </section>
  )
}

export default Catalog;
