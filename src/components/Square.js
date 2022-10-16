import React, {useEffect, useState, useContext} from 'react';
import { MarkedArrContext } from '../context/MarkedArrContext';
import { PrintModeContext } from '../context/PrintModeContext';
import { WinContext } from '../context/WinContext';
import '../styles/App.css'
import { styled } from '@mui/material/styles';
import winningCombos from '../data/winningCombos';


const Square = ( {prompt, id, squareid} ) => {
// CONTEXT STATE USED
const { markedArr, setMarkedArr } = useContext(MarkedArrContext)
const { print, setPrint } = useContext(PrintModeContext)
const { win, setWin } = useContext(WinContext)

// LOCAL STATE
  // marked state of individual Square component (not to be confused with markedArr!)
  const [marked, setMarked] = useState()

  useEffect(() => {
    setMarked(false)
  }, [win])
  // ^ Sets square as unmarked if win

const handleClick = (event) => {
  setMarked(event.target.id)
  if (!markedArr.includes(squareid)) {
    markedArr.push(squareid)
    markedArr.sort((a, b) => a - b)
  }
}
// ^ Sets clicked square to 'marked' (applies marked styling) and push id of clicked square to array of marked squares 

  function checkBingo () {
    winningCombos.forEach((array) => {
      let mergedArr = markedArr.concat(array)
      // For each array in winning combos, merge it with the marked array
      let sortedArr = mergedArr.sort(function(a, b){return a - b})
      // Sort that merged array in numerical order
      let duplicates = []
      for (let i = 0; i < sortedArr.length; i++) {
        // Iterate through the sorted array
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
  // ^ After 4 squares have been clicked (the 5 includes the already marked free square), runs checkbingo function each time a square is marked
    

  const BingoPrompt = styled('button')( marked ? {
    backgroundColor: '#87B5B2',
    color: '#000000',
      } : {
    backgroundColor: '#edebe7',
    transition: 'background-color .3s',
    color: '#55555',
    }, print ? {
      color: 'black',
      backgroundColor: 'white',
      border: '2px solid black', 
      fontSize: '1.15rem',
      padding: '1%',
      minWidth: '20%',
      minHeight: '20%',
      } : {  transition: 'background-color .9s',}
    )

  return (
    <> 
    { squareid === 12 ? (
      <BingoPrompt
        id={id}
        squareid={squareid}
        fixed
        className="bingoSquare marked free"
        style={{    
          backgroundColor: '#7aa3a1',
          color: 'white',
          fontSize: '1rem',
        }}>
          <h2 id={id} squareid={squareid}>
            FREE
          </h2> 
      </BingoPrompt>
    ) : (
      <BingoPrompt
        id={id}
        squareid={squareid}
        fixed
        onClick={handleClick}
        onTouchStart={handleClick}
        className="bingoSquare">
          <p id={id} squareid={squareid}>
            {prompt}
          </p> 
      </BingoPrompt>
    )}
    </>
  );
};

export default Square;