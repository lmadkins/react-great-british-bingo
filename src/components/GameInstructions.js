import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const GameInstructions = ({open, setOpen, handleInstructionsClick}) => {

  const handleClose = () => {
    setOpen(false)
  }
  
  return (
    <Dialog
      sx={{margin: '0 auto'}}
      open={open}
      onClose={handleClose}
      aria-labelledby="Instructions Dialog Window"
      aria-describedby="alert-dialog-description"
      className={`${!open ? "animate__animated  animate__fadeOutDown animate__delay-2s" : ""
      }`}>

      <h2 className="instructions-header">
        Instructions
        </h2>
      <DialogContent>
        <p className="instructions-text">
            While watching, keep an eye out for when something happens matching one of your card prompts. 
            <br></br>
            When it does, click or tap to mark it off.
            <br></br>
            When you get 5 in a row (horizontally or vertically), you win!
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default GameInstructions;