import React, { useState, useEffect, useContext } from 'react';
import { WinContext } from '../context/WinContext';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const WinAlert = ({renderNewGame}) => {

// CONTEXT STATE USED
  const { win, setWin } = useContext(WinContext)

// LOCAL STATE 
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (win) {
      setOpen(true)
    } 
  }, [win])

  const handleClose = () => {
    setOpen(false)
    renderNewGame()
  }
  
  return (
    <Dialog
      sx={{ margin: '0 auto'}}
      open={open}
      onClose={handleClose}
      aria-labelledby="Win Dialog Window"
      aria-describedby="alert-dialog-description"
      className={`${!open ? "animate__animated  animate__fadeOutDown animate__delay-4s" : ""}`}>
      <DialogTitle 
        id="alert-dialog-title"
        sx={{
          textAlign: 'center',
          fontSize: '2.5rem',
          fontFamily: 'Futura Heavy',
          fontDisplay: 'swap',
        }}>
          BINGO!
      </DialogTitle>
      <DialogContent
        sx={{
          textAlign: 'center',
          padding: '3rem',
        }}>
        <DialogContentText 
          id="alert-dialog-description"
          sx={{
            fontSize: '1.25rem',
          }}>
            Would you like to play again?
        </DialogContentText>
        <Button 
          variant="contained"
          color="teal" 
          aria-label="Start button"
          className="animate__animated animate__pulse animate__delay-3s"
          onClick={handleClose} 
          onTouchStart={handleClose}
          autoFocus
          sx={{
            color: 'white',
            marginTop: '20px',
            padding: '5%',
            borderRadius: '10px',
            fontSize: '1rem',
            fontFamily: 'Futura Heavy',
            fontDisplay: 'swap',
            letterSpacing: '1px',
            // hover and active pseudoclass styling in App.css
          }}>
          On your mark, get set, PLAY!
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default WinAlert;