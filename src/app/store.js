import { configureStore } from '@reduxjs/toolkit';
import imgSliceReducer from '../features/imgSlice/imgSlice';
import favSliceReduce from '../features/favSlice/favSlice';

export const store = configureStore({
  reducer: {
    imgSlice: imgSliceReducer,
    favSlice: favSliceReduce,
  }
});
