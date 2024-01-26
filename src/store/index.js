import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shopSlice";
import cartReducer from "../features/cartSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { shopApi } from "../services/shopService";
import { authApi } from "../services/authService";
import authReducer from "../features/authSlice";
//Se configura redux y le cambio el nombre para que sea acorde a la convencion.

const store = configureStore({
    reducer: {
        shopReducer,
        cartReducer,
        authReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(shopApi.middleware).concat(authApi.middleware),
});

setupListeners(store.dispatch);

export default store;
