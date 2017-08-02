const Square = require("./square");
const Board = require("./board");
const Word = require("./word");
const Trie = require("./trie");

class Game {
  constructor() {
    jQuery.get('https://raw.githubusercontent.com/clarehsu390/Word-Frenzy/master/Word/assets/dictionary.txt', (data) => this.dictionary(data));
    this.dictionary = this.dictionary.bind(this);
    this.board = new Board(8);
    this.handleClick = this.handleClick.bind(this);
    this.trie = new Trie;
    this.score = 0;
    this.interval = null;
  }

  dictionary(data) {
    const words = data.split("\n");
    words.pop();
    words.forEach(word => {
     this.trie.add(word);
    });
  }

  handleClick() {
    let trie = this.trie;
    let score = this.score;
    console.log(this.dictionary);
    let word = "";
    let display = "";
    let clicking = false;
    let wordArr = [];
    $(".square").mousedown($.proxy(function(){
       clicking = true;
      $(this).toggleClass('highlight');
      word += $(this).text();
      display += $(this).text();
      $("#potential").text(display);
      return false;
    }));

    $(".square").mouseover(function(){
      if (clicking) {
        $(this).toggleClass("highlight");
        word += $(this).text();
        display += $(this).text();
        $("#potential").text(display);
      }
    });

    $(".square").mouseup(function(){
      $(".square").removeClass("highlight");
      wordArr.push(word);
      clicking = false;
      display = "";
      $("#potential").text(display);
      if (trie.contains(word)) {
        score += 5;
        $(".score").text(`Score: ${score}`);
      }
      word = "";
    });
  }

  startInterval() {
    this.interval = setInterval(this.timer, 1000);
  }

  timer() {
    this.interval -= 1;
    if (this.interval <= 0) {
      $(".timer").text(`Time's up!`);
    }
  }


}


module.exports = Game;
