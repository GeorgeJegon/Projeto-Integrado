function PlayerMaquina (symbol) {
  this.setName("Máquina");
  this.setSymbol(symbol);
  this.useIA = false;
}

PlayerMaquina.prototype = new Player();
PlayerMaquina.prototype.constructor = PlayerMaquina;

PlayerMaquina.prototype.makeMove = function (grid, gameController) {
  var newGrid;
  if (this.useIA) {
    newGrid = this.chooseBetterMove(grid, gameController);
  } else {
    newGrid = this.randomMove(grid);
  }
  return newGrid;
};

PlayerMaquina.prototype.randomMove = function (grid) {
  var field = grid.emptyCells[getRandom(grid.emptyCells.length)];
  return grid.setMove(field, this.symbol);
};

PlayerMaquina.prototype.enableIA = function () {
  this.useIA = true;
  return this;
};

PlayerMaquina.prototype.disableIA = function () {
  this.useIA = false;
  return this;
};

PlayerMaquina.prototype.chooseBetterMove = function (grid, gameController) {
  var nodeTreeRoot = gameController.nodeGridTree;
  if (!nodeTreeRoot.leaf) {
    var currentNode =  null, maxGrid = nodeTreeRoot.get(0), maxCounter = 0,
      type = this.getType();
    for (var i = 1, j = nodeTreeRoot.listNodes.length; i < j; i++) {
      currentNode = nodeTreeRoot.get(i);
      if (currentNode.leaf && currentNode.miniMaxValue === 1) {
        gameController.nodeGridTree = nodeTreeRoot.get(i);
        return grid.setMove(currentNode.grid.lastMove, this.getSymbol());
      }
      if ((type === "Max" && currentNode.miniMaxValue > maxGrid.miniMaxValue) ||
         (type === "Min" && currentNode.miniMaxValue < maxGrid.miniMaxValue)) {
        maxGrid = currentNode;
        maxCounter = i;
      }
    }
    gameController.nodeGridTree = nodeTreeRoot.get(maxCounter);
    return grid.setMove(maxGrid.grid.lastMove, this.getSymbol());
  }
};