import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../feature/product/ProductSlice';

export const store = configureStore({
    reducer: {
        products: productReducer

    }
})
