const Board = require("./board");
const Square = require("./square");
const Player = require("./player");

describe("checkWinner", () => {
  const players = [new Player(1, 'x', 'anna',), new Player(2, 'o', 'peter')];

  it("returns empty winning positions when empty board", () => {
    const emptyBoard = new Board(undefined, players, 0);
    expect(emptyBoard.checkWinner()).toEqual({ win: false, pos: [] });
  });

  //TODO T1: Ihre Unit Tests

});
