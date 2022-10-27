MVP:
Mobile and tablet first!

Pages:
- Landing page: header, game intro/welcome message, instructions, button to start
- Game board to play the game

Data:
- Square options/prompts list
- Winning combos? 
Elements/components:
- button to restart game (out of reach of accidental press)
- header with name of game
- message to display if win
- bingo card- 3x3 grid? or 5x5, free in center

CSS/animations/transitions etc.:
- interactivty when clicked
-  if selected/marked off maybe fade background or some other css effect slightly to indicate not an option?
- crossed off but visible


Gameplay functionality:
- erase current game and load new game on render: 
  - the center 'free' square is automatically marked 
  - shuffled each time restart
  - each slot can only appear once per game
- keep state of the card even if page refreshed etc.
- each square marked can't be unmarked(?)
- checking for if get five squares in a row marked off, horizontally or vertically, it's a win
- display message when win, offer to play again


Stretch
- different UI for desktop view
- styling/fonts on theme of show
