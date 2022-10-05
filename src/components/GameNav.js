// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const GameNav = ({handleStartClick}) => {
  

  return (
    <>
    <nav>
      {/* <Typography
      > Welcome to the Great British Bakeoff Bingo</Typography> */}
        <Button 
        className="restart"
      variant="contained"
      color="third" 
      onClick={handleStartClick}  >Restart</Button>
    </nav>
    </>

  );
};

export default GameNav;