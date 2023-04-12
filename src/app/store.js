import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../features/home/homeSlice";
import cardsReducer from "../features/cards/cardsSlice";
import gameboardReducer from "../features/gameboard/gameboardSlice";
import timerReducer from "../features/timer/timerSlice";



export default configureStore({
  reducer: {
    home: homeReducer,
    cards: cardsReducer,
    gameboard: gameboardReducer,
    timer: timerReducer
  }
});
