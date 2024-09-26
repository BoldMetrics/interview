import { configureStore } from '@reduxjs/toolkit';
import { profileReducer } from './reducers/profileReducer';
import { productReducer } from './reducers/productReducer';

const store = configureStore({
  reducer: {
    profile: profileReducer,
    product: productReducer,
  },
});

export default store;