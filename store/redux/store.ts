import { configureStore } from "@reduxjs/toolkit";

import favouriteReducer from './slices/favourites';

export const store = configureStore({
  reducer: {
    favouriteMeals: favouriteReducer
  }
})