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
  }

  dictionary(data) {
    const words = data.split("\n");
    words.pop();
    words.forEach(word => {
     this.trie.add(word);
    });
  }

  handleClick() {
    console.log(this.trie);
    let word = "";
    let display = "";
    let clicking = false;
    let wordArr = [];
    console.log(wordArr);
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

    $(document).mouseup(function(){
      $(".square").removeClass("highlight");
      wordArr.push(word);
      clicking = false;
      display = "";
      $("#potential").text(display);
      word = "";
    });
  }

  // mouseUp() {
  //   let wordArr = [];
  //   $(document).mouseover(function(){
  //     wordArr.push($("#potential").text());
  //   });
  //   console.log(wordArr);
  //   if (this.trie.contains(wordArr[-1])) {
  //     console.log("hello");
  //   }
  // }


}


module.exports = Game;
