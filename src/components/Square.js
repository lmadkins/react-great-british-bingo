import React, {useEffect, useState, useContext} from 'react';
import { MarkedContext } from '../context/MarkedContext';
import { MarkedArrContext } from '../context/MarkedArrContext';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import winningCombos from '../data/winningCombos';

const Square = ({prompt, id, squareid, checkBingo}) => {
  // const initialMarkedState = false
  const [marked, setMarked] = useState()

  const { markedArr, setMarkedArr } = useContext(MarkedArrContext)

  useEffect(() => {
    setMarked(false)
  }, [prompt])


  useEffect(() => {
    // console.log(winningCombos)
    // console.log(markedArr)
    checkBingo()
    // console.log(markedArr.toString())
    // console.log(winningCombos[0].toString())
  }, [marked])

  const combo1 = winningCombos[0]
// console.log(combo1)

  function checkBingo () {
// 
    const sortAsc = markedArr.sort((a, b) => a - b)
    // const arrRow = sortAsc.slice(0, 5)
    // console.log(arrRow)

    // let isEqual = arrRow.length === combo1.length &&
    // sortAsc.every((value, index) => value === combo1[index])
    // console.log(isEqual)
  
    // console.log(sortAsc)

  // const compareArrays = (arr1, arr2) => {
  //   arr1.length > 5 &&
  //   arr1.every((element, index) => element === arr2[index])
  // }
  //   console.log(compareArrays(markedArr, combo1))
  //   console.log(markedArr)
  
  }

  // Set clicked square to 'marked' (applies marked styling) and push id of clicked square to array of squares marked this round
  const handleClick = (event) => {
      setMarked(event.target.id)
      
      if (!markedArr.includes(squareid)) {
        markedArr.push(squareid)
        console.log(markedArr)
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