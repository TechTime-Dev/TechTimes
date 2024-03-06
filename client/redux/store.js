import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./articleSlice.js";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});
