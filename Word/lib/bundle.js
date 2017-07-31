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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Square = __webpack_require__(1);
const Board = __webpack_require__(2);
const Word = __webpack_require__(3);
// const Dictionary = require("../assets/dictionary.txt");

document.addEventListener("DOMContentLoaded", () => {
 new Board(8);
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class Square {
  constructor() {

  }

  
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

class Board {
  constructor(x) {
    this.board = this.makeBoard(x);
    this.handleClick();
  }

  makeBoard(x) {
    for (let rows=0; rows < x; rows++) {
      for (let columns=0; columns < x; columns++){
        $(".board").append("<div class='square'>A</div>");
      }
    }
  }

  handleClick() {
    let clicking = false;
    $(".square").mousedown(function(){
       clicking = true;
      $(this).toggleClass('highlight');
      return false;
    });

    $(".square").mouseover(function(){
      if (clicking) {
        $(this).toggleClass("highlight");
      }
    });

    $(document).mouseup(function(){
      $(".square").removeClass("highlight");
      clicking = false;
    });
  }

}


module.exports = Board;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

class Word {
  constructor() {
    this.word = "";
  }
}


module.exports = Word;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map