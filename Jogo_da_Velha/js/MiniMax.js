function MiniMax (nodeTree) {
  this.root = nodeTree;
  this.calculate(this.root);
}

MiniMax.prototype.calculate = function (root, level) {
	var miniMaxValue , select;
	level = level || 0;

  if (!(level%2)) {
    select = Math.max;
    miniMaxValue = -Infinity;
  } else {
    select = Math.min;
    miniMaxValue = Infinity;
  }

  if (!root.isLeaf()) {
    for (var i = 0, j = root.listNodes.length; i < j; i++) {
      miniMaxValue = select(miniMaxValue, this.calculate(root.listNodes[i], level + 1));
    }
    root.value = miniMaxValue;
  }
  return root.value;
};