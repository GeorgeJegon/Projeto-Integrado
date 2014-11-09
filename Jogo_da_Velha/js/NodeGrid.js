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

NodeGrid.prototype.generateChilds = function (playerSymbol) {
	var i = this.grid.emptyCells.length, 
		currentNode, 
		player = new Player("George" , playerSymbol);

	while (i--) {
		currentNode = this.clone();
		currentNode.setMove(currentNode.grid.emptyCells[i], playerSymbol);
		if (!currentNode.checkWin(player) && !currentNode.grid.checkDraw()) {
			currentNode.generateChilds((playerSymbol === "o") ? "x" : "o");
		}
		this.addChild(currentNode);
	}
};