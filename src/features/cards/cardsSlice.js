import { createSlice } from "@reduxjs/toolkit";
import cards from "../../data/data";


const initialState = cards;

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    shuffleCards: (state) => {
      return shuffleArray(state);
    },
    isOpenTrue: (state, action) => {
      const card = state.find(card => card.id === action.payload.id);
      if (card) {
        card.isOpen = true
      }
    },
    isOpenFalse: (state, action) => {
      const card = state.find(card => card.id === action.payload.id);
      if (card) {
        card.isOpen = false
      }
    },
    matchFoundedTrue: (state, action) => {
      const card = state.find(card => card.id === action.payload.id);
      if (card) {
        card.matchFounded = true
      }
    },
    matchFoundedFalse: (state, action) => {
      const card = state.find(card => card.id === action.payload.id);
      if (card) {
        card.matchFounded = false
      }
    },
    resetCards: (state) => {
      return cards;
    }
  }
});

export const { shuffleCards, isOpenTrue, isOpenFalse, matchFoundedTrue, resetCards } = cardsSlice.actions;

export default cardsSlice.reducer;

// HELPER FUNCTION

/* Randomize array in-place using Durstenfeld shuffle algorithm */
const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
};
