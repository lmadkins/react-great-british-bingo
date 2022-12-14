import React, { useState, useEffect, useContext } from 'react';
import { PrintModeContext } from '../context/PrintModeContext';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const PrintAlert = ({renderNewGame}) => {

// CONTEXT STATE USED
const {print, setPrint} = useContext(PrintModeContext)

// LOCAL STATE 
  const [open, setOpen] = useState(false);


  // detect if screen res is 767px or higher (e.g. tablet or bigger)
  const [isDesktop, setDesktop] = useState(window.innerWidth > 767)

  const updateMedia = () => {
    setDesktop(window.innerWidth > 767)
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
  })

  useEffect(() => {
    if (print && !isDesktop) {
      setOpen(true)
    } 
  }, [print])

  const handleClose = () => {
    setOpen(false)
  }
  
  return (
    <Dialog
      sx={{ margin: '0 auto'}}
      open={open}
      onClose={handleClose}
      aria-labelledby="Print Dialog Window"
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
          Print Instructions
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
            <u>If you have a keyboard on your device:</u>
            <br/> 
            Open print dialog by typing:  <samp> command + p</samp> 
            <p/>
            <u>If not:</u>
            <br/>
            Look for a Print option in the menu of your web browser. If there isn't one, try using a different device to print. 
        </DialogContentText>
        {/* <Button 
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
        </Button> */}
      </DialogContent>
    </Dialog>
  );
};

export default PrintAlert;