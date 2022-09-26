// import "../App.css";
// import marker from '../img/marker50.png'
// import marker2 from '../img/marker100.png'
import Alert from '@mui/material/Alert';
import React, { useState, useEffect, useContext } from 'react';
import { WinContext } from '../context/WinContext';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom"
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';

const WinAlert = (handleStartClick, replay, renderNewGame) => {
  const [open, setOpen] = useState(false);
  
  const { win, setWin } = useContext(WinContext)

  useEffect(() => {
    setOpen(true)
  }, [win])

  const handleClose = () => {
    setOpen(false)
    renderNewGame()
  };
  
  return (
    <>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        Congratulations, baker, you've won!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Would you like to play again?
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions> */}
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