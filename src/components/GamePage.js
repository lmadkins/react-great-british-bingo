import React, { useState, useEffect} from 'react';
import { MarkedArrContext } from '../context/MarkedArrContext'; 
import { PrintModeContext } from '../context/PrintModeContext';
import { RestartContext } from '../context/RestartContext';
import { WinContext } from '../context/WinContext'; 
import jsonArr from '../data/promptList';
import GameNav from './GameNav';
import Square from './Square';
import WinAlert from "./WinAlert";

const GamePage = () => {
// STATE TO PASS AS CONTEXT
  // MarkedArrContext
  const [markedArr, setMarkedArr] = useState([])
  // WinContext
  const [win, setWin] = useState(false)
  // RestartContext
  const [restartBoard, setRestartBoard] = useState(false)
  // PrintModeContext
  const [print, setPrint] = useState(false)

// LOCAL STATE
  const [newPrompts, setNewPrompts] = useState([])

  useEffect(() => {
    renderNewGame()
    console.log('in useEffect on load')
  }, [])

  // Uses RestartContext when play again is selected in WinAlert
  useEffect(() => {
    renderNewGame()
  }, [restartBoard])


  let shuffledArr = []

  function shuffleSlicePrompts() {
    shuffledArr = jsonArr.sort(() => Math.random() - 0.5)
    let slicedPrompts = shuffledArr.slice(0, 25)
    setNewPrompts(slicedPrompts)
    // ^ newPrompts then gets mapped into Squares
  }

  function renderNewGame() {
    setPrint(false)
    setWin(false)
    setMarkedArr([12])
    shuffleSlicePrompts()
  }
  
  // function to pass to GameNav component to use for shuffle button
  const handleShuffleClick = () => { 
    renderNewGame() 
  }

  return (
    <>
    
    <MarkedArrContext.Provider value={{markedArr, setMarkedArr}}>
    <PrintModeContext.Provider value={{print, setPrint}}>
    <RestartContext.Provider value={{restartBoard, setRestartBoard}}>
    <WinContext.Provider value={{win, setWin}}>

      <WinAlert />

      {!print &&
        <GameNav 
        handleShuffleClick={handleShuffleClick} />}
      
      <div className='bingoCard 
        animate__animated animate__fadeInUp'
        style={{
          height: print ? '95vh' : '',
          boxShadow: print ? '' : 'rgba(0, 0, 0, 0.3) 0px 17px 30px'
        }}>
          {newPrompts.map((v, k) => {
            return (
            <Square 
              key={`${k}`} 
              squareid={k} 
              prompt={v.prompt} 
              id={v.id}/>
          )})}    
      </div>
    </WinContext.Provider>
    </RestartContext.Provider>
    </PrintModeContext.Provider>
    </MarkedArrContext.Provider>
    
  </>
  );
};

export default GamePage;