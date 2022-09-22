import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface List {
  lista: Item[] | [];
}

interface PayloadList {
  lista: Item[];
}

const initialState: List = {
  lista: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (
      state,
      { payload: { lista } }: PayloadAction<PayloadList>,
    ) => {
      state.lista = lista;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
