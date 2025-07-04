
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Cart({ cartItems, setCartItems }) {
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-yellow-800 text-center">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-4 rounded shadow mb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-green-700">₹{item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-6">
            <p className="text-xl font-bold">Total: ₹{total}</p>
            <Link to="/checkout">
              <button className="mt-3 bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600 transition">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Cart;
