import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setProducts } from '../store/actions/products';

import api from '../services/api';

function Home() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    api.get('catalog')
      .then(response => {
        dispatch(setProducts(response.data))
      });
  }, [dispatch]);

  console.log(products);

  return (
    <div>
      
    </div>
  )
}

export default Home;
