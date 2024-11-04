import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartWidget() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className='cart-container'>
      <span className='.cart-text'>Carrito: {totalItems}</span>
    </div>
  );
}

export default CartWidget;
