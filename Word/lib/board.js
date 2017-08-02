const LETTERS = ["E", "E", "E", "E", "E", "E", "E", "T", "T", "T", "T", "O", "O", "O", "O", "A", "A", "A", "A", "I", "I", "I", "I", "N", "N", "S", "S", "R", "R", "H", "H", "D", "L", "L", "U", "U", "C", "C","M",
"F", "Y", "W", "G", "P", "B", "V", "K", "X", "Q", "J", "Z"];

class Board {
  constructor(x) {
    this.board = this.makeBoard(x);
    this.handleClick();
    this.getLetter();
    this.word = "";
  }

  makeBoard(x) {
    for (let rows=0; rows < x; rows++) {
      for (let columns=0; columns < x; columns++){
        let square = LETTERS[Math.floor(Math.random() * LETTERS.length)];
        $(".board").append(`<div class='square'>${square}</div>`);
      }
    }
  }

  getLetter() {

  }

  handleClick() {
    let clicking = false;
    let word = "";
    $(".square").mousedown(function(){
       clicking = true;
      $(this).toggleClass('highlight');
      word += $(this).text();
      $("#potential").text(word);
      console.log(word);
      return false;
    });

    $(".square").mouseover(function(){
      if (clicking) {
        $(this).toggleClass("highlight");
        word += $(this).text();
        $("#potential").text(word);
      }
    });

    $(document).mouseup(function(){
      $(".square").removeClass("highlight");
      clicking = false;
      word = "";
      $("#potential").text(word);
    });
  }

}


module.exports = Board;
