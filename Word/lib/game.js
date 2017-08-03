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
    this.startInterval = this.startInterval.bind(this);
    this.score = 0;
    this.interval = null;
    this.trie = new Trie();
    this.time = 100;
    this.timer = this.timer.bind(this);
    this.newGame = this.newGame.bind(this);
    this.startButton();
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
    console.log(this.trie);
    let word = "";
    let display = "";
    let clicking = false;
    let wordArr = [];
    $(".square").mousedown($.proxy(function(){
       clicking = true;
      $(this).toggleClass('highlight');
      $(this).toggleClass("selected");
      word += $(this).text();
      display += $(this).text();
      $("#potential").text(display);
      return false;
    }));

    $(".square").mouseover(function(){
      if (clicking) {
        $(this).toggleClass("highlight");
        $(this).toggleClass("selected");
        word += $(this).text();
        display += $(this).text();
        $("#potential").text(display);
      }
    });

    $(".square").mouseup(function(){
      $(".square").removeClass("highlight");
      clicking = false;
      display = "";
      $("#potential").text(display);
      if (trie.contains(word.toLowerCase()) && word.length >= 3
      && !wordArr.includes(word)) {
        wordArr.push(word);
        score += 5;
        $(".score").text(`${score}`);
        $("#feedback").text('Great!');
        $(".submitted").append(`<li>${word}</li>`);
      }

      if (word.length > 3 &&
        trie.contains(word.toLowerCase())
      && !wordArr.includes(word)) {
        wordArr.push(word);
        score += (word.length - 3);
        $(".score").text(`${score}`);
        $("#feedback").text('What a superstar!');
        $(".submitted").append(`<li>${word}</li>`);
      }
      if (!trie.contains(word.toLowerCase()) || word.length <= 2) {
        $("#feedback").text("Try Again!");
      }
      word = "";
    });
  }



  startInterval() {
    this.interval = setInterval(this.timer, 1000);
  }

  timer() {
    this.time -= 1;
    if (this.time <= 0) {
      $(".timer").text(`Time's up!`);
    }
    else {
      $(".timer").text(`${this.time}`);
    }
  }

  newGame() {
    $(".start").remove();
    this.startInterval();
    $("body").removeClass("gray");
  }

  startButton() {
    $(".game").append("<button class=start>START</button>");
    $(".start").on("click", this.newGame);

  }


}


module.exports = Game;
