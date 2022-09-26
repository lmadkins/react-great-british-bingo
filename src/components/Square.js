import React, {useEffect, useState, useContext} from 'react';
import { MarkedArrContext } from '../context/MarkedArrContext';
import { WinContext } from '../context/WinContext';
import { styled } from '@mui/material/styles';
import starCircle from '../img/star-circle-blue.png';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import winningCombos from '../data/winningCombos';


const Square = ({prompt, id, squareid}) => {
  const [marked, setMarked] = useState()

  const { markedArr, setMarkedArr } = useContext(MarkedArrContext)

  const { win, setWin } = useContext(WinContext)

  useEffect(() => {
    setMarked(false)
    setWin(false)
  }, [prompt])

  function checkBingo () {
    winningCombos.forEach((array) => {
    let mergedArr = markedArr.concat(array)
    let duplicates = [];
    mergedArr.sort();
      for (let i = 0; i < mergedArr.length; i++) {
        if (mergedArr[i] === mergedArr[i + 1]) {
          duplicates.push(mergedArr[i]);
        }
        if (duplicates.length >= 5) {
          setWin(true)
        }
      }
    })
  }

  useEffect(() => {
    if (markedArr.length >= 5) {
      checkBingo()
    }
  }, [markedArr.length])
    

  // Set clicked square to 'marked' (applies marked styling) and push id of clicked square to array of squares marked this round
  const handleClick = (event) => {
      setMarked(event.target.id)
      if (!markedArr.includes(squareid)) {
        markedArr.push(squareid)
        markedArr.sort((a, b) => a - b)
      }
  }

  const BingoPrompt = styled('div')(marked ? {
    height: '18vh',
    width: '18vw',
    fontSize: '20px', 
    padding: '3vh',
    paddingTop: '5vh',
    border: '2px solid black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSizing: 'border-box',
      } : {
    height: '18vh',
    width: '18vw',
    padding: '3vh',
    paddingTop: '5vh',
    color: 'black',
    fontSize: '20px', 
    border: '2px solid black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSizing: 'border-box',
    })

  return (
    <>
      <BingoPrompt
        onClick={handleClick}
        id={id}
        squareid={squareid}
        >
        {marked ? (
          <Slide in={marked} mountOnEnter unmountOnExit 
          style={{ transformOrigin: '0 0 0' }}
          {...(marked ? { timeout: 105 } : {})}>
          
          <div style={{ backgroundImage:`url(${starCircle})`,
          backgroundRepeat:"no-repeat",backgroundSize:"contain", 
          position: 'absolute',
          height: '12%', width: '12%' ,     
          opacity: .70,
          zIndex: '1',
          }} ></div>
          </Slide>) 
          : (<></>)
          }  <Typography variant="body1">{prompt}</Typography>
        
      </BingoPrompt>
    </>
  );
};

export default Square;