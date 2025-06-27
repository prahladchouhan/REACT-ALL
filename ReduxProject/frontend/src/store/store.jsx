import {configureStore} from '@reduxjs/toolkit';

import userSlice from "./reducers/userSlice";
import productSlice from "./reducers/ProductSlice";

export default configureStore({

    reducer:{
        productReducer: productSlice,
        userReducer: userSlice,
    }
});