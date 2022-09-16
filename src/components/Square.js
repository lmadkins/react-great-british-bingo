import React, {useState} from 'react';

const Square = (props, text, ) => {
  // const [win, setWin]=(false)
  // const [marked,setMarked]=(false)
// console.log(props)
// console.log(prompt.text)

// const handleCellClick = (event, props) => {
//   console.log('Clicked!')
// }

  return (
    <>
    <td role='gridcell'
    // onClick={handleCellClick}
    text={props.prompt}>
      {props.text}</td>
    </>
  );
};

export default Square;