import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  
  const products = [
    { id: 1, name: 'Fiddle Leaf Fig', price: 25, image: '/images/plant1.jpg' },
    { id: 2, name: 'Snake Plant', price: 20, image: '/images/plant2.jpg' },
    { id: 3, name: 'Monstera', price: 30, image: '/images/plant3.jpg' },
    // Add more products here
  ];

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (product) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (product) => {
    if (product.quantity === 1) {
      removeFromCart(product.id);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Header cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={
          <ShoppingCart 
            cartItems={cartItems} 
            increaseQuantity={increaseQuantity} 
            decreaseQuantity={decreaseQuantity} 
            removeFromCart={removeFromCart} 
          />
        } />
      </Routes>
    </Router>
  );
}

export default App;
