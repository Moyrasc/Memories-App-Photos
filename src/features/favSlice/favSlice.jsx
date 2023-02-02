import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favImages: JSON.parse(localStorage.getItem("favs")) || [],
};
const setLocalStorage = (image) => {
  localStorage.setItem("favs", JSON.stringify(image));
};

export const favSlice = createSlice({
  name: "favImages",
  initialState,
  reducers: {
    toggleFav: (state,action) => {
      const favPhoto = state.favImages.filter(fav => fav.id === action.payload.id)
      favPhoto.length === 0
      ? state.favImages = [...state.favImages, action.payload]
      : state.favImages = state.favImages.filter(fav => fav.id !== action.payload.id)
      setLocalStorage(state.favImages)
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
    searchDescription:(state,action) =>{
      if(action.payload === ''){
        state.favImages = JSON.parse(localStorage.getItem("favs"))
      }else {
        state.favImages = JSON.parse(localStorage.getItem("favs"))
        state.favImages = state.favImages.filter(fav=> fav.description.toLowerCase().includes(action.payload.toLowerCase()))
      }
    },
    orderFavorites: (state, action) => {
      const favImages = state.favImages.sort(
        (a, b) => b[action.payload] - a[action.payload]
      );
      state.favImages = favImages;
    },
  },
});

export const selectFav = (state) => state.favSlice.favImages
export const { editFavDescription, orderFavorites, toggleFav, searchDescription } = favSlice.actions;
export default favSlice.reducer;
