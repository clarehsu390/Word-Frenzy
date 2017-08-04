/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const VOWELS = "AEIOU";

class Square {
  constructor() {
    this.squares = [];
    this.randomLetter = this.randomLetter.bind(this);
  }

  randomLetter() {
    let random = LETTERS[Math.floor(Math.random() * LETTERS.length)];
    this.squares.push(random);

  }

  ensureVowel() {

  }
}

Square.LETTERS = {

};
module.export = Square;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

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


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// class Word {
//   constructor() {
//     this.word = "";
//   }
//
//
//   getLetter() {
//     let clicking = false;
//     $(".square").mousedown(function(){
//       this.word += $(this).text();
//       console.log(this.word);
//     });
//
//     $(document).mouseup(function(){
//       $(".square").removeClass("highlight");
//       clicking = false;
//     });
//   }
// }
//
//
//
// module.exports = Word;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


const Game = __webpack_require__(5);

$( () => {
 const game = new Game();
 game.handleClick();
 game.startButton();
});

$(document).ready(function () {
    $('#splash').css('opacity', '0.5');
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const Square = __webpack_require__(0);
const Board = __webpack_require__(2);
const Word = __webpack_require__(3);
const Trie = __webpack_require__(6);

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


/***/ }),
/* 6 */
/***/ (function(module, exports) {

class TrieNode {
  constructor(char) {
    this.char = char;
    this.isWord = false;
    this.children = {};
  }

  addChild(node) {
    this.children[node.char] = node;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode('');
  }

  add(word) {
    let currentNode = this.root;

    for(let i=0; i < word.length; i++) {
      let char = word[i];
      if(currentNode.children[char]) {
        currentNode = currentNode.children[char];
      }
      else {
        let newNode = new TrieNode(char);
        currentNode.addChild(newNode);
        currentNode = newNode;
      }
    }
    //full word!
    currentNode.isWord = true;
  }

  contains(word) {
    let currentNode = this.root;
    //check to see if character node exists in children
    for(let i=0; i < word.length; i++) {
      let char = word[i];
      if (currentNode.children[char]){
        //next depth of the trie
        currentNode = currentNode.children[char];
      }
      else {
        //not a valid word
        return false;
      }
    }
    return currentNode.isWord;


  }

}

module.exports = Trie;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map