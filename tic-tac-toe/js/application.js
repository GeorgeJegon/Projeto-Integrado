var GLOBAL;
window.onload = function () {
  var op = 0, listPlayers = [];
  do {
    op = prompt("Escolha o modo de Jogo:\n1 - Homem x Homem\n2 - Homem x Máquina\n3 - Homem x Máquina (IA)\n4 - Cancelar");
    switch(op) {
      case "1":
        listPlayers.push(new Player(prompt("Digite seu Nome:"), "x"));
        listPlayers.push(new Player(prompt("Digite seu Nome:"), "o"));
        op = 4;
        break;
      case "2":
        listPlayers.push(new Player(prompt("Digite seu Nome:"), "x"));
        listPlayers.push(new PlayerMaquina("o"));
        listPlayers[1].setType("Max");
        op = 4;
        break;
      case "3":
        listPlayers.push(new Player(prompt("Digite seu Nome:"), "x"));
        listPlayers.push(new PlayerMaquina("o"));
        listPlayers[1].enableIA();
        listPlayers[1].setType("Max");
        op = 4;
        break;
      default:
        op = 4;
    }
  } while(op != 4);

  if (listPlayers.length > 0) {
    var g = new Game();
      g.addPlayer(listPlayers[0])
       .addPlayer(listPlayers[1])
       .start();
  }
};