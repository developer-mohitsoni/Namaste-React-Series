import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

const appStore = configureStore({
  //* this reducer is basically responsible to modify the appStore and this reducer is basically a combinations of different small store for each slice we will have a reducer.

  //* THIS Reducer is a big reducer which contains inside in it a small reducer.

  //* This is one reducer for the whole app and it will contain multiple small reducers
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
