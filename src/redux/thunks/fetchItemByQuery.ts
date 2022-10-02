import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsFromCategoryAndQuery } from "../../services/api";

export const fetchItemByQuery = createAsyncThunk(
    'products/fetchItemByQuery',
    async (categoryId: string) => {
        const { results } = await getProductsFromCategoryAndQuery(categoryId);
        return results;
    }
);

