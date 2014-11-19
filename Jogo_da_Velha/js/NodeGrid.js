function NodeGrid() {
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
		currentPlayer = players[currentPlayerIndex], currentValue = 0,
		nextPlayerIndex = swapZeroOrOne(currentPlayerIndex),
		nextPlayer = players[nextPlayerIndex], playerWinValue = -1,
		listPlayers = [currentPlayer],
		numberOfEmptyCells = i;

		if (currentPlayer.getType() === "Max") {
			playerWinValue = 1;
			listPlayers.push(nextPlayer);
		} else {
			listPlayers.unshift(nextPlayer);
		}

		while (i--) {
			currentNode = this.clone();
			currentNode.setMove(currentNode.grid.emptyCells[i], currentPlayer.getSymbol());
			win = currentNode.checkWin(currentPlayer);
			draw = currentNode.grid.checkDraw();
			if (!win && !draw) {
				currentValue = 0;
				currentNode.generateChilds(players, nextPlayerIndex);
			} else if (win) {
				currentValue = playerWinValue;
			} else if (draw) {
				currentValue = 0;
			}
			count++;
			currentNode.setValue(currentValue * (numberOfEmptyCells));
			this.addChild(currentNode);
		}
};