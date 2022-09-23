import React, {useEffect, useState, useContext} from 'react';
import { MarkedArrContext } from '../context/MarkedArrContext';
// import { MarkedContext } from '../context/MarkedContext';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import winningCombos from '../data/winningCombos';

const Square = ({prompt, id, squareid}) => {
  const [marked, setMarked] = useState()
  const [win, setWin] = useState(false)

  const { markedArr, setMarkedArr } = useContext(MarkedArrContext)

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
    if (win) { 
      console.log('bingo')
    }
  }, [win])

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

  // Undo marking a square
  // compare id of clicked square to the others in array, if array already contains it, remove that from the array/don't add it   
  // console.log(markedArr[markedArr.length -1])
  // if (event.target.id === markedArr[markedArr.length-1]) 
  // or _.last (lodash )
  // https://lodash.com/docs/4.17.15#last

  const BingoPrompt = styled('span')(marked ? {
    height: '18vh',
    width: '18vw',
    color: 'red', 
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
    boxSizing: 'border-box'
    })

  return (
    <>
      <BingoPrompt
        onClick={handleClick}
        id={id}
        squareid={squareid}
        >
        {prompt}
      </BingoPrompt>
    </>
  );
};

export default Square;