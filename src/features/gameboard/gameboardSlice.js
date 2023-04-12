import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  openedCards: [],
  userClicks: 0,
  currentTime: 0,
  totalTime: 0
};

export const gameboardSlice = createSlice({
  name: 'gameboard',
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.openedCards.push(action.payload);
    },
    clearOpenedCards: (state) => {
      state.openedCards = [];
    },
    increaseUserClicks: (state) => {
      state.userClicks = state.userClicks + 1;
    },
    clearUserClicks: (state) => {
      state.userClicks = 0;
    },
    addTotalTime: (state, action) => {
      state.totalTime = action.payload;
    },
    clearTotalTime: (state) => {
      state.totalTime = 0;
    }
  }
});

export const { 
  addCard,
  clearOpenedCards,
  increaseUserClicks,
  clearUserClicks,
  addTotalTime,
  clearTotalTime
} = gameboardSlice.actions;

export default gameboardSlice.reducer;
