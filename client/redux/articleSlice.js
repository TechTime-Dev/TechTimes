import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
  name: "articles",
  initialState: {
    latestArticles: [],
    favoriteArticles: [],
    searchArticles: [],
  },
  reducers: {
    updateLatestArticles: (state, action) => {
      state.latestArticles = action.payload;
    },
    updateFavoriteArticles: (state, action) => {
      state.favoriteArticles = action.payload;
    },
    updateSearchArticles: (state, action) => {
      state.searchArticles = action.payload;
    },
  },
});

export const {
  updateLatestArticles,
  updateFavoriteArticles,
  updateSearchArticles,
} = articleSlice.actions;

export default articleSlice.reducer;
