const LETTERS = ["E", "E", "E", "E", "E", "E", "E", "T", "T", "T", "T", "O", "O", "O", "O", "A", "A", "A", "A", "I", "I", "I", "I", "N", "N", "S", "S", "R", "R", "H", "H", "D", "L", "L", "U", "U", "C", "C","M",
"F", "Y", "W", "G", "P", "B", "V", "K", "X", "Q", "J", "Z"];

class Board {
  constructor(x) {
    this.board = this.makeBoard(x);
    this.word = "";
    this.replace();
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
    $(".square").mouseup(function() {
      $(this).text(`${LETTERS[Math.floor(Math.random() * LETTERS.length)]}`);
      $(".selected").addClass("animated fadeIn");
      $(".square").removeClass("selected");
    });

  }



}


module.exports = Board;
