## Word Frenzy

### Background

Word Frenzy is a spin of and interactive version of the traditional word search. Users will get points based off of length and difficulty of words.

Unlike traditional word search, users will be able to:
1) Select letters that are adjacent on a multidirectional mouse gesture.
2) Find words based on different rules to reach a goal.
3) Every time a word is selected, new letters will replace those selected.y

More features will be outlined in detail in the **Functionality & MVP** and **Bonus Features** sections.

### Functionality & MVP  

With Word Frenzy, users will be able to:

- [ ] Start, pause timer, and reset the letters grid (if no words are left)
- [ ] Select adjacent letters to form words checked against a dictionary.
- [ ] Have users select words which are at least three letters long.
- [ ] New letters will replace the words that were selected.
- [ ] As the word is being formed, the selected letters will be shown in sidebar.

In addition, this project will include:

- [ ] A demo to show how to play the game (valid moves)
- [ ] A production Readme

### Wireframes

This app will consist of a single screen with a randomly generated word grid, a timer, a demo modal to show valid moves, and links to my Github and LinkedIn. There will also be a pause button to pause the timer as well as a reset button to rearrange the grid. Users will be able to click on the squares and drag to form a word. Once the mouse is let go, the word will be submitted and points added accordingly. New letters will then represent the letters selected. On the left side, points will be accumulated based on word length. Bonus Features: There will also be an option to choose Themes.

![wireframes](wireframes)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and game logic,
- `Easel.js` with `HTML5 Canvas` for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be three scripts involved in this project:

`game.js`: where entire game view will be rendered

`board.js`: this script will handle the logic for creating and updating the necessary `Easel.js` elements and rendering them to the DOM. Squares must be adjacent to one another. Board will be populated in a random order, based on the frequency each letter appears in the English language. Board may decrease in size as the player passes more levels.

`square.js`: this script will handle the logic behind the scenes.  This will handle any interaction the user has with the board. The Square objects that are clicked on will be checked against a dictionary. Points will be added based on the length of the word. Use `jquery.event.drag`

`word.js`: this will handle how many points will be given for each word.

`dictionary.txt`: this will hold all valid words which submissions will be checked against.

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and `Easel.js` installed.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and build out the logic for the game to have a simple, playable view.

- Get a green bundle with `webpack`
- Render rectangular grid with letter squares.
- Be able to render mouse motions.
- Render a rectangular grid to the `Canvas` using `Easel.js`

**Day 2**: Dedicate this day to further build out any incomplete day logic from day 1. Add levels and increase difficulty of the board in further levels.

- Complete the `square.js` module
- Make each square in the grid clickable and rendering that letter
- Be able to check words against the dictionary
- Create different levels that will increase in difficulty

**Day 3**: Dedicate day to styling the board and squares and adding controls

- Create controls for pausing and reseting the board
- Add necessary animations to the board
- Remove selected letters from the board
- Be able to render new letters in place of selected letters
- Be able to stop the game when timer runs out


**Day 4**: Continue to polish and make the user interface look professional.  Goals for the day:

- Continue to design and add animations to the game
- Add the demo video/animation to show the rules of the game
- Add more levels if needed


### Bonus features

To expand on this word game, I would like to add the following features:

- [ ] Add themed levels (i.e. Find all words related to animals.)
- [ ] Design it as a studying/educational tool (i.e. Have definitions of vocabulary words)
- [ ] Have the option to select individual squares as well as click and drag
