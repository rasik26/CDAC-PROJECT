import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Reducers/cartReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
