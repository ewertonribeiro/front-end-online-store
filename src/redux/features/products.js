import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lista: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, { payload: { lista } }) => {
      state.lista = lista;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
