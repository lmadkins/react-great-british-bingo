import React, {useEffect, useState, useContext} from 'react';
import { MarkedContext } from '../MarkedContext';

const Square = (props, id, text) => {
  // const [win, setWin]=(false)
  const { marked, setMarked } = useContext(MarkedContext)
  // const [restart, setRestart] = useState(false)
// console.log(marked)
// console.log(prompt.text)
// console.log(restart)

// useEffect(() => {
//   setMarked(false)
// }, [])

const handleCellClick = () => {
  console.log('Clicked!')
  setMarked(true)
}

  return (
    <>
    
    <td role='gridcell'
    // className='marked'
    className={
    marked ? 'marked' : 'unmarked'}
    id={props.id}
    onClick={handleCellClick}
    text={props.prompt}>
      {props.text}</td>
    
    </>
  );
};

export default Square;