import React, {useEffect, useState, useContext} from 'react';
import { MarkedArrContext } from '../context/MarkedArrContext';
import { WinContext } from '../context/WinContext';
import '../styles/App.css'
import { styled } from '@mui/material/styles';
import winningCombos from '../data/winningCombos';


const Square = ({prompt, id, squareid}) => {
  const [marked, setMarked] = useState()

  const { markedArr, setMarkedArr } = useContext(MarkedArrContext)

  const { win, setWin } = useContext(WinContext)

  useEffect(() => {
    setMarked(false)
    setWin(false)
  }, [setWin])

// Set clicked square to 'marked' (applies marked styling) and push id of clicked square to array of squares marked this round
const handleClick = (event) => {
  setMarked(event.target.id)
  if (!markedArr.includes(squareid)) {
    markedArr.push(squareid)
    markedArr.sort((a, b) => a - b)
  }
}

  function checkBingo () {
    winningCombos.forEach((array) => {
      let mergedArr = markedArr.concat(array)
      let duplicates = []
      let sortedArr = mergedArr.sort(function(a, b){return a - b});

      for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] === sortedArr[i + 1]) {
          duplicates.push(sortedArr[i])
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
    

  const BingoPrompt = styled('button')(marked ? {
    backgroundColor: '#87B5B2',
    color: '#000000',
      } : {
    backgroundColor: '#edebe7',
    transition: 'background-color .3s',
    color: '#55555',
    })


  return (
    <> 
    { squareid === 12 ? (
        <BingoPrompt
        onClick={handleClick}
        id={id}
        squareid={squareid}
        fixed
        className="bingoSquare marked free"
        style={{    
          backgroundColor: '#7aa3a1',
          color: 'white',
          fontSize: '1rem',
        }}>
          <h2
            id={id}
            squareid={squareid}>
              FREE
          </h2> 
        </BingoPrompt>
      ) : (
        <BingoPrompt
          
          id={id}
          squareid={squareid}
          fixed
          onClick={handleClick}
          className="bingoSquare"
          >
          <p
            id={id}
            squareid={squareid}>
              {prompt}
          </p> 
        </BingoPrompt>
      )
    }
    </>
  );
};

export default Square;