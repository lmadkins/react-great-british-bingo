import { Link } from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import Fab from '@mui/material/Fab';
import { Popover } from "@mui/material";
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



  // const open = Boolean(anchorEl);
  // const id = open ? 'simple-popover' : undefined;

  return (
    <div className="main-container">
      {/* <Box sx={{ 
        width: '80%', 
        height: '100vh',
        // border: "10px solid red",
        backgroundColor: 'white',
        margin: '0 auto',}}> */}
        
      <Stack spacing={2}>
          {isDesktop ? (
          <img src={gameBanner} alt="Banner with the text: 'Welcome to The Great British Baking Show Bingo' in the style of main credit title card from the show"></img>
        ) : (
          <img src={gameBannerCrop} alt="Banner with the text: 'Welcome to The Great British Baking Show Bingo' in the style of main credit title card from the show"></img>
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
            // backgroundColor: '#169235',
            // background: 'rgb(22,146,53)',
            // background: 'radial-gradient(circle, rgba(22,146,53,1) 0%, rgba(15,108,39,0.9990371148459384) 100%)',
            color: 'white',
            padding: '2%',
            borderRadius: '10px',
            letterSpacing: '1px',
            fontFamily: 'Futura Heavy',
          }}>
          <p>Ready?
          On your mark, get set, PLAY!</p>
        </Button>
      </Link> 
    </main>
    </span>
      <span
      // onClick={handleInstructionsClick}
        style={{
          cursor: 'pointer'
        }}
      >
      <GameInstructions />
      <h4
        aria-label="Open game instructions"
        onClick={handleInstructionsClick}
        >
        Wait, how do I play?</h4>
    </span>
      </Stack>

    </div>
  );
};

export default GameIntro;