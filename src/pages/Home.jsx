import React from 'react';
import { motion } from 'framer-motion';
import products from '../products';
import ProductCard from '../components/ProductCard';

function Home({ cartItems, setCartItems }) {
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="text-3xl font-bold text-yellow-800 text-center mb-6">
        🛍️ Welcome to VantageVerse
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Explore and shop your favorite products!
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Home;
