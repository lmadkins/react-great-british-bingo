import React, {useEffect, useState, useContext} from 'react';
import { MarkedArrContext } from '../context/MarkedArrContext';
import { WinContext } from '../context/WinContext';
import '../styles/App.css'
import { styled } from '@mui/material/styles';
import winningCombos from '../data/winningCombos';


const Square = ( {prompt, id, squareid} ) => {
// CONTEXT STATE USED

const { win, setWin } = useContext(WinContext)

const { markedArr, setMarkedArr } = useContext(MarkedArrContext)

// LOCAL STATE
  // marked state of individual Square component (not to be confused with markedArr!)
  const [marked, setMarked] = useState(false)

  useEffect(() => {
    setMarked(false)
    setWin(false)
  }, [win])

  // ^ Sets square as unmarked if win


  function checkBingo () {
      winningCombos.forEach((array) => {
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
            // console.log(`5 duplicates: ${duplicates}`)
            setWin(true)
            // Each of the winning combos has 5 elements, so if there are 5 or more elements in the duplicates array, that means that the marked squares match one of the winning combo arrays, and the player has marked 5 in a row
          }
        }
      })
      // ^ end of forEach loop of winning combos
  }

  useEffect(() => {
      checkBingo()
      if (markedArr.length >= 5) {
        checkBingo()
      } 
  }, [markedArr.length])
  // ^ After 4 squares have been clicked (the 5 includes the already marked free square), runs checkbingo function each time a square is marked

  const handleClick = (event) => {
    // !marked &&
      setMarked(event.target.id)
      // ^ Sets clicked square to 'marked', which applies 'marked' styling 
      if (!markedArr.includes(squareid)) {
        // check if markedArr doesn't already include this squareid
        markedArr.push(squareid)
        // pushed the id of the newly marked square to the array of marked squares
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
    { squareid === 12 ? (
      // If this square being mapped is the 12th, it is the FREE square, and gets different styling, and default text rather than a prompt, and doesn't offer functionality to click it and mark it (because its ID is already added to the marked array at intiialization)
      <BingoPrompt
        id={id}
        squareid={squareid}
        fixed
        className="bingoSquare"
        style={{    
          backgroundColor: '#7aa3a1',
          color: 'white',
        }}>
          <h2 id={id} squareid={squareid}>
            FREE
          </h2> 
      </BingoPrompt>
    ) : (
      // If this square being mapped is NOT the 12th, it is a normal square that gets a prompt filled in
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