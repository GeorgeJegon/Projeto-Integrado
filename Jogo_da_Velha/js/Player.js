function Player(name, symbol) {
  this.name = name;
  this.symbol = symbol;
  this.type = "Min";
}

Player.prototype.setName = function (name) {
  this.name = name;
  return this;
};

Player.prototype.getName = function () {
  return this.name;
};

Player.prototype.setSymbol = function (symbol) {
  this.symbol = symbol;
  return this;
};

Player.prototype.getSymbol = function () {
  return this.symbol;
};

Player.prototype.setType = function (type) {
	this.type = type;
	return this;
};

Player.prototype.getType = function () {
	return this.type;
};

Player.prototype.makeMove = function (grid, field) {
  return grid.setMove(field, this.symbol);
};