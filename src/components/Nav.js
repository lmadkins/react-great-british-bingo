import Button from '@mui/material/Button';
import { useContext } from 'react';
import { PrintModeContext } from '../context/PrintModeContext';

const GameNav = ( {handleShuffleClick} ) => {

// For print functionality
  const {print, setPrint} = useContext(PrintModeContext)

    const handlePrintClick = () => {
    setPrint(true)
    setTimeout(openPrint, 400)
    // ^ (timeout for conditional styling on components to re-render)
  }

  const openPrint = () => {
    window.print()
    setPrint(false)
    // ^ changes stylings back to normal from printmode once the print window has been opened
  }


  return (
    <nav>
      <Button 
        aria-label="Print bingo card button"
        className="print-btn"
        variant="contained"
        color="teal" 
        onClick={handlePrintClick}
        onTouchStart={handlePrintClick}
        sx={{
          backgroundColor: '#7aa3a1',
          marginRight: '15px'
        }}>
          Print Bingo Card
      </Button>

      <Button 
        aria-label="Shuffle game button"
        className="shuffle-btn"
        color="red"
        variant="contained"
        onClick={handleShuffleClick}
        onTouchStart={handleShuffleClick}>
          Shuffle
      </Button>
    </nav>
  );
};

export default GameNav;