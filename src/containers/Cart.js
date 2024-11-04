import React, { useContext } from 'react';
import {CartContext} from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <p>El carrito está vacío</p>;
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <img className='cart-item-image' src={item.image} alt={item.name} />
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div className='cart-text'>
        <h3>Total: ${totalPrice}</h3>
        <button onClick={clearCart}>Vaciar Carrito</button>
        <Link to="/checkout">
          <button>Finalizar Compra</button>
        </Link>
      </div>  
    </div>
  );
}

export default Cart;
