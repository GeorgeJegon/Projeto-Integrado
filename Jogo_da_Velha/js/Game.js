function Game() {
  this.players = [];
  this.grid = new Grid();
  this.canvasGridCols = [];
  this.gameFinished = false;
  this.gamePaused = false;
  this.nodeGridTree = null;
}

Game.prototype.addPlayer = function (player) {
  if (isInstanceOf(player, Player)) {
    this.players.push(player);
  }
};

Game.prototype.initEvents = function () {
  var self = this, i, j, DOMfield;

  var handlerClickCol = function () {
    self.handlerHumanPlayerMove(this);
  };

  for (i = 0, j = this.canvasGridCols.length; i < j; i++) {
    DOMfield = this.canvasGridCols[i];
    DOMfield.setAttribute("data-position", i);
    DOMfield.addEventListener("click", handlerClickCol, false);
  }
};

Game.prototype.handlerHumanPlayerMove = function (DOMObject) {
  var player = this.currentPlayer;
  if (!this.gameFinished) {
    if (!isInstanceOf(player, PlayerMaquina)) {
      if (player.makeMove(this.grid, +DOMObject.getAttribute("data-position"))) {
        this.drawGrid();
        this.switchPlayer();
      }
    }
  }
};

Game.prototype.drawGrid = function () {
  var grid = this.grid, matriz = this.grid.matriz, field;
  for (var i = 0, j = matriz.length; i < j; i++) {
    for (var x = 0, y = matriz[i].length; x < y; x++) {
      field = grid.getFielFromPosition({"x": i, "y": x});
      if (matriz[i][x] !== 0) {
        this.canvasGridCols[field].classList.add(matriz[i][x]);
      }
    }
  }
};

Game.prototype.switchPlayer = function () {
  if (!this.checkWin()) {
    this.currentPlayerIndex = swapZeroOrOne(this.currentPlayerIndex);
    this.currentPlayer = this.players[this.currentPlayerIndex];
    this.checkPlayerMaquina();
  }
};

Game.prototype.checkWin = function () {
  if (this.grid.checkWin(this.currentPlayer)) {
    alert("O player " + this.currentPlayer.getName() + " (" + this.currentPlayer.getSymbol() + ") , ganhou esta partida!");
    this.gameFinished = true;
    return true;
  }
  return false;
};

Game.prototype.checkPlayerMaquina = function () {
  if (isInstanceOf(this.currentPlayer, PlayerMaquina)) {
    if (!this.nodeGridTree) { this.createNodeGridTree(); }
    if (this.currentPlayer.makeMove(this.grid)) {
      var self = this;
      this.drawGrid();
      setTimeout(function () {
        self.switchPlayer();
      }, 200);
    }
  }
};

Game.prototype.start = function () {
  this.canvasGridCols = document.getElementsByClassName("col");
  this.initEvents();
  this.currentPlayerIndex = 0; //getRandom(2);
  this.currentPlayer = this.players[this.currentPlayerIndex];
  this.currentPlayer.setType("Max");
  this.checkPlayerMaquina();
};

Game.prototype.createNodeGridTree = function () {
  var root = new NodeGrid();
  // root.setMove(4, this.currentPlayer.getSymbol());
  root.generateChilds(this.players.slice(0), swapZeroOrOne(this.currentPlayerIndex));
  this.nodeGridTree = root;
};

Game.prototype.swapPlayer = function () {
  var nextPlayerIndex = swapZeroOrOne(this.currentPlayerIndex);
  return this.players[nextPlayerIndex];
};