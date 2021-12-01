(function exportTicTacToe() {
  class TicTacToe {
    constructor() {
      this.game = [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"],
      ];
      this.players = [1, 2];
      this.currentPlayer = "x";
    }

    get gameWon() {
      //loop through each row
      for (let i = 0; i < this.game.length; i++) {
        // loop through each square
        let tester = this.game[i][0];
        let count = 0;
        for (let j = 0; j < 3; j++) {
          if (this.game[i][j] === tester && this.game[i][j] !== "-") {
            count++;
          }
        }
        if (count === this.game[i].length) {
          return true;
        }
      }
      // check each col
      for (let i = 0; i < this.game.length; i++) {
        let colStart = this.game[0][i];
        if (
          this.game[1][i] === colStart &&
          this.game[2][i] === colStart &&
          colStart !== "-"
        ) {
          return true;
        }
      }
      // check diagonal
      if (
        this.game[0][0] !== "-" &&
        this.game[0][0] === this.game[1][1] &&
        this.game[0][0] === this.game[2][2]
      ) {
        return true;
      }
      if (
        this.game[0][2] !== "-" &&
        this.game[0][2] === this.game[1][1] &&
        this.game[2][0]
      ) {
        return true;
      }
      // return false if nothing matches
      return false;
    }
    changePlayer() {
      if (this.currentPlayer === "x") {
        this.currentPlayer = "o";
      } else {
        this.currentPlayer = "x";
      }
    }

    takeATurn(row, col) {
      this.game[row - 1][col - 1] = this.currentPlayer;
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = TicTacToe;
  } else {
    window.TicTacToe = TicTacToe;
  }
})();
