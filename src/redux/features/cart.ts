import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import {
  getAllFromCart,
  subToCart,
  addToCart,
  removeToCart,
} from '../../services/localStorage';

interface Cart {
  cart: Item[];
}

interface PayloadItem {
  item: Item;
}

const initialState: Cart = {
  cart: getAllFromCart(),
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state) => {
      state.cart = getAllFromCart();
    },
    add: (state, { payload: { item } }: PayloadAction<PayloadItem>) => {
      addToCart(item);
      state.cart = getAllFromCart();
    },
    sub: (state, { payload: { item } }: PayloadAction<PayloadItem>) => {
      subToCart(item);
      state.cart = getAllFromCart();
    },
    remove: (state, { payload: { item } }: PayloadAction<PayloadItem>) => {
      removeToCart(item);
      state.cart = getAllFromCart();
    },
  },
});

export const { setCart, add, remove, sub } = cartSlice.actions;

export default cartSlice.reducer;
