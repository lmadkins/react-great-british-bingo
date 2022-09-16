// 
// new game: 
// handle click/useeffect? state?
  // import square options from json to an array
  // function to shuffle array those square options
  // extract first 25 from that new shuffled array
  // render/map grid squares w/ those prompts (0-24)
    // exclude middle 'free' square (square 13)
    

react router?
see bitcoin example thing

see react review lesson, can follow along to refactor

App.js
array of options (start with 8)

Squares component- function, pass in props, 
{arrayName.map(nameIWanttoCallIt => (<button
      className='square'
      // src={props.arrayName}
      src={nameIWanttoCallIt}
      />))}
then in App.js
   <Squares arrayName={arrayName}/>

function renderNew 
initial state uses render new function as parameter?
// rendering new bingo card
function renderNew () {
  let randomOptions = squareOptions.sort(() => Math.random() - 0.5)

  for (let i = 0; i < cardSquares.length; i++) {
    if (!cardSquares[i].classList.contains('free')){
      cardSquares[i].innerText = randomOptions[i]
    }
    cardSquares[i].classList.remove('marked')
  }
}

Component of card structure (buttons)


/// APP.JS

return ( 
    <>
      <header>
        <h1 className="name">Welcome to GBBO</h1>
      </header>
      <main>
      {initialState.map((element, index) => {
          return <Card initialState=
          <!-- {element} key={index}  -->
          />
      })}
      </main>
    </>
  );
  component for restart/newcard button
  re-render board/call same function


see searchresults js file for giphy
  cardOptions
  const Card = ({cardOptions}) => {
    return 
  }
  <Component cardOptions={cardOptions}>

    <div className="bingoCard">
      {squareOptions.map(item => (
         <div key={squareOptions.id} className="square">
         {squareOptions.text}
         />
       </div>
      ))}
    </div>