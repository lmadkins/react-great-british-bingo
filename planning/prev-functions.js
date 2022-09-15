// let squareOptions = []  <- (array of prompts)

// function handleSquareClick (e) {
//   e.target.classList.toggle('marked')
//   checkBingo()
// }

// function checkBingo () {
//   const verifyCombo = (combo) => {
//       for (const i of combo) {
//           if (!cardSquares[i].classList.contains('marked')) {
//               return false
//           }
//       }
//       return true
//   }

//   const bingoWinningCombos = [
//       [0, 1, 2, 3, 4],
//       [5, 6, 7, 8, 9],
//       [10, 11, 12, 13, 15],
//       [15, 16, 17, 18, 19],
//       [20, 21, 22, 23, 24],
//       [0, 5, 10, 15, 20],
//       [1, 6, 11, 16, 21],
//       [2, 7, 12, 17, 22],
//       [3, 8, 13, 18, 23],
//       [4, 9, 14, 19, 24]
//   ]

//   const winners = bingoWinningCombos.filter(verifyCombo)

//   if (winners.length > 0) {
//       alert('Bingo! Would you like to play again?')
//   }
// }

// rendering new bingo card
// function renderNew () {
//   let randomOptions = squareOptions.sort(() => Math.random() - 0.5)

//   for (let i = 0; i < cardSquares.length; i++) {
//     if (!cardSquares[i].classList.contains('free')){
//       cardSquares[i].innerText = randomOptions[i]
//     }
//     cardSquares[i].classList.remove('marked')
//   }
// }