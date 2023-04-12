import { useEffect } from "react";
import Cards from "../cards/Cards";
import { useSelector, useDispatch } from "react-redux";
import { isOpenFalse, matchFoundedTrue } from "../cards/cardsSlice";
import { clearOpenedCards } from "./gameboardSlice";



const Gameboard = () => {
  const gameboard = useSelector((state => state.gameboard));
  const dispatch = useDispatch();


  useEffect(() => {
    if (gameboard.openedCards.length === 2) {
      if (gameboard.openedCards[0].name === gameboard.openedCards[1].name) {
        const timer = setTimeout(() => {
          dispatch(isOpenFalse(gameboard.openedCards[0]))
          dispatch(isOpenFalse(gameboard.openedCards[1]))
          dispatch(matchFoundedTrue(gameboard.openedCards[0]))
          dispatch(matchFoundedTrue(gameboard.openedCards[1]))       
          dispatch(clearOpenedCards());
        }, 1000);

        return () => clearTimeout(timer);
      }
      if (gameboard.openedCards[0].name !== gameboard.openedCards[1].name) {
        const timer = setTimeout(() => {
          dispatch(isOpenFalse(gameboard.openedCards[0]))
          dispatch(isOpenFalse(gameboard.openedCards[1]))
          dispatch(clearOpenedCards());
        }, 1000);

        return () => clearTimeout(timer);
      }
    }
  }, [dispatch, gameboard]);


  return (
    <div className="gameboard fade-in-anim">
      <Cards />
    </div>
  );
}



export default Gameboard;
