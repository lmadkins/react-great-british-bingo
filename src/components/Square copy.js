import React, {useEffect, useState, useContext} from 'react';
// import { MarkedContext } from '../MarkedContext';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';

const Square = ({prompt, key,id, handleCellClick}) => {
  const [marked, setMarked] = useState()


  const handleClick = (event) => {
    
    console.log(event.target.id)
    setMarked(event.target.id)
  }

  // console.log(marked)
  const BingoPrompt = styled(Card)(marked ? {
    height: '15vh',
    width: '15vw',
    color: 'red', 
    fontSize: '20px', 
    border: '2px solid black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
      } : {
    height: '15vh',
    width: '15vw',
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