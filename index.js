const TicTacToe = require("./src/tictactoe");

const game = new TicTacToe();

game.takeATurn(1, 1);

game.takeATurn(2, 1);

game.takeATurn(1, 2);

game.takeATurn(3, 1);

game.takeATurn(1, 3);

console.log(game.game);
console.log(game.gameWon);

game.game = [
  ["x", "o", "o"],
  ["x", "x", "o"],
  ["x", "o", "x"],
];

console.log(game.gameWon);
