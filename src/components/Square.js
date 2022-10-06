import React, {useEffect, useState, useContext} from 'react';
import { MarkedArrContext } from '../context/MarkedArrContext';
import { WinContext } from '../context/WinContext';
import '../styles/App.css'
import { styled } from '@mui/material/styles';
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
      // Always includes 12 (squareid of "free square")
      let duplicates = []
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
    backgroundColor: '#87B5B2',
    color: '#000000',
      } : {
    backgroundColor: '#edebe7',
    transition: 'background-color .9s',
    color: '#55555',
    fontSize: '1.25rem', 
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
          backgroundColor: '#7aa3a1',
          color: 'white',
          fontSize: '1.5rem',
        }}
        >
          <Typography
            id={id}
            squareid={squareid}>
              <p>FREE</p>
          </Typography> 
        </BingoPrompt>
      ) : (
        <BingoPrompt
          
          id={id}
          squareid={squareid}
          fixed
          onClick={handleClick}
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