import Button from '@mui/material/Button';
import { useContext, useEffect, useState } from 'react';
import { ChallengeModeContext } from '../context/ChallengeModeContext';
import { NormalModeContext } from '../context/NormalModeContext';
import { PrintModeContext } from '../context/PrintModeContext';
import PrintAlert from './PrintAlert';

const GameNav = ( {handleShuffleClick} ) => {

  const { challengeMode, setChallengeMode } = useContext(ChallengeModeContext)

  const { normalMode, setNormalMode } = useContext(NormalModeContext)

  const { print, setPrint } = useContext(PrintModeContext)
  
  // detect if screen res is 767px or higher (e.g. tablet or bigger)
  const [isDesktop, setDesktop] = useState(window.innerWidth > 767)

  const updateMedia = () => {
    setDesktop(window.innerWidth > 767)
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
  })

    const handlePrintClick = () => {
    setPrint(true)
    setTimeout(openPrint, 400)
    // ^ (timeout for conditional styling on components to re-render)
  }

  const openPrint = () => {
      if (isDesktop) {
        window.print()
      }
      setPrint(false)
  }

  const handleChangeToNormal = () => {
      setNormalMode(true)
      setChallengeMode(false)
      console.log('normal mode is on:' + normalMode)
  }

  const handleChangeToChallenge = () => {
      setChallengeMode(true)
      setNormalMode(false)
      console.log('challenge mode is on:' 
      + challengeMode)
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

    { normalMode &&
        <Button 
        aria-label="Print bingo card button"
        className="mode-btn"
        variant="contained"
        // color="teal" 
        onClick={handleChangeToChallenge}
        onTouchStart={handleChangeToChallenge}
        sx={{
          // backgroundColor: '#7aa3a1',
          marginRight: '15px'
        }}>
          Switch to Challenge Mode
        </Button>
    }
    { challengeMode &&
        <Button 
        aria-label="Print bingo card button"
        className="mode-btn"
        variant="contained"
        // color="teal" 
        onClick={handleChangeToNormal}
        onTouchStart={handleChangeToNormal}
        sx={{
          // backgroundColor: '#7aa3a1',
          marginRight: '15px'
        }}>
          Switch to Normal Mode
        </Button>
    }

  
    <Button 
      aria-label="Shuffle game button"
      className="shuffle-btn"
      color="red"
      variant="contained"
      onClick={handleShuffleClick}
      onTouchStart={handleShuffleClick}>
        Shuffle
    </Button>

    <PrintAlert />
  </nav>
  );
};

export default GameNav;