import Button from '@mui/material/Button';

const GameNav = ({handleStartClick}) => {

  const handlePrintClick = () => {
    window.print()
  }

  return (
    <nav>
        <Button 
        aria-label="Print bingo card button"
        className="print-btn"
        variant="contained"
        color="teal" 
        onClick={handlePrintClick}
        >
          Print Bingo Card
        </Button>

        <Button 
        aria-label="Restart game button"
        className="restart-btn"
        variant="contained"
        color="red" 
        onClick={handleStartClick}>
          Restart
        </Button>
    </nav>
  );
};

export default GameNav;