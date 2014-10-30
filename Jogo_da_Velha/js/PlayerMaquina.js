function PlayerMaquina (symbol) {
  this.setName("Máquina");
  this.setSymbol(symbol);
}

PlayerMaquina.prototype = new Player();

PlayerMaquina.prototype.makeMove = function (grid) {
  var field = grid.emptyCells[getRandom(grid.emptyCells.length)];
  return grid.setMove(field, this.symbol);
};