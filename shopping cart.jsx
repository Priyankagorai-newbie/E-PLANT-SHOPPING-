import React from 'react';
import CartItem from './CartItem';

const ShoppingCart = ({ cartItems, increaseQuantity, decreaseQuantity, removeFromCart }) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalPrice.toFixed(2)}</p>
      {cartItems.map((item) => (
        <CartItem 
          key={item.id} 
          item={item} 
          increaseQuantity={increaseQuantity} 
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart} 
        />
      ))}
      <button>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
