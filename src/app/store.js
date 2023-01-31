import { configureStore } from '@reduxjs/toolkit';
import imgSliceReducer from '../features/imgSlice/imgSlice';


export const store = configureStore({
  reducer: {
    imgSlice: imgSliceReducer,
  }
});
