import React, {useEffect, useState, useContext} from 'react';
import { ChallengeModeContext } from '../context/ChallengeModeContext';
import { NormalModeContext } from '../context/NormalModeContext';
import { ModeContext } from '../context/ModeContext';
import { MarkedArrContext } from '../context/MarkedArrContext';
import { WinContext } from '../context/WinContext';
import '../styles/App.css'
import { styled } from '@mui/material/styles';
import challengeWinningCombos from '../data/challengeWinningCombos';
import normalWinningCombos from '../data/normalWinningCombos';


const Square = ( {prompt, id, squareid} ) => {
// CONTEXT STATE USED

const { challengeMode, setChallengeMode } = useContext(ChallengeModeContext)

const { normalMode, setNormalMode } = useContext(NormalModeContext)

const { mode, setMode } = useContext(ModeContext)

const { win, setWin } = useContext(WinContext)

const { markedArr, setMarkedArr } = useContext(MarkedArrContext)

// LOCAL STATE
  // marked state of individual Square component (not to be confused with markedArr!)
  const [marked, setMarked] = useState(false)

  const [undoMarked, setUndoMarked] = useState(false)

  const freeSquare = !challengeMode ? 4 : 12

  useEffect(() => {
    setMarked(false)
    setWin(false)
  }, [win])
    // ^ Sets square as unmarked if win

  useEffect(() => {
    setMarked(false)
  }, [undoMarked])
  // ^ Changes marked state if square clicked again


  function checkBingo () {
    if (challengeMode) {
      challengeWinningCombos.forEach((array) => {
        let mergedArr = markedArr.concat(array)
        // For each array in winning combos, merge it with the marked array
        let duplicates = []
        let sortedArr = mergedArr.sort(function(a, b){return a - b})
        // console.log(sortedArr)
        // Sort that merged array in numerical order
        for (let i = 0; i < sortedArr.length; i++) {
          // Iterate through the sorted array
          if (sortedArr[i] === sortedArr[i + 1]) {
            // If the element (i) is the same as the element after it (i + 1), there are two in a row, and it's a duplicate
            duplicates.push(sortedArr[i])
            // Add that element i to the array of duplicate elements
            // console.log(duplicates)
          }
          if (duplicates.length >= 5) {
            setWin(true)
          }
          // Each of the winning combos has 3/5 elements, so if there are 3/5 or more elements in the duplicates array, that means that the marked squares match one of the winning combo arrays, and the player has marked 3/5 in a row
        }
      })
    } else  {
      normalWinningCombos.forEach((array) => {
        let mergedArr = markedArr.concat(array)
        // For each array in winning combos, merge it with the marked array
        let duplicates = []
        let sortedArr = mergedArr.sort(function(a, b){return a - b})
        // console.log(sortedArr)
        // Sort that merged array in numerical order
        for (let i = 0; i < sortedArr.length; i++) {
          // Iterate through the sorted array
          if (sortedArr[i] === sortedArr[i + 1]) {
            // If the element (i) is the same as the element after it (i + 1), there are two in a row, and it's a duplicate
            duplicates.push(sortedArr[i])
            // Add that element i to the array of duplicate elements
            // console.log(duplicates)
          }
          if (duplicates.length >= 3) {
            setWin(true)
          }
          // Each of the winning combos has 3/5 elements, so if there are 3/5 or more elements in the duplicates array, that means that the marked squares match one of the winning combo arrays, and the player has marked 3/5 in a row
        }
      })
    }
  }

  useEffect(() => {
      checkBingo()
      if (markedArr.length >= 5 && challengeMode) {
        checkBingo()
      } else if (markedArr.length >=3 && !challengeMode) {
        checkBingo()
      }
  }, [markedArr.length])
  // ^ After 4/2 squares have been clicked (the 3/5 includes the already marked free square), runs checkbingo function each time a square is marked

  const handleClick = (event) => {
    let clickedSquare = event.target.id
    if (!marked) {
      setMarked(clickedSquare)
      // ^ Sets clicked square to 'marked', which applies 'marked' styling 
      if (!markedArr.includes(squareid)) {
        // check if markedArr doesn't already include this squareid
        markedArr.push(squareid)
        // pushed the id of the newly marked square to the array of marked squares
      }
    } else {
      if (markedArr.includes(squareid)) {
        setUndoMarked(clickedSquare)
        // sets useEffect to setMarked(false)
        let index = markedArr.findIndex(e => e === squareid)
        markedArr.splice(index, 1)
        // find index in markedArr and splice it
      }
    }
  }

  const BingoPrompt = styled('button')( marked ? {
    backgroundColor: '#9dbebc',
    color: '#000000',
      } : {
    backgroundColor: '#edebe7',
    color: '#55555',
    transition: 'all 0.30s ease-in-out',
    })

  return (
    <> 
    { !challengeMode ? 
      ( 
        squareid === 4 ? (
        // free square
        <BingoPrompt
          id={id}
          squareid={squareid}
          fixed
          className="bingoSquare marked"
          style={{    
            backgroundColor: '#7aa3a1',
            color: 'white',
          }}>
            <h2 id={id} squareid={squareid}>
              FREE
            </h2> 
        </BingoPrompt>
      ) : (
        // other squares
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
      )
      ) : (
      // Challenge Mode
        squareid === 12 ? (
          // free square
        <BingoPrompt
          id={id}
          squareid={squareid}
          fixed
          className="bingoSquare marked"
          style={{    
            backgroundColor: '#7aa3a1',
            color: 'white',
          }}>
            <h2 id={id} squareid={squareid}>
              FREE
            </h2> 
        </BingoPrompt>
        ) : (
          // other squares
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
        ) 
      )
    }
    </>
  );
};

export default Square;