import { useEffect, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { shuffleCards, isOpenTrue, resetCards } from "./cardsSlice";
import { addCard, increaseUserClicks, addTotalTime } from "../gameboard/gameboardSlice";
import { changeHome } from "../home/homeSlice";
import { increaseTimer, clearTimer } from "../timer/timerSlice";



const Cards = () => {
  const interval = useRef();
  const cards = useSelector(state => state.cards);
  const gameboard = useSelector(state => state.gameboard);
  const timer = useSelector(state => state.timer)
  const dispatch = useDispatch();


  const shuffleAllCards = useCallback(() => {
    dispatch(shuffleCards());
  }, [dispatch]);


  useEffect(() => {
    shuffleAllCards();
  }, [dispatch, shuffleAllCards]);


  const handleOnClick = (card) => {
    if (gameboard.openedCards.length < 2 && !card.matchFounded && !card.isOpen) {
      dispatch(isOpenTrue(card));
      dispatch(addCard(card));
      dispatch(increaseUserClicks());
    }
    if (!gameboard.userClicks) {
      interval.current = setInterval(() => {
        dispatch(increaseTimer());
      }, 1000);
    }
  };


  useEffect(() => {
    const x = cards.filter(card => card.matchFounded === false);
    if (x.length === 0) {
      clearInterval(interval.current);
      dispatch(addTotalTime(timer.time));

      const timeout = setTimeout(() => {
        dispatch(changeHome("result"));
        dispatch(clearTimer());
        dispatch(resetCards());
      }, 1000);
      
      return () => clearTimeout(timeout);
    }
  // eslint-disable-next-line
  }, [cards]);


  return (
    <>
      {cards.map((card => {
        return (
          <div 
            key={`card-${card.id}`} 
            data-testid="card"
            className="card" 
            style={{cursor: `${card.matchFounded ? "not-allowed" : "pointer"}`}} 
            onClick={ () => handleOnClick(card) }
          >
            <div className={`card-wrapper ${card.isOpen ? "flip-card" : ""} ${card.matchFounded ? "card-disable" : ""}`}>
              <div className={`card-back `}>
              </div>
              <div className="card-front">
                <img src={card.img} alt={`${card.name} card`}/>
              </div>
            </div>
          </div>
        )
      }))}
    </>
  );
}



export default Cards;
