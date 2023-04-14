import {configureStore} from "@reduxjs/toolkit";
import browserSlice from "./browserSlice";
const store = configureStore({
    reducer:{
         browsingHistory:browserSlice
    }
});

export default store;