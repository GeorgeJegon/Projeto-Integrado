function getRandom (total) {
	return Math.floor(Math.random() * total);
}

function isInstanceOf(obj, objClass) {
	return obj instanceof objClass;
}

var GLOBAL;

window.onload = function () {
  var g = new Game();

  GLOBAL = g;

  g.addPlayer(new Player("Humano", "x"));
  g.addPlayer(new PlayerMaquina("o"));
  // g.addPlayer(new PlayerMaquina("x"));
  // g.addPlayer(new Player("Cleiton", "o"));

  g.start();
};