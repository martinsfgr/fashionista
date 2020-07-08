import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import catalogData from '../data';

import ProductDetail from '../components/ProductDetail';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = () => {
      const response = catalogData;
      setProduct(response.find(product => product.style === id));
    }

    getProduct();
  }, []);

  return (
    <ProductDetail product={product} />
  )
}

export default Product;
