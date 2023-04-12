import { changeHome } from "./homeSlice";
import { useDispatch, useSelector } from "react-redux";
import Gameboard from "../gameboard/Gameboard";
import Result from "../../app/components/Result";


const Home = () => {
  const home = useSelector((state) => state.home)
  const dispatch = useDispatch();

  const onClickButtonHandler = () => {
    dispatch(changeHome('gameboard'));
  };

  return (
    <>
    { home === 'home' && 
      <div className="home fade-in-anim">
        <main>
          <h1>matching cards</h1>
          <button className="button" onClick={ () => onClickButtonHandler() }>play</button>
        </main>
        <footer>2023 mateusz kiszczak</footer>
      </div>
    }
    { home === 'gameboard' && 
      <Gameboard />
    }
    { home === 'result' && 
      <Result />
    }
    </>
  );
}


export default Home;
