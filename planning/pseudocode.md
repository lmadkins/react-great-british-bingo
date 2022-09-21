Rendering New Board:
Import & set state:
- set state for new prompts this game will use (empty initially)
- Prompts are imported from file
- Set variable for shuffled prompts

Shuffle and slice to pick new prompts for the squares, set state:
- shuffle prompt state w/ sort and math.random
- set variable of the slice 0, 25, set new prompts state to the sliced prompts array

On click event of start/restart button:
- Set state of marked squares to empty to restart
- Set marked state of all squares to false
- Handle above render new actions


Clicking on and marking squares:
- Set marked state, initially
- Handle click function, to toggle state to 'marked' state
- Push id of clicked square to array of squares marked this round
- Once past 5 clicks (or markedArr length of 5?), run trigger checkwin with each click (/useeffect?)


Check Win: 
Need to compare markedArr (the key ids of each of the squares) with the contents of each of the arrays
- After 5 squares have been clicked (because it can't be a bingo if there's less than 5)/markedArr length is 5 or higher, run it each time another square is clicked.

Then concatenate/merge markedArr with winningCombos, and if there are duplicates, it's bingo?
for each array in winningCombos, concatenate them, get IDs of any duplicates. If have 5 duplicates it's bingo?



- (Sort marked array, to make sure it's in numerical order?)
- For the ones in numerical order (horizontal), could convert both to strings? then see if contains '0, 1, 2, 3, 4, 5'
- For vertical  ones, needs to be contains but allow for other values in between, so maybe don't convert to array?
- Run function verifying if square id combos are all marked
-Check combos with that function





Stretch Features :
Undo when toggling marked?
- (only set it to mark if it is unmarked? 
- or maybe undo as a stretch? see comments in Square component )

Free square
Exclude middle 'free' square?(square 13)