import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/Landing Page';
import ProductList from './components/Product List';
import ShoppingCart from './components/Shopping Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  
  const products = [
   { id: 1,
    name: 'Croton Plant',
    price: 20,
    image: 'https://th.bing.com/th/id/OIP.7Oz3DPo6PeKDp6e378aFCAHaE8?rs=1&pid=ImgDetMain',
  },
  {
    id: 2,
    name: 'Chinese Money Plant',
    price: 18.20,
    image: 'https://cdn.shopify.com/s/files/1/1706/1307/products/Pilea-peperomioides-Chinese-Money-Plant-Stemmed_2000x.jpg?v=1581952996',
  },
  {
    id: 3,
    name: 'Spider Plant',
    price: 17.50,
    image: 'https://www.healthbenefitstimes.com/9/gallery/spider-plant/Small-Spider-plant.jpg',
  },
  {
    id: 4,
    name: 'Peace Lily',
    price: 21.99,
    image: 'https://th.bing.com/th/id/OIP.hQ8eOslbINs1MIykneL32QHaE8?rs=1&pid=ImgDetMain',
  },
  {
    id: 5,
    name: 'Fiddle Leaf Fig',
    price: 18.99,
    image: 'https://www.passionateblooms.ca/wp-content/uploads/2018/06/54192476_2797300656948572_7112213697530953728_o-1.jpg',
  },
  {
    id: 6,
    name: 'Aloe Vera',
    price: 16.80,
    image: 'https://th.bing.com/th/id/R.90715b28a84c7b8c3b7471302a3224bb?rik=27hBduY1APigwQ&riu=http%3a%2f%2fwww.plant-lore.com%2fwp-content%2fuploads%2f2011%2f08%2f2014-09-17-13.20.27.jpg&ehk=Wln2xSTw1nfNdHqPmlkErR3vvp6bsYiyojrh%2bgv3TPo%3d&risl=&pid=ImgRaw&r=0',
  },
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
