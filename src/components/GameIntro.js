import { Link } from "react-router-dom"
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';


const GameIntro = () => {

  return (
    <main className="animate__animated animate__slideInDown">
      <Typography 
        align="center" 
        variant="h2"  
        gutterBottom
        color="white">
        Welcome to the Great British Bakeoff Bingo
      </Typography>

      <Typography 
        variant="h6" 
        align="center" 
        textTransform='uppercase'
        color="white">
          How to Play:
      </Typography>
      <Typography 
        align="center" 
        variant="subtitle1" 
        aria-label="Instructions"
        gutterBottom>
        <br></br>
        While watching, keep an eye out for when something happens matching one of your card prompts. When it does, click or tap to mark it off. 
        <br></br>
        When you get 3 in a row (horizontally or vertically), you win! 
        <br></br>
      </Typography>
      <p></p><br></br>
      <Link to="/play">
        <Fab 
          variant="extended"
          color="primary" 
          aria-label="Start button"
          className="animate__animated animate__pulse animate__delay-3s">
          Ready?
          On your mark, get set, PLAY!
        </Fab>
      </Link>
    </main>
  );
};

export default GameIntro;