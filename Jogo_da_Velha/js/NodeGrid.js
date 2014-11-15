function NodeGrid () {
  this.grid = new Grid();
}

NodeGrid.prototype = new Node();
NodeGrid.prototype.constructor = NodeGrid;

NodeGrid.prototype.setMove = function (field, value) {
	return this.grid.setMove(field, value);
};

NodeGrid.prototype.checkWin = function (player) {
	return this.grid.checkWin(player);
};

NodeGrid.prototype.clone = function () {
	var newObject = new NodeGrid(), temp = clone(this.grid);

	newObject.grid.lastMove = temp.lastMove;
	newObject.grid.matriz = temp.matriz.slice(0);
	newObject.grid.emptyCells = temp.emptyCells.slice(0);

	return newObject;
};


var count = 0;

NodeGrid.prototype.generateChilds = function (players, currentPlayerIndex) {
	var i = this.grid.emptyCells.length, currentNode, win = false, draw = false,
		currentPlayer = players[currentPlayerIndex], currentValue = 0;

	while (i--) {
		currentNode = this.clone();
		currentNode.setMove(currentNode.grid.emptyCells[i], currentPlayer.getSymbol());
		win = currentNode.checkWin(currentPlayer);
		draw = currentNode.grid.checkDraw();
		if (!win && !draw) {
			currentNode.generateChilds(players, swapZeroOrOne(currentPlayerIndex));
		} else if (win) {
			currentValue = (currentPlayer.getType() === "Max")? 1 : -1;
		} else if (draw) {
			currentValue = 0;
		}
		count++;
		this.addChild(currentNode);
	}
};