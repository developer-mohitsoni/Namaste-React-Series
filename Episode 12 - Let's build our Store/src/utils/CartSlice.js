import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  //* what state initially of the cartState
  initialState: {
    items: [], //*Initial State of our Slice
  },

  //* we will create action and reducer here. here we write reducer function corresponding to each action. Action is like add an item, remove the items and clear the items.

  //* It's a kind of API that communicate with redux store.
  //* This reducer is basically modifies the cart store because here we contains reducer function which as an two parameters inside it which able to modifiy the data.
  reducer: {
    //* These is our reducer function

    //* The two parameters "state" is a initialState and "action" that we are need to perform
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

/*
{
  actions: {
    addItem;
  },
  reducer
}
*/
//* We need to export two things here first all the actions that are done inside reducer function
export const { addItem, removeItem, clearCart } = cartSlice.actions;

//* Second export the reducer function
export default cartSlice.reducer;
