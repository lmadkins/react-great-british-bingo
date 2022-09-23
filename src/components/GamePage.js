import React, { useState, useEffect, useContext} from 'react';
import { MarkedArrContext } from '../context/MarkedArrContext'; 
import { MarkedContext } from '../context/MarkedContext'; 
import jsonArr from '../data/promptList';
import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
import Square from './Square';

const GamePage = () => {
  const [game, setGame] = useState(false)
  const [newPrompts, setNewPrompts] = useState([])
  const [marked, setMarked] = useState()
  const [markedArr, setMarkedArr] = useState([])

  
  useEffect(() => {
    renderNewGame()
  }, [])

  let shuffledArr = []

  function shuffleSlicePrompts() {
    shuffledArr = jsonArr.sort(() => Math.random() - 0.5)
    let slicedPrompts = shuffledArr.slice(0, 25)
    setNewPrompts(slicedPrompts)
    // return newPrompts
  }

  function renderNewGame() {
    shuffleSlicePrompts()
    setMarkedArr([])
  }
  
  const handleStartClick = () => {
    renderNewGame()
  }

  return (
    <>
    <MarkedArrContext.Provider
      value={{markedArr, setMarkedArr}}>
  <MarkedContext.Provider
      value={{marked, setMarked}}>
    
    <button
    onClick={handleStartClick}>Restart</button>
  
    <Grid container 
    justify="center" 
    alignItems="center" 
    alignContent="center"
    spacing={0}>
      {newPrompts.map((v, k) => {
        return (
          <Square 
            key={`${k}`} 
            squareid={k} 
            prompt={v.prompt} 
            id={v.id}
        />)
      })}     
    </Grid>    
  </MarkedContext.Provider> 
  </MarkedArrContext.Provider>
    </>
  );
};

export default GamePage;