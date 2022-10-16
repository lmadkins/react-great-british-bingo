import React, { useState, useEffect, useContext } from 'react';
import { RestartContext } from '../context/RestartContext';
import { WinContext } from '../context/WinContext';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

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
  }
  
  return (
    <Dialog
      sx={{ margin: '0 auto'}}
      open={open}
      onClose={handleClose}
      aria-labelledby="Win Dialog Window"
      aria-describedby="alert-dialog-description"
      className={`${!open ? "animate__animated  animate__fadeOutDown animate__delay-2s" : ""}`}>
      <DialogTitle 
        id="alert-dialog-title"
        sx={{
          textAlign: 'center',
          paddingTop: '2.5rem',
          fontSize: '3rem',
          fontFamily: 'Futura Heavy',
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
          className="animate__animated animate__pulse animate__delay-1s"
          onClick={handleClose} 
          onTouchStart={handleClose}
          autoFocus
          sx={{
            color: 'white',
            marginTop: '30px',
            padding: '5%',
            borderRadius: '10px',
            fontSize: '1rem',
            fontFamily: 'Futura Heavy',
            letterSpacing: '1px',
          }}>
          On your mark, get set, PLAY!
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default WinAlert;