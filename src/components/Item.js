import React from 'react';
import { Link } from 'react-router-dom';

function Item({ product }) {
  return (
    <div>
      <Link to={`/product/${product.id}`}>
        <h3>{product.name}</h3>
        <img src={product.image} alt={product.name} />
        <p>Precio: ${product.price}</p>
      </Link>
    </div>
  );
}

export default Item;
