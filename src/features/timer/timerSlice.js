import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  time: 0
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    increaseTimer: (state) => {
      state.time = state.time + 1;
    },
    clearTimer: (state) => {
      state.time = 0;
    }
  }
});

export const { 
  increaseTimer,
  clearTimer
} = timerSlice.actions;

export default timerSlice.reducer;
