import React, { useContext } from 'react';
import { PrintModeContext } from '../context/PrintModeContext';
import '../styles/App.css'
import { styled } from '@mui/material/styles';


const PrintModeSquare = ({prompt, id, squareid}) => {
// CONTEXT STATE USED

const { print, setPrint } = useContext(PrintModeContext)

  const BingoPrompt = styled('button')( print ? {
    color: 'black',
    backgroundColor: 'white',
    border: '2px solid black', 
    fontSize: '1.15rem',
    padding: '1%',
    minWidth: '20%',
    minHeight: '20%',
      } : {  
      transition: 'background-color .4s',
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
          fontSize: '1.5rem',
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
        className="bingoSquare">
          <p id={id} squareid={squareid}>
            {prompt}
          </p> 
      </BingoPrompt>
    )}
    </>
  );
};

export default PrintModeSquare;