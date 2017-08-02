const Square = require("./square");
const Board = require("./board");
const Word = require("./word");
// const Dictionary = require("../assets/dictionary.txt");

document.addEventListener("DOMContentLoaded", () => {
 new Board(8);
 new Word();
});
