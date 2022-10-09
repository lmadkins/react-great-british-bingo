import { Link } from "react-router-dom"
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';


const GameIntro = () => {

  return (
    <main className="
    animate__animated 
    animate__slideInDown">
      <h1>
        Welcome to the Great British Bakeoff Bingo
      </h1>

      <h3>
        How to Play:
      </h3>
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
          color="primary" 
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