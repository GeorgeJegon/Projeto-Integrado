function Node (value) {
  this.parent = undefined;
  this.value = value || 0;
  this.listNodes = [];
  this.leaf = true;
}

Node.prototype.addChild = function (node) {
  if (isInstanceOf(node, Node)) {
    node.parent = this;
    this.listNodes = this.listNodes.slice(0).concat([node]);
    this.leaf = false;
  }
  return this;
};

Node.prototype.getParent = function () {
  return this.parent;
};

Node.prototype.get = function (index) {
  return this.listNodes[index];
};

Node.prototype.removeChild = function (index) {
  this.listNodes.splice(index, 1);
};

Node.prototype.search = function () {

};

Node.prototype.isLeaf = function () {
  return this.listNodes.length === 0;
};

Node.prototype.setValue = function (value) {
  this.value = value;
};