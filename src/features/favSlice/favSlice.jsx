import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favImages: JSON.parse(localStorage.getItem("favs")) || [],
};
const setLocalStorage = (image) => {
  localStorage.setItem("favs", JSON.stringify(image));
};

export const favSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    addFav: (state, action) => {
      if ([...state.favImages].every((fav) => fav.id !== action.payload.id)) {
        state.favImages = [...state.favImages, action.payload];
        setLocalStorage(state.favImages);
      }
    },
    deleteFav: (state, action) => {
      state.favImages = state.favImages.filter(
        (fav) => fav.id !== action.payload
      );
      setLocalStorage(state.favImages);
    },
    editFavDescription: (state, action) => {
      state.favImages = state.favImages.map((fav) => {
        if (fav.id === action.payload.id) {
          fav.description = action.payload.description;
        }
        return fav;
      });
      setLocalStorage(state.favImages);
    },
    orderFavorites: (state, action) => {
      const favImages = state.favImages.sort(
        (a, b) => b[action.payload] - a[action.payload]
      );
      state.favImages = favImages;
    },
  },
});

export const selectFav = (state) => state.favImages
export const { addFav, deleteFav, editFavDescription, orderFavorites } = favSlice.actions;
export default favSlice.reducer;
