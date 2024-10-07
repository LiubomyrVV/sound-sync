import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of an item in the cart
interface CartItem {
  id: string; // Adjust the type based on your item's ID type
  quantity: number;
  // Add other properties as needed, e.g., name, price, etc.
}

// Define the initial state interface
interface CartState {
  items: CartItem[];
}

// Initial state
const initialState: CartState = {
  items: [],
};

// Create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      // Validate that item has required properties
      if (newItem) {
        const existingItem = state.items.find((el) => el.id === newItem.id);
        if (existingItem) {
          // If item exists, update the quantity
          existingItem.quantity += newItem.quantity;
        } else {
          // If item doesn't exist, add it
          state.items.push(newItem);
        }
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      // Ensure the payload is valid before attempting to remove
      if (itemId) {
        state.items = state.items.filter((item) => item.id !== itemId);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Export actions and reducer
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
