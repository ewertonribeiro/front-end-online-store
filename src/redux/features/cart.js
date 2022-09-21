import { createSlice } from '@reduxjs/toolkit';
import {
  getAllFromCart, subToCart, addToCart, removeToCart,
} from '../../services/localStorage';

const initialState = {
  cart: getAllFromCart(),
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state) => {
      state.cart = getAllFromCart();
    },
    add: (state, { payload: { item } }) => {
      addToCart(item);
      state.cart = getAllFromCart();
    },
    sub: (state, { payload: { item } }) => {
      subToCart(item);
      state.cart = getAllFromCart();
    },
    remove: (state, { payload: { item } }) => {
      removeToCart(item);
      state.cart = getAllFromCart();
    },
  },
});

export const {
  setCart, add, remove, sub,
} = cartSlice.actions;

export default cartSlice.reducer;
