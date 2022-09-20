import React, {useEffect, useState, useContext} from 'react';
import { MarkedContext } from '../context/MarkedContext';
import { MarkedArrContext } from '../context/MarkedArrContext';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';

const Square = ({prompt, id}) => {
  const [marked, setMarked] = useState()
  const { markedArr, setMarkedArr } = useContext(MarkedArrContext)

  useEffect(() => {
    setMarked(false)
  }, [])
  // const { marked, setMarked } = useContext(MarkedContext)

  // Set clicked square to 'marked' (applies marked styling) and push id of clicked square to array of squares marked this round
  const handleClick = (event) => {
    setMarked(event.target.id)
    markedArr.push(event.target.id)
    console.log(markedArr)
  }

  // Undo marking a square
  // compare id of clicked square to the others in array, if array already contains it, remove that from the array/don't add it   
  // console.log(markedArr[markedArr.length -1])
  // if (event.target.id === markedArr[markedArr.length-1]) 

  // console.log(marked)
  const BingoPrompt = styled(Card)(marked ? {
    height: '18vh',
    width: '18vw',
    color: 'red', 
    fontSize: '18px', 
    border: '2px solid black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
      } : {
    height: '18vh',
    width: '18vw',
    color: 'black',
    border: '2px solid black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    })

  return (
    <>
      <BingoPrompt
        onClick={handleClick}
        id={id}>
        {prompt}
      </BingoPrompt>
    </>
  );
};

export default Square;