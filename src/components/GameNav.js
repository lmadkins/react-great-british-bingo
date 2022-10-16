import Button from '@mui/material/Button';
import { useContext } from 'react';
import { PrintModeContext } from '../context/PrintModeContext';

const GameNav = ({handleStartClick}) => {
  const {print, setPrint} = useContext(PrintModeContext)

  const openPrint = () => {
    window.print()
    // changes stylings back to normal
    setPrint(false)
  }

  const handlePrintClick = () => {
    setPrint(true)
  // timeout for conditional styling on components to re-render
    setTimeout(openPrint, 250)
  }

  return (
    <nav>
      <Button 
        aria-label="Print bingo card button"
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
        aria-label="Restart game button"
        className="restart-btn"
        color="red"
        variant="contained"
        onClick={handleStartClick}
        onTouchStart={handleStartClick}>
          Shuffle
      </Button>
    </nav>
  );
};

export default GameNav;