import { Link } from "react-router-dom"
import Fab from '@mui/material/Fab';
// import gameBanner from '../img/gbbs-title.jpeg'

const GameIntro = () => {
  return (
    <div className="main-container">
      <header>
      <div className="game-banner">
        {/* <img src={gameBanner} 
        className='game-banner'
        alt="Banner image of the opening credits title sequence for The Great British Baking Show , with added text reading: 'Welcome to the Great British Baking Show Bingo"
        ></img> */}
        </div>
      </header>
      
      
    <main className="
    animate__animated 
    animate__slideInDown">
     
      {/* <h1>Welcome to the Great British Baking Show Bingo!</h1> */}

      <h2>How to Play:</h2>
        <p>
        While watching, keep an eye out for when something happens matching one of your card prompts. When it does, click or tap to mark it off. 
        <br></br>
        When you get 3 in a row (horizontally or vertically), you win! 
        <br></br>
        </p>
    
      <Link to="/play">
        <Fab 
          variant="extended"
          autoFocus
          aria-label="Start button"
          className="
          animate__animated animate__pulse animate__delay-3s"
          sx={{
            backgroundColor: '#169235',
            color: 'white',
          }}>
          <p>Ready?
          On your mark, get set, PLAY!</p>
        </Fab>
      </Link>
    </main>
    </div>
  );
};

export default GameIntro;