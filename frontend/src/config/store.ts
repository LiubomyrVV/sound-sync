import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice.ts';

import { loadFromStorage, saveToStorage } from '../utils/localStorage.ts';

const preloadedState = loadFromStorage('state');

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // checkout: checkoutReducer,
    // product: productReducer,
    // user: userReducer,
  },
  preloadedState, // Load state from localStorage if available
});

// Save the state to localStorage whenever it changes
store.subscribe(() => {
  saveToStorage('state', store.getState());
});

export default store;
