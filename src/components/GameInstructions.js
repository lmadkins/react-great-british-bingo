import React, { useState, useEffect, useContext } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { InstructionsContext } from '../context/InstructionsContext';

const GameInstructions = () => {

  const { openInstructions, setOpenInstructions } = useContext(InstructionsContext)

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true)
  }, [openInstructions])

  const handleClose = () => {
    setOpen(false)
    setOpenInstructions(false)
    
  };
  
  return (
    <Dialog
      sx={{margin: '0 auto'}}
      open={open}
      onClose={handleClose}
      aria-labelledby="Instructions Dialog Window"
      aria-describedby="alert-dialog-description"
      className={`${!open ? "animate__animated  animate__fadeOutDown animate__delay-2s" : ""
      }`}>
      <DialogTitle 
        id="alert-dialog-title"
        sx={{
          textAlign: 'center',
          paddingTop: '2.5rem',
          fontSize: '3rem',
          fontFamily: 'Futura Heavy',
        }}>
          Instructions
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
            While watching, keep an eye out for when something happens matching one of your card prompts. When it does, click or tap to mark it off.
            When you get 5 in a row (horizontally or vertically), you win!
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default GameInstructions;