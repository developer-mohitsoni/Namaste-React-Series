import { createSlice } from "@reduxjs/toolkit";

const createSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducer: {
    addItem: (state, action) => {
        //* Mutating the state over here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0; // []
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
