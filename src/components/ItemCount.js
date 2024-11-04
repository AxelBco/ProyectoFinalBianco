import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ItemCount({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    if (quantity > 0) {
      addToCart({ ...product, quantity });
      setQuantity(1);
    }
  };

  return (
    <div>
      <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
      <span>{quantity}</span>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <button onClick={handleAdd}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
