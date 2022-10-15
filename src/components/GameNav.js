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
        sx={{
          backgroundColor: '#7aa3a1',
        }}
        >
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