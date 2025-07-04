import { motion } from 'framer-motion';

function ProductCard({ product, addToCart }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md p-4 text-center hover:scale-105 transition duration-300 ease-in-out"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-green-700 font-bold mt-2">₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-3 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
      >
        Add to Cart
      </button>
    </motion.div>
  );
}

export default ProductCard;
