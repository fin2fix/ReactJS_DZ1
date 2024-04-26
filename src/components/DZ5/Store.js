import {configureStore} from "@reduxjs/toolkit";
import themeReducer from "./ThemeChangeSlice";

export const store = configureStore({
  reducer: {
    counter: themeReducer,
  },
});