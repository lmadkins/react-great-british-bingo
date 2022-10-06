import React, { useState, useEffect, useContext } from 'react';
import { RestartContext } from '../context/RestartContext';
import { WinContext } from '../context/WinContext';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';

const WinAlert = (handleStartClick, replay) => {
  const [open, setOpen] = useState(false);
  
  const { win, setWin } = useContext(WinContext)
  const { restartBoard, setRestartBoard } = useContext(RestartContext)

  useEffect(() => {
    if (win) {
      setOpen(true)
    } 
  }, [win])

  const handleClose = () => {
    setOpen(false)
    setRestartBoard(true)
    // console.log(restartBoard)
    // console.log(win)
  };
  
  return (
    <>
      <Dialog
      sx={{
        width: 600,
        margin: '0 auto',
      }}
        open={open}
        onClose={handleClose}
        aria-labelledby="Win-dialog-window"
        aria-describedby="alert-dialog-description"
        className={`${!open ? "animate__animated  animate__fadeOutDown animate__delay-2s" : ""
        //  "animate__animated  animate__fadeIn  animate__fast"
      }`}
        >
          
        <DialogTitle id="alert-dialog-title">
        Congratulations, baker, you've won!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Would you like to play again?
          </DialogContentText>
        </DialogContent>
        {/* <Fab 
        variant="extended"
        color="primary" 
        aria-label="Start button"
        className="animate__animated animate__pulse animate__delay-1s"
        onClick={handleClose} 
          autoFocus
        >
        
        On your mark, get set, PLAY!
        </Fab> */}
          <Button 
          variant="contained"
          size="medium"
          aria-label="Start button"
          onClick={handleClose} 
          autoFocus>
          Play Again
          </Button>
      </Dialog>
    </>
  );
};

export default WinAlert;