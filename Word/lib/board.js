const LETTERS = ["E", "E", "E", "E", "E", "E", "E", "T", "T", "T", "T", "O", "O", "O", "O", "A", "A", "A", "A", "I", "I", "I", "I", "N", "N", "S", "S", "R", "R", "H", "H", "D", "L", "L", "U", "U", "C", "C","M",
"F", "Y", "W", "G", "P", "B", "V", "K", "X", "Q", "J", "Z"];

class Board {
  constructor(x) {
    this.board = this.makeBoard(x);
    this.word = "";
    this.replace = this.replace.bind(this);
  }

  makeBoard(x) {
    for (let rows=0; rows < x; rows++) {
      for (let columns=0; columns < x; columns++){
        let letter = LETTERS[Math.floor(Math.random() * LETTERS.length)];
        $(".board").append(`<div class='square' value=${letter}>${letter}</div>`);
      }
    }
  }

  replace() {

      const $selected = $(".selected");
      $selected.each(function(index) {
        const letter = LETTERS[Math.floor(Math.random() * LETTERS.length)];
        let newLetter = $($selected[index]);
        newLetter.text(letter);
      });
      $(".selected").addClass("animated fadeInUpBig");
      $(".square").removeClass("selected");

  }



}


module.exports = Board;
