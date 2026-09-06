import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",

  initialState: {
    darkMode: JSON.parse(
      localStorage.getItem("shopcraft-dark") || "false"
    )
  },

  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;

      localStorage.setItem(
        "shopcraft-dark",
        JSON.stringify(state.darkMode)
      );
    }
  }
});

export const { toggleDarkMode } = uiSlice.actions;

export default uiSlice.reducer;