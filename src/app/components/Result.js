import { useSelector, useDispatch } from "react-redux";
import { changeHome } from "../../features/home/homeSlice";
import { clearTotalTime, clearUserClicks } from "../../features/gameboard/gameboardSlice";
import { clearTimer } from "../../features/timer/timerSlice";



const Result = () => {
  const gameboard = useSelector(state => state.gameboard);
  const dispatch = useDispatch();


  const handleOnClick = () => {
    dispatch(changeHome('home'));
    dispatch(clearTotalTime());
    dispatch(clearTimer());
    dispatch(clearUserClicks());
  };


  const correctPlayerTime = (num) => {
    if (num/60 < 1) {
      return `${num} sec.`;
    }
    if (num/60 === 1) {
      return '1 min. 0 sec.';
    }
    if (num/60 > 1) {
      const minutes = Math.trunc(num/60);
      const seconds = num % 60;

      return `${minutes} min. ${seconds} sec.`;
    }
  };


  return (
    <div className="result fade-in-anim">
      <main>
        <h1>result</h1>
        <div>
          <p>You have finished the game in:</p>
          <div className="result-stats">
            <p>{`${gameboard.userClicks/2} moves`}</p>
            <p>{`${correctPlayerTime(gameboard.totalTime)} time`}</p>
          </div>
        </div>
        <button className="button" onClick={() => handleOnClick()}>try again</button>
      </main>
    </div>
  );
}



export default Result;
