function getRandom (total) {
	return Math.floor(Math.random() * total);
}

function isInstanceOf(obj, objClass) {
	return obj instanceof objClass;
}

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

window.onload = function () {
  var NodeTree = new Node("George"); // Raiz

  NodeTree.addChild(new Node());
  NodeTree.addChild(new Node());
  NodeTree.addChild(new Node());

  NodeTree.get(0).addChild(new Node(3));
  NodeTree.get(0).addChild(new Node(12));
  NodeTree.get(0).addChild(new Node(8));

  NodeTree.get(1).addChild(new Node(2));
  NodeTree.get(1).addChild(new Node(4));
  NodeTree.get(1).addChild(new Node(6));

  NodeTree.get(2).addChild(new Node(14));
  NodeTree.get(2).addChild(new Node(5));
  NodeTree.get(2).addChild(new Node(2));

  //console.log(new MiniMax(NodeTree));

  var NodeTree2 = new Node(); // Raiz

  // Nivel 1
  NodeTree2.addChild(new Node());
  NodeTree2.addChild(new Node());

  // Nivel 2
  NodeTree2.get(0).addChild(new Node());
  NodeTree2.get(0).addChild(new Node());

  NodeTree2.get(1).addChild(new Node());
  NodeTree2.get(1).addChild(new Node());

  // Nivel 3
  NodeTree2.get(0).get(0).addChild(new Node());
  NodeTree2.get(0).get(0).addChild(new Node());

  NodeTree2.get(0).get(1).addChild(new Node());
  NodeTree2.get(0).get(1).addChild(new Node());

  NodeTree2.get(1).get(0).addChild(new Node());
  NodeTree2.get(1).get(0).addChild(new Node());

  NodeTree2.get(1).get(1).addChild(new Node());
  NodeTree2.get(1).get(1).addChild(new Node());

  // Nivel 4
  NodeTree2.get(0).get(0).get(0).addChild(new Node(8));
  NodeTree2.get(0).get(0).get(0).addChild(new Node(23));

  NodeTree2.get(0).get(0).get(1).addChild(new Node(-47));
  NodeTree2.get(0).get(0).get(1).addChild(new Node(28));

  NodeTree2.get(0).get(1).get(0).addChild(new Node(-30));
  NodeTree2.get(0).get(1).get(0).addChild(new Node(-37));

  NodeTree2.get(0).get(1).get(1).addChild(new Node(3));
  NodeTree2.get(0).get(1).get(1).addChild(new Node(-41));

  NodeTree2.get(1).get(0).get(0).addChild(new Node(-19));
  NodeTree2.get(1).get(0).get(0).addChild(new Node(4));

  NodeTree2.get(1).get(0).get(1).addChild(new Node(-49));
  NodeTree2.get(1).get(0).get(1).addChild(new Node(4));

  NodeTree2.get(1).get(1).get(0).addChild(new Node(43));
  NodeTree2.get(1).get(1).get(0).addChild(new Node(45));

  NodeTree2.get(1).get(1).get(1).addChild(new Node(-26));
  NodeTree2.get(1).get(1).get(1).addChild(new Node(-14));

  //console.log(new MiniMax(NodeTree2));

  // var NodeGridTree = new NodeGrid();
  //   NodeGridTree.setMove(4, "x");
  //   NodeGridTree.generateChilds("o");
  //   console.log(NodeGridTree);

  var testGrid = new Grid();
  testGrid.setMove(4, "x");
  testGrid.setMove(1, "o");
  console.table(testGrid.matriz);
  console.log(testGrid.calculate());
};