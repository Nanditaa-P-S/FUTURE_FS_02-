import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ThankYou() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-yellow-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-green-700 mb-4">🎉 Thank You for Your Order!</h1>
      <p className="text-gray-700 mb-6 text-lg">We appreciate your purchase at VantageVerse.</p>
      <Link to="/" className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded transition">
        Back to Home
      </Link>
    </motion.div>
  );
}

export default ThankYou;