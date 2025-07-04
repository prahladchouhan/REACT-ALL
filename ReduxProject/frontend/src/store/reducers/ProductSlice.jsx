import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadproduct: (state, action) => {
      state.products = action.payload;
    },
    loadlazyproducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export default ProductSlice.reducer;
export const { loadproduct, loadlazyproducts } = ProductSlice.actions;
