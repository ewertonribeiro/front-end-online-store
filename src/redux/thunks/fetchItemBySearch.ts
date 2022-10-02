import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsFromCategoryAndQuery } from "../../services/api";

export const fetchItemBySearch = createAsyncThunk(
    'products/fetchItemBySearch',
    async (search: string) => {
        const { results } = await getProductsFromCategoryAndQuery('', search);
        return results;
    }
);

