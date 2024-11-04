import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'; 

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/cart">Carrito</Link>
      <CartWidget />
    </nav>
  );
}

export default Navbar;
