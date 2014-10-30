function Grid() {
  this.emptyCells = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  this.matriz = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
  this.lastMove = -1;
}

Grid.prototype.setMove = function (field, value) {
  var position = this.getPositionFromField(field);

  if (this.canMove(field)) {
    this.matriz[position.x][position.y] = value;
    this.removeEmptyCell(field);
    return true;
  }
  return false;
};

Grid.prototype.removeEmptyCell = function (field) {
  var index = this.emptyCells.indexOf(field);
  this.lastMove = this.emptyCells.splice(index, 1);
};

Grid.prototype.canMove = function (field) {
  return this.emptyCells.indexOf(field) >= 0;
};

Grid.prototype.getPositionFromField = function (field) {
  return {
    x: parseInt(field/3, 10) ,
    y: field % 3
  };
};

Grid.prototype.getFielFromPosition = function (position) {
  return (position.x * 3) + position.y;
};

Grid.prototype.checkArrayWinVertical = function (verticalArray) {
  for(var i = 0, j = verticalArray.length; i < j; i++) {
    if (verticalArray[i]) {
      return true;
    }
  }
  return false;
};

Grid.prototype.checkWin = function (player) {
  var diagonalPrimaria = 0, diagonalSecundaria = 0, pos = 0,
    vertical = [true, true, true], horizontal = true;

  if (isInstanceOf(player, Player)) {
    var p = player.symbol;
    for(var i = 0 , j = this.matriz.length, k = (j-1); i < j; i++) {
      horizontal = true;
      for(var x = 0, y = this.matriz[i].length; x < y; x++) {
        var c = this.matriz[i][x];
        var modResult = (pos % j);
        if (i === x && c === p) {
          diagonalPrimaria++;
          if ((i+x) === k) {
            diagonalSecundaria++;
          }
        } else if ( (i+x) == k && c === p) {
          diagonalSecundaria++;
        }
        horizontal = horizontal && c === p;
        vertical[modResult] = vertical[modResult] && c === p;
        pos++;
      }

      if(horizontal){
        return true;
      }
    }
    return (this.checkArrayWinVertical(vertical) || diagonalSecundaria == 3 || diagonalPrimaria == 3);
  }
};

Grid.prototype.checkDraw = function () {
  return this.emptyCells.length === 0;
};

Grid.prototype.avaliate = function (playerSymbol) {
  playerSymbol = "x";

};