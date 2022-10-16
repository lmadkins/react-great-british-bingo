import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import Fab from '@mui/material/Fab';
import { Popover } from "@mui/material";

import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import gameBanner from '../img/gbbs-title1280.png'
import gameBannerCrop from '../img/gbbs-title-crop.png'

const GameIntro = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const handleClick = (event) => {
    setAnchorEl(event.target);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
          }}>
          <p>Ready?
          On your mark, get set, PLAY!</p>
        </Button>
      </Link> 
    </main>
    </span>
      <span>
        <h4
        aria-label="Open game instructions"
        aria-describedby={id} variant="contained" onClick={handleClick}
        >
        Wait, how do I play?</h4>
      <Popover 
        aria-label="Popup showing game instructions"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        style={{
          opacity: '95%',
          borderRadius: '20px',
        }}
      >
        <p
        className='instructions-popover'>
        While watching, keep an eye out for when something happens matching one of your card prompts. When it does, click or tap to mark it off. 
        <br></br>
        When you get 5 in a row (horizontally or vertically), you win! 
        <h6>(Click anywhere outside this box to close.)</h6>
        </p>  
      </Popover>
    </span>
      </Stack>
    {/* </Box> */}
      
      
    
    </div>
  );
};

export default GameIntro;