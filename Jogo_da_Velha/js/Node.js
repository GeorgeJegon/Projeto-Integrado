function Node (value) {
  this.value = value || 0;
  this.listNodes = [];
  this.isLeaf = true;
}

Node.prototype.addChild = function (node) {
  if (isInstanceOf(node, Node)) {
    this.listNodes.push(node);
    this.isLeaf = false;
  }
  return this;
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