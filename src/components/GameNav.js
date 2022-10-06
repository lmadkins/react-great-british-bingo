import Button from '@mui/material/Button';

const GameNav = ({handleStartClick}) => {

  return (
    <nav>
        <Button 
        className="restart"
        variant="contained"
        color="third" 
        onClick={handleStartClick}>
          Restart
        </Button>
    </nav>
  );
};

export default GameNav;