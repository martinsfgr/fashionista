import React, { } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail () {
  const name = useParams();
  console.log(name);

  return (
    <div>

    </div>
  )
}

export default ProductDetail;
