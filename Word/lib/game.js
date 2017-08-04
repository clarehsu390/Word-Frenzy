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
    this.time = 5;
    this.timer = this.timer.bind(this);
    this.newGame = this.newGame.bind(this);
    this.reset = this.reset.bind(this);
    this.startButton();
    this.resetButton();
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
    console.log(trie);
    let score = this.score;
    let word = "";
    let display = "";
    let clicking = false;
    let wordArr = [];
    let board = this.board;
    $(".square").mousedown(function(){
       clicking = true;
      $(this).toggleClass('highlight');
      $(this).toggleClass("selected");
      word += $(this).text();
      display += $(this).text();
      $("#potential").text(display);
      return false;
    });

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
        $("#feedback").append('<li>Great!</li>');
        $(".submitted").append(`<li>${word}</li>`);
        console.log(word);
        board.replace();
      }

      if (word.length > 3 &&
        trie.contains(word.toLowerCase())
      && !wordArr.includes(word)) {
        wordArr.push(word);
        score += (word.length - 3);
        $(".score").text(`${score}`);
        $("#feedback").append('<li>What a superstar!</li>');
        $(".submitted").append(`<li>${word}</li>`);
        board.replace();
      }
      if (!trie.contains(word.toLowerCase()) || word.length <= 2) {
        $("#feedback").append("<li>Try Again!</li>");
        $(".square").removeClass("selected");
      }
      word = "";
      setTimeout(function() {
        $("#feedback").empty();
      }, 2000);
      console.log(wordArr);
    });
  }



  startInterval() {
    this.interval = setInterval(this.timer, 1000);
  }

  timer() {
    this.time -= 1;
    if (this.time <= 0) {
      $(".timer").text(`0`);
      $("body").append("<div id=game-over></div>");
      $("#game-over").text("Game Over!");
      $("body").append("<div class=overlay></div>");
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
    $(".body").append("<button class=start>START</button>");
    $(".start").on("click", this.newGame);
    $(".start").click(function() {
      $("#splash").fadeOut("slow");
    });

  }

  reset() {
    $(".board").empty();
    this.board = new Board(8);
    this.handleClick();
    }

  resetButton() {
    $('.icono-reset').on("click", this.reset);
  }


}


module.exports = Game;
