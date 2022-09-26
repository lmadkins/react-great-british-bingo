import React, { useState, useEffect, useContext } from 'react';
import { WinContext } from '../context/WinContext';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const WinAlert = (handleStartClick, replay) => {
  const [open, setOpen] = useState(false);
  
  const { win, setWin } = useContext(WinContext)

  useEffect(() => {
    if (win) {
      setOpen(true)
    } 
  }, [win])

  const handleClose = () => {
    setOpen(false)
  };
  
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="Win-dialog-window"
        aria-describedby="alert-dialog-description">
          
        <DialogTitle id="alert-dialog-title">
        Congratulations, baker, you've won!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Would you like to play again?
          </DialogContentText>
        </DialogContent>
          <Button 
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