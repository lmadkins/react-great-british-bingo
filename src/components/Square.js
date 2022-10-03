import React, {useEffect, useState, useContext} from 'react';
import { MarkedArrContext } from '../context/MarkedArrContext';
import { WinContext } from '../context/WinContext';
import '../styles/App.css'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
// import checkmark from '../img/check-mark.png';
// import medal from '../img/medal.png'
import ribbon from '../img/ribbon.png'
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';

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
      // Always includes 12 (squareid of "free square")
      let duplicates = [12]
      mergedArr.sort()
      for (let i = 0; i < mergedArr.length; i++) {
        if (mergedArr[i] === mergedArr[i + 1]) {
          duplicates.push(mergedArr[i])
        }
        if (duplicates.length >= 5) {
          setWin(true)
        }
      }
    })
  }

  useEffect(() => {
    console.log(markedArr)
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

  const BingoPrompt = styled('button')(marked ? {
    transition: 'background-color .5s',
    backgroundColor: '#4a4a4a',
    color: 'white',
    width: '20%',
    padding: '6% 0',
    borderRadius: '0',
    border: '2px solid white',
    overflow: 'hidden',
    textAlign: 'center',
    boxSizing: 'border-box',
    cursor: 'pointer',
      } : {
    backgroundColor: '#f4f2ed',
    borderRadius: '0',
    transition: 'background-color .5s',
    width: '20%',
    padding: '6% 0',
    color: '#55555',
    fontSize: '12px', 
    border: '2px solid white',
    overflow: 'hidden',
    textAlign: 'center',
    boxSizing: 'border-box',
    cursor: 'pointer',
    })
 

  return (
    <> 
    { squareid === 12 ? (
        <BingoPrompt
        onClick={handleClick}
        id={id}
        squareid={squareid}
        fixed
        className="bingoSquare marked"
        style={{    
          backgroundColor: '#4a4a4a',
          color: 'white',
          fontSize: '12em',}}
          
        >
          <Typography
            id={id}
            squareid={squareid}>
              <p>FREE</p>
          </Typography> 
      </BingoPrompt>
      ) : (
        <BingoPrompt
        onClick={handleClick}
        id={id}
        squareid={squareid}
        fixed
        className="bingoSquare"
        >
          <Typography
            id={id}
            squareid={squareid}>
              {prompt}
          </Typography> 
      </BingoPrompt>
      )
    }
    </>
  );
};

export default Square;