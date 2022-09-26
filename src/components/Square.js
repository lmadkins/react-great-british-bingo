import React, {useEffect, useState, useContext} from 'react';
import { MarkedArrContext } from '../context/MarkedArrContext';
import { WinContext } from '../context/WinContext';
// import { MarkedContext } from '../context/MarkedContext';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
import WinAlert from './WinAlert';

// import StarsIcon from '@mui/icons-material/Stars';
import { styled } from '@mui/material/styles';
import starCircle from '../img/star-circle-blue.png';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import winningCombos from '../data/winningCombos';


const Square = ({prompt, id, squareid}) => {
  const [marked, setMarked] = useState()
  // const [win, setWin] = useState(false)

  const { markedArr, setMarkedArr } = useContext(MarkedArrContext)

  const { win, setWin } = useContext(WinContext)

  useEffect(() => {
    setMarked(false)
    setWin(false)
  }, [prompt])

  function checkBingo () {
    winningCombos.forEach((array) => {
    let mergedArr = markedArr.concat(array)
    let duplicates = [];
    mergedArr.sort();
      for (let i = 0; i < mergedArr.length; i++) {
        if (mergedArr[i] === mergedArr[i + 1]) {
          duplicates.push(mergedArr[i]);
        }
        if (duplicates.length >= 5) {
          setWin(true)
        }
      }
    })
  }


  useEffect(() => {
    if (win) { 
      console.log('bingo')
    }
  }, [win])

  useEffect(() => {
    if (markedArr.length >= 5) {
      checkBingo()
    }
  }, [markedArr.length])
    

  // Set clicked square to 'marked' (applies marked styling) and push id of clicked square to array of squares marked this round
  const handleClick = (event) => {
      setMarked(event.target.id)
      if (!markedArr.includes(squareid)) {
        markedArr.push(squareid)
        markedArr.sort((a, b) => a - b)
      }
  }

  // Undo marking a square
  // compare id of clicked square to the others in array, if array already contains it, remove that from the array/don't add it   
  // console.log(markedArr[markedArr.length -1])
  // if (event.target.id === markedArr[markedArr.length-1]) 
  // or _.last (lodash )
  // https://lodash.com/docs/4.17.15#last

  const BingoPrompt = styled('div')(marked ? {
    height: '18vh',
    width: '18vw',
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
    boxSizing: 'border-box',
    // backgroundImage: ('/src/img/star-blue.png'),
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center',
    // opacity: '100%',
    // zIndex: '1',
    })

  return (
    <>
      <BingoPrompt
        onClick={handleClick}
        id={id}
        squareid={squareid}
        >
        {marked ? (<Slide in={marked} mountOnEnter unmountOnExit 
        style={{ transformOrigin: '0 0 0' }}
        {...(marked ? { timeout: 105 } : {})}>
          
        <div style={{ backgroundImage:`url(${starCircle})`,
        backgroundRepeat:"no-repeat",backgroundSize:"contain", 
        position: 'absolute',
        height: '12%', width: '12%' ,     
        opacity: .70,
        zIndex: '1',
      }} ></div></Slide>) : (<></>)
        }  <Typography variant="body1">{prompt}</Typography>
        
      </BingoPrompt>
    </>
  );
};

export default Square;