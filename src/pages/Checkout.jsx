

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Checkout({ cartItems, setCartItems }) {
  const [formData, setFormData] = useState({ name: '', address: '', phone: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.address || !formData.phone) {
      setError('Please fill in all fields!');
      return;
    }

    // Clear cart and form
    setCartItems([]);
    setFormData({ name: '', address: '', phone: '' });
    setError('');
    navigate('/thankyou');
  };

  return (
    <motion.div
      className="p-6 max-w-xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-yellow-800 mb-4 text-center">Checkout</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="text"
          name="address"
          placeholder="Delivery Address"
          value={formData.address}
          onChange={handleInputChange}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full mb-4 p-2 border rounded"
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
        >
          Place Order
        </button>
      </form>
    </motion.div>
  );
}

export default Checkout;
