import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        loadproduct: (state, action) => {
            // here we can not call api
            state.products = action.payload;
        },
    },
});

export default ProductSlice.reducer;
export const { loadproduct } = ProductSlice.actions;
