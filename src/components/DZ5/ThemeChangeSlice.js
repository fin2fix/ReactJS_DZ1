import { createSlice } from "@reduxjs/toolkit";

export const themeChangeSlice = createSlice({
  name: "string",
  initialState: { value: "light" },
  reducers: {
    changeTheme: (state) => {
      state.value === "light" ? state.value = "dark" : state.value = "light";
    },
  },
});

export const { changeTheme } = themeChangeSlice.actions;

export default themeChangeSlice.reducer;
