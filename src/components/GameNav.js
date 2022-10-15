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
        className="print-btn"
        variant="contained"
        color="teal" 
        onClick={handlePrintClick}
        sx={{
          backgroundColor: '#7aa3a1',
        }}>
          Print Bingo Card
        </Button>

        <Button 
        aria-label="Restart game button"
        className="restart-btn"
        variant="contained"
        onClick={handleStartClick}
        sx={{
          backgroundColor: '#b71c1c',
        }}>
          Restart
        </Button>
    </nav>
  );
};

export default GameNav;