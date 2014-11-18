function getRandom (total) {
	return Math.floor(Math.random() * total);
}

function isInstanceOf(obj, objClass) {
	return obj instanceof objClass;
}

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function swapZeroOrOne(value){
	return (value === 0) ? 1 : 0;
}

function debugNodeTree (nodeTree) {
  var root = nodeTree, player = new Player("George", "o");

  if (root && !root.leaf) {
    for (var i = 0, j = root.listNodes.length; i < j; i++) {
      console.log(root.get(i).checkWin(player));
      console.log(root.get(i).getMiniMaxValue());
      console.table(root.get(i).grid.matriz);
    }
  } else {
    console.log(root.checkWin(player));
    console.log(root.getMiniMaxValue());
    console.table(root.grid.matriz);
  }
}