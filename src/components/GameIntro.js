import { Link } from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import { InstructionsContext } from "../context/InstructionsContext";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import gameBanner from '../img/gbbs-title1280.png'
import gameBannerCrop from '../img/gbbs-title-crop.png'
import GameInstructions from "./GameInstructions";

const GameIntro = () => {

  const { openInstructions, setOpenInstructions } = useContext(InstructionsContext)

  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const handleInstructionsClick = () => {
    setOpenInstructions(true)
    console.log(openInstructions)
  }


  return (
    <Stack spacing={2}
      className="main-container">
      {isDesktop ? (
        <img src={gameBanner} alt="Banner with the text: 'Welcome to The Great British Baking Show Bingo' in the style of main credit title card from the show"/>
      ) : (
        <img src={gameBannerCrop} alt="Banner with the text: 'Welcome to The Great British Baking Show Bingo' in the style of main credit title card from the show"/>
      )}  
      <span>
        <main className="
          animate__animated 
          animate__slideInDown">
          <Link to="/play">
            <Button 
              variant="contained"
              color="teal"
              autoFocus
              aria-label="Start button"
              className="
              animate__animated animate__pulse animate__delay-3s"
              sx={{
                color: 'white',
                padding: '2%',
                borderRadius: '10px',
                letterSpacing: '1px',
                fontFamily: 'Futura Heavy',
              }}>
              <p>Ready? On your mark, get set, PLAY!</p>
            </Button>
          </Link> 
        </main>
      </span>
      <span style={{cursor: 'pointer'}}>
        <GameInstructions />
          <h4
          onClick={handleInstructionsClick}
          onTouchStart={handleInstructionsClick}
          aria-label="Open game instructions">
            Wait, how do I play?
          </h4>
      </span>
    </Stack>
  );
};

export default GameIntro;