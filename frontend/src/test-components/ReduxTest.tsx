import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, clearCart } from '../features/cart/cartSlice';

// Define the shape of a product
interface Product {
  id: number; // Adjust the type based on your product ID type
  name: string;
  quantity: number;
}

const product: Product = {
  id: 0,
  name: 'test',
  quantity: 1,
};

const ReduxTest: React.FC = () => {
  // Use the correct type for the cart state
  const cartItems = useSelector((state: { cart: { items: Product[] } }) => state.cart.items);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    console.log(cartItems);
    console.log(localStorage.getItem('state'));
  }, [cartItems]);

  return (
    <div>
      <button onClick={handleAddToCart}>Add to cart</button>
      <button onClick={handleClearCart}>Clear cart</button>
    </div>
  );
};

export default ReduxTest;
