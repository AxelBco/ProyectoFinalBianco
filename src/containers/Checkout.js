import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { db } from '../firebase/firebaseConfig'; 
import { collection, addDoc } from 'firebase/firestore';
import '../Checkout.css';

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Guarda los datos del carrito y la información del usuario en Firestore
      const orderRef = collection(db, 'orders'); 
      await addDoc(orderRef, {
        items: cart,
        buyer: formData,
        date: new Date(),
      });
      
      // Vacía el carrito
      clearCart();
      alert('Compra realizada con éxito');
      navigate('/'); 
    } catch (error) {
      console.error('Error al crear la orden:', error);
      alert('Hubo un error al procesar tu compra. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Finalizar Compra</h2>
      <form className='checkout-input' onSubmit={handleSubmit}>
        <input
          className='checkout-name'
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className='checkout-mail'
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className='checkout-direccion'
          type="text"
          name="address"
          placeholder="Dirección"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          className='checkout-card-number'
          type="text"
          name="cardNumber"
          placeholder="Número de tarjeta"
          value={formData.cardNumber}
          onChange={handleChange}
          required
        />
        <input
          className='checkout-expiration-date'
          type="text"
          name="expirationDate"
          placeholder="Fecha de vencimiento (MM/AA)"
          value={formData.expirationDate}
          onChange={handleChange}
          required
        />
        <input
          className='checkout-cvv'
          type="text"
          name="cvv"
          placeholder="CVV"
          value={formData.cvv}
          onChange={handleChange}
          required
        />
        <button className='checkout-button' type="submit" disabled={loading}>
          {loading ? 'Procesando...' : 'Abonar'}
        </button>
      </form>
    </div>
  );
}

export default Checkout;
