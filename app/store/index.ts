// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import sortReducer from '../slices/sortSlice';
import filterReducer from '../slices/filterSlice';
import gameReducer from '../slices/gameSlice';

// Configure the Redux store with the reducers from the slices
export const store = configureStore({
  reducer: {
    sort: sortReducer,
    filter: filterReducer,
    game: gameReducer,
  },
});

// Export types for the RootState and AppDispatch to be used in hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
