function getRandom (total) {
	return Math.floor(Math.random() * total);
}

function isInstanceOf(obj, objClass) {
	return obj instanceof objClass;
}

var GLOBAL;

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

  //console.log(NodeTree);
  var test = MiniMaxCalc(NodeTree);
  console.log(test);
  console.log(NodeTree);
};

function MiniMaxCalc (root, level) {
  level = level || 0;

  var miniMaxValue , select;

  if (!(level%2)) { //Max
    select = Math.max;
    miniMaxValue = -Infinity;
  } else { // Min
    select = Math.min;
    miniMaxValue = Infinity;
  }

  console.log(root.value, "Level: " + level);

  if (!root.isLeaf()) {
    for (var i = 0, j = root.listNodes.length; i < j; i++) {
      miniMaxValue = select(miniMaxValue, MiniMaxCalc(root.listNodes[i], level + 1));
    }
    root.value = miniMaxValue;
    console.log(miniMaxValue);
    return miniMaxValue;
  } else {
    return root.value;
  }
}