function PlayerMaquina (symbol) {
  this.setName("Máquina");
  this.setSymbol(symbol);
  this.useIA = false;
}

PlayerMaquina.prototype = new Player();
PlayerMaquina.prototype.constructor = PlayerMaquina;

PlayerMaquina.prototype.makeMove = function (grid, nodeTreeRoot) {
  var newGrid;
  if (this.useIA) {
    newGrid = this.chooseBetterMove(grid, nodeTreeRoot);
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

PlayerMaquina.prototype.chooseBetterMove = function (grid, nodeTreeRoot) {
  if (!nodeTreeRoot.leaf) {
    var currentNode =  null, max = nodeTreeRoot.get(0).getValue(),
      type = this.getType(), maxPossibilities = [], selectedGrid;

    for (var i = 1, j = nodeTreeRoot.listNodes.length; i < j; i++) {
      currentNode = nodeTreeRoot.get(i);
      if ((type === "Max" && currentNode.getValue() > max) ||
         (type === "Min" && currentNode.getValue() < max)) {
        max = currentNode.getValue();
      }
    }

    for (i = 0, j = nodeTreeRoot.listNodes.length; i < j; i++) {
      currentNode = nodeTreeRoot.get(i);
      if (max === currentNode.getValue()) {
        maxPossibilities.push(currentNode);
      }
    }

    selectedGrid = maxPossibilities[getRandom(maxPossibilities.length)];
    return grid.setMove(selectedGrid.grid.lastMove, this.getSymbol());
  }
};