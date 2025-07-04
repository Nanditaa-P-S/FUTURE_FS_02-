// 📁 src/App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <div className="bg-yellow-50 min-h-screen">
        {/* Header Navigation */}
        <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
          <Link to="/" className="text-xl font-bold text-yellow-800">
            🛍️ VantageVerse
          </Link>
          <nav className="space-x-4">
            <Link to="/" className="text-yellow-700 hover:text-yellow-900">
              Home
            </Link>
            <Link to="/cart" className="text-yellow-700 hover:text-yellow-900">
              🛒 Cart ({cartItems.length})
            </Link>
          </nav>
        </header>

        {/* Routing */}
        <Routes>
          <Route
            path="/"
            element={<Home cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route
            path="/checkout"
            element={<Checkout cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
