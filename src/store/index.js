import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shopSlice";

//Se configura redux y le cambio el nombre para que sea acorde a la convencion.
export default configureStore({
    reducer: { shopReducer },
});
