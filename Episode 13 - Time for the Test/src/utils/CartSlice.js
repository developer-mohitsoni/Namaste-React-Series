import { createSlice, current } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], //* Initialize with initial state
  },
  reducers: {
    addItem: (state, action) => {
      //* Vanilla(older) Redux => DON'T MUTATE THE STATE
      //* We uses like this in Older Redux:-

      //* const newState = [...state];
      //* newState.items.push(action.payload);
      //* return newState;

      //* Redux Toolkit using Immer behind the scene
      //* We have to Mutating the state over here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    
    // originalState = {items: ["pizza", "burger", "coke"]}
    clearCart: (state) => {
      console.log(current(state));

      //? RTK - either Mutate the state or return a new state;
      //* state.items.length = 0; // state = []

      return { items: [] }; //* new original state will be empty as:-{items: []}
    },
  },
});

export const { addItem, removeItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
