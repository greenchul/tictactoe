const TicTacToe = require("../src/tictactoe");

describe("Game constructors", () => {
  const ticTacToe = new TicTacToe();
  it("Should initilise with a nested array of -", () => {
    expect(ticTacToe.game).toEqual([
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ]);
  });
});

describe("takeAturn method", () => {
  const ticTacToe = new TicTacToe();
  it("Should change - to x in correct place when takeATurn(row, col) method is called", () => {
    ticTacToe.takeATurn(1, 1);

    expect(ticTacToe.game).toEqual([
      ["x", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ]);
    ticTacToe.takeATurn(1, 2);
    expect(ticTacToe.game).toEqual([
      ["x", "o", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ]);
  });
  it("Should alternate between player x and player o after each turn", () => {
    expect(ticTacToe.currentPlayer).toBe("x");
    ticTacToe.takeATurn(1, 1);
    expect(ticTacToe.currentPlayer).toBe("o");
  });

  describe("Check winning conditions", () => {
    let game;
    beforeEach(() => {
      game = new TicTacToe();
    });
    it("Col - Game won should be true", () => {
      game.game = [
        ["x", "o", "o"],
        ["x", "x", "o"],
        ["x", "o", "x"],
      ];
      expect(game.gameWon).toBe(true);
    });
    it("Row - Game won should be true", () => {
      game.game = [
        ["o", "o", "o"],
        ["x", "x", "x"],
        ["x", "o", "x"],
      ];
      expect(game.gameWon).toBe(true);
    });
    it("Row - Game won should be true", () => {
      game.game = [
        ["x", "o", "-"],
        ["-", "-", "x"],
        ["x", "x", "x"],
      ];
      expect(game.gameWon).toBe(true);
    });
    it("Game won should be false", () => {
      game.game = [
        ["x", "o", "-"],
        ["-", "-", "x"],
        ["x", "-", "x"],
      ];
      expect(game.gameWon).toBe(false);
    });
    it("Game won should be false", () => {
      game.game = [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"],
      ];
      expect(game.gameWon).toBe(false);
    });
    it("Diagonal - game won should be true", () => {
      game.game = [
        ["x", "-", "-"],
        ["-", "x", "-"],
        ["-", "-", "x"],
      ];
      expect(game.gameWon).toBe(true);
    });
    it("Diagonal - game won should be true", () => {
      game.game = [
        ["o", "-", "x"],
        ["-", "x", "o"],
        ["x", "-", "x"],
      ];
      expect(game.gameWon).toBe(true);
    });
  });
});
