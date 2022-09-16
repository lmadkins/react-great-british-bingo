import React, {useState} from 'react';

const Square = (props, text, ) => {
  // const [win, setWin]=(false)
  const [marked, setMarked]= useState(false)
// console.log(props)
// console.log(prompt.text)


const handleCellClick = (event, props) => {
  // console.log('Clicked!')
  setMarked(true)
}

  return (
    <>
    <td role='gridcell'
    className={marked? 'marked' :'unmarked'}

    onClick={handleCellClick}
    text={props.prompt}>
      {props.text}</td>
    </>
  );
};

export default Square;