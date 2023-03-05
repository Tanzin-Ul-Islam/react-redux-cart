import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart-store/cartSlice';
export const store = configureStore({
    reducer: {
        cart: cartReducer
    },
})