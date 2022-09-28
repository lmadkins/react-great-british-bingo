import { Link } from "react-router-dom"
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';


const GameIntro = () => {
  return (
    <>
    <Typography 
      align="center" 
      variant="h3"  
      gutterBottom
      // textTransform='uppercase'
      >
        Welcome to the Great British Bakeoff Bingo
      </Typography>
    <Typography 
      variant="h6" 
      align="center" 
      textTransform='uppercase'>
        How to Play:
      </Typography>
      <Typography 
        align="center" 
        variant="subtitle2" 
        aria-label="Instructions"
        gutterBottom>
        While watching, keep an eye out for when something happens matching one of your card prompts. When it does, click or tap to mark it off. When you get 3 in a row (horizontally or vertically), you win! 
      </Typography>

      <Link to="/play">
        <Fab 
        variant="extended"
        color="primary" 
        aria-label="Start button">
        Ready?
        On your mark, get set, PLAY!
        </Fab>
      </Link>
    </>
  );
};

export default GameIntro;