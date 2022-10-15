import { Link } from "react-router-dom"
import Fab from '@mui/material/Fab';


const GameIntro = () => {

  return (
    <main className="
    animate__animated 
    animate__slideInDown">
      <h1>
        Welcome to the Great British Baking Show Bingo
      </h1>

      <h2>
        How to Play:
      </h2>
        <p>
        While watching, keep an eye out for when something happens matching one of your card prompts. When it does, click or tap to mark it off. 
        <br></br>
        When you get 3 in a row (horizontally or vertically), you win! 
        <br></br>
      </p>
      <br></br>
      <Link to="/play">
        <Fab 
          variant="extended"
          color="green" 
          autoFocus
          aria-label="Start button"
          className="
          animate__animated animate__pulse animate__delay-3s">
          <p>Ready?
          On your mark, get set, PLAY!</p>
        </Fab>
      </Link>
    </main>
  );
};

export default GameIntro;