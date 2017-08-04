const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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
