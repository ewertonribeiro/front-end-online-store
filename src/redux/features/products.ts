import { createSlice } from '@reduxjs/toolkit';
import { fetchItemByQuery } from '../thunks/fetchItemByQuery';
import { fetchItemBySearch } from '../thunks/fetchItemBySearch';

interface List {
    lista: Item[];
}


const initialState: List = {
    lista: [],
};


export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchItemBySearch.fulfilled, (state, {payload}) => {
            state.lista = payload;
        });
        builder.addCase(fetchItemByQuery.fulfilled , (state,{payload})=>{
            state.lista = payload
        })
    },
});


export default productSlice.reducer;
