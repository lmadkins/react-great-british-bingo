import React, { useState, useEffect} from 'react';
import { MarkedArrContext } from '../context/MarkedArrContext'; 
import { PrintModeContext } from '../context/PrintModeContext';
import { RestartContext } from '../context/RestartContext';
import { WinContext } from '../context/WinContext'; 
import jsonArr from '../data/promptList';
import GameNav from './GameNav';
import Square from './Square';
import PrintModeSquare from './PrintModeSquare';
import WinAlert from "./WinAlert";

const GamePage = () => {
// STATE TO PASS AS CONTEXT
  // MarkedArrContext
  const initialMarkedArrState = [12]

  const [markedArr, setMarkedArr] = useState(initialMarkedArrState)

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
    setMarkedArr(initialMarkedArrState)
    shuffleSlicePrompts()
    setRestartBoard(false)
  }
  
  // function to pass to GameNav component to use for shuffle button
  const handleShuffleClick = () => { 
    renderNewGame() 
  }

  return (
    <WinContext.Provider value={{win, setWin}}>
    <MarkedArrContext.Provider value={{markedArr, setMarkedArr}}>
    <RestartContext.Provider value={{restartBoard, setRestartBoard}}>
    <PrintModeContext.Provider value={{print, setPrint}}>

    { print ? (
      <>
      <div className='bingoCard '

        // animate__animated animate__fadeInUp
        
        style={{
          height: print ? '95vh' : '',
          boxShadow: print ? '' : 'rgba(0, 0, 0, 0.3) 0px 17px 30px'
        }}>
          {newPrompts.map((v, k) => {
            return (
            <PrintModeSquare 
              key={`${k}`} 
              squareid={k} 
              prompt={v.prompt} 
              id={v.id}/>
          )})}    
      </div>
      </>
    ) : (
      <>
      <WinAlert />

      <GameNav 
      handleShuffleClick={handleShuffleClick} />
    
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
    </>
    )}

    </PrintModeContext.Provider>
    </RestartContext.Provider>
    </MarkedArrContext.Provider>
    </WinContext.Provider>
  );
};

export default GamePage;