Printing
in mobile, tablet
detect resolution of screen

if 
laptop/desktop, print dialog opens for sure

< 1280
if less than that have a dialog that says
If you have a keyboard on your device: type ctrl+p to open print dialog
If not, you can find a 'Print' option in the menu of most web browser apps.



UNDO
if removing last move, pop from end of markedArr array

if click again to unmark, 
check if marked, remove from markedarr array, set marked to false


DIFFERENT SIZE MODES
button in nav to switch between normal mode and challenge mode 

challenge mode context, 
declare in gamepage component, initially false
export to components within gamepage
update imports

conditional rendering for state 

Normal 3x3 Mode
  gamepage component:
    initial markedarr state [4]
    slice 0-9
    
  square component:
  duplicates length >=3
    check bingo after markedArr length is >=3
    free sq is 4

Challenge 5x5 Mode:
  gamepage component:
    initial markedarr state [12]
    slice 0-25
  square component:
    check bingo after markedArr length is >=5
     duplicates length >=5
    free sq is 12




Print mode:
print mode square
print context

game page has print context, gets true from nav, game page condit renders printmode square component

printmodesquare has its specific styles



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


markedArr starts off with squareid of 12 in it because 12 is already marked

Each square that is clicked on gets its squareid (0-24) added

Once 4 squares have been clicked it is possible to have a bingo (4 because free square is included), and markedArr will be length of 5 or greater

So as soon as markedArr is longer than 5 or more, check for winning combination each time markedArr changes 

Want to be comparing markedArr to see if some of the values in markedArr are all in one of the winningCombos arrays 
Marked Arr can have elements that are not in one of the winningCombos, but the combo array has to contain at least 5 of the same


Or, 
For each array in winning combos, merge winningArr with it and find if there are 5 duplicates, it's bingo 
    // Merge the arrays of winning combos with the array of marked squares, one at a time, and each time, check for duplicates from that merged array. If there are 5 duplicates, it's a bingo 
    winningCombos.forEach((array) => {
      mergedArr = markedArr.concat(array)

Printing
Button in nav click to print
Needs to print version currently shown
same data/prompts
Different stylings:
- nav gone
- landscape default? 
- no headers and footers
- bingo square border black and font size bigger 
window.print()
and make buttons display none in styles
When closed, turn off print mode, show nav/buttons

conditionally render print mode?
if print mode, 
