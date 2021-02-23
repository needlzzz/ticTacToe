const EventEmitter = require("events").EventEmitter;
const Square = require("./square");

class Board extends EventEmitter {
  constructor(grid, players, currentTurnIdx) {
    super();
    this.cells = grid || [
      new Square(), new Square(), new Square(),
      new Square(), new Square(), new Square(),
      new Square(), new Square(), new Square()
    ];
    this.players = players || [];
    this.currentTurnIdx = currentTurnIdx || 0;
    this.ready = false;
  }

  disableAll() {
    this.cells.forEach(cell => {
      cell.active = false;
    });
  }

  enableAll() {
    this.cells.forEach(cell => {
      cell.active = true;
    });
  }

  mark(cellId) {
    const cell = this.cells[cellId];

    if (!cell) {
      return false;
    }

    if (this.ready && cell.active) {
      const player = this.players[this.currentTurnIdx];
      cell.state = player.label;
      cell.active = false;

      this.emit(Board.events.CELL_MARKED, { cellId: cellId, player: player });

      const res = this.checkWinner();
      if (res.win) {
        this.disableAll();
        this.emit(Board.events.WINNER, {
          player: this.players[this.currentTurnIdx],
          pos: res.pos
        });
      } else if (this.checkDraw()) {
        this.emit(Board.events.DRAW, {});
      } else {
        this.currentTurnIdx = (this.currentTurnIdx + 1) % 2;
        this.emit(Board.events.CHANGE_TURN, this.players[this.currentTurnIdx]);
      }
    }
  }

  checkTurn(playerId) {
    return this.players[this.currentTurnIdx].id == playerId;
  }

  checkWinner() {
    //TODO T1: returns {
    //   win: win,
    //   pos: pos
    // }; 
    // wobei "win" ein Flag ist das aussagt ob es einen Gewinner gegeben hat
    // und "pos" die Liste der Indices mit der Gewinnerposition ist
    // Beispiel:
    // { win: true, pos: [0, 1, 2] }
  }

  checkDraw() {
    return this.cells.every(
      cell =>
        cell.state === this.players[0].label ||
        cell.state === this.players[1].label
    );
  }

  addPlayer(player) {
    if (this.players.length < 2) {
      const isNew = this.players.filter(p => p.id == player.id).length === 0;

      if (isNew) {
        this.players.push(player);
        this.ready = this.players.length === 2;
        this.emit(Board.events.PLAYER_CONNECTED, player);

        if (this.ready) {
          this.enableAll();
          this.emit(Board.events.GAME_READY, this.players[0]);
        }
      }
    }
  }
}

Board.events = {
  PLAYER_CONNECTED: "playerConnected",
  GAME_READY: "gameReady",
  CELL_MARKED: "cellMarked",
  CHANGE_TURN: "changeTurn",
  WINNER: "winner",
  DRAW: "draw"
};

module.exports = Board;
