import { createSlice } from "@reduxjs/toolkit";


const initialState = "home";

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    changeHome: (state, action) => {
      return action.payload;
    }
  }
});

export const { changeHome } = homeSlice.actions;

export default homeSlice.reducer;
