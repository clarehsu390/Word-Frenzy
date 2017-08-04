
const Game = require("./game");

$( () => {
 const game = new Game();
 game.handleClick();
 game.startButton();
});

$(document).ready(function () {
    $('#splash').css('opacity', '0.5');
});
