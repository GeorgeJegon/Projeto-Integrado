var GLOBAL;
window.onload = function () {
  var g = new Game(),
    M1 = new PlayerMaquina("o"),
    M2 = new PlayerMaquina("x"),
    H1 = new Player("George", "x"),
    H2 = new Player("Cleiton", "o");

  GLOBAL = g;

  M1.enableIA();
  M2.enableIA();

  // g.addPlayer(M1);
  // g.addPlayer(M2);

  // g.addPlayer(H1);
  // g.addPlayer(H2);

  g.addPlayer(H1);
  g.addPlayer(M1);

  g.start();
};