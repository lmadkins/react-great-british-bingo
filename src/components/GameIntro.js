import { Link } from "react-router-dom"

const GameIntro = () => {
  return (
    <>
    {/* <h1>Welcome to the Great British Bakeoff Bingo</h1> */}
      <p>
        <strong>How to Play:</strong>
        <br></br>
        While watching, keep an eye out for when something happens matching one of your card prompts. When it does, click or tap to mark it off. When you get 3 in a row (horizontally or vertically), you win! 
        </p>
        <Link to="/play">
          <button>
            Ready?
            On your mark, get set, PLAY!
          </button>
        </Link>
      
    </>
  );
};

export default GameIntro;