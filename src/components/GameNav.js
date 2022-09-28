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
      variant="contained" 
      onClick={handleStartClick}  >Restart</Button>
    </nav>
    </>

  );
};

export default GameNav;