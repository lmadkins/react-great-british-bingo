import React, {useEffect, useState, useContext} from 'react';
import { MarkedArrContext } from '../context/MarkedArrContext';
import { WinContext } from '../context/WinContext';
import { styled } from '@mui/material/styles';
import checkmark from '../img/check-mark.png';
import medal from '../img/medal.png'
import ribbon from '../img/ribbon.png'
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
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

  return (
    <>
    <Paper
    elevation={1}
    square={true}
    >
      <div
        onClick={handleClick}
        id={id}
        squareid={squareid}
        fixed
        className="bingoSquare"
        // xs="auto"
        >
        {marked ? (
          <Slide 
          in={marked} 
          mountOnEnter unmountOnExit 
          style={{ transformOrigin: '0 0 0' }}
          {...(marked ? { timeout: 105 } : {})}>
          
          <Container style={{ 
            backgroundImage: `url(${ ribbon})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain", 
            // backgroundImage: `url(${ ribbon})`,
            position: 'absolute',
            height: '13%', width: '13%' ,   
            opacity: .70,
            zIndex: '1',
          }} ></Container>
          </Slide>) 
          : (<></>)
          }  
          <Typography>
            {prompt}
          </Typography>
        
      </div>
      </Paper>
    </>
  );
};

export default Square;