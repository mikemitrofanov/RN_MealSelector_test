import {CaseReducer, createSlice, PayloadAction} from "@reduxjs/toolkit";

// type State = Array<string>

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    ids: []
  },
  reducers: {
    addFavourite: (state, action) => ({
      ...state,
      ids: [...state.ids, action.payload.id]
    }),
    removeFavourite: (state, action) => ({
      ...state,
      ids: state.ids.filter((item) => item !== action.payload.id)
    })
  }
});

export const addFavourite = favouritesSlice.actions.addFavourite;
export const removeFavourite = favouritesSlice.actions.removeFavourite;

export default favouritesSlice.reducer;