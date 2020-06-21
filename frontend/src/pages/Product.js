import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../services/api';

import ProductDetail from '../components/ProductDetail';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const response = await api.get('catalog');
      setProduct(response.data.find(product => product.style === id));
    }

    getProduct();
  }, []);

  console.log(product);

  return (
    <ProductDetail product={product} />
  )
}

export default Product;