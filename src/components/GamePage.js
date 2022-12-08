import React, { useState, useEffect} from 'react';
import { MarkedArrContext } from '../context/MarkedArrContext'; 
import { PrintModeContext } from '../context/PrintModeContext';
import { WinContext } from '../context/WinContext'; 
import jsonArr from '../data/promptList';
import Nav from './Nav';
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

  // PrintModeContext
  const [print, setPrint] = useState(false)

// LOCAL STATE
  const [newPrompts, setNewPrompts] = useState([])

  const [restartBoard, setRestartBoard] = useState(false)


  useEffect(() => {
    renderNewGame()
  }, [])
  // ^ renders new game on load

  useEffect(() => {
    renderNewGame()
    setRestartBoard(false)
  }, [restartBoard])
  // ^renders new game when shuffle button is pressed

  function shuffleSlicePrompts() {
    let shuffledArr = []
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
  }
  
  // function to pass to GameNav component to use for shuffle button
  const handleShuffleClick = () => { 
    setRestartBoard(true)
  }

  return (
    <WinContext.Provider value={{win, setWin}}>
    <MarkedArrContext.Provider value={{markedArr, setMarkedArr}}>
    <PrintModeContext.Provider value={{print, setPrint}}>

    { print ? (
      
      // (Print condition excludes Win Alert and nav buttons to print or shuffle)
      <div className='bingoCard'
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
    ) : (
    <>
      <WinAlert 
      renderNewGame={renderNewGame}/>
      <Nav 
      handleShuffleClick={handleShuffleClick} />
    
      <div className='bingoCard 
        animate__animated animate__fadeInUp'>
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
    </MarkedArrContext.Provider>
    </WinContext.Provider>
  );
};

export default GamePage;