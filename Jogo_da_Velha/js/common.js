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
      console.log(root.get(i).getValue());
      console.table(root.get(i).grid.matriz);
    }
  } else {
    console.log(root.getValue());
    console.table(root.grid.matriz);
  }
}

function createChildNodesDebug (root) {
  var container = document.getElementsByClassName("debug")[0],
    fragElement = document.createDocumentFragment();

  for (var i = 0, j = root.listNodes.length; i < j; i++) {
    fragElement.appendChild(createGridElement(root.get(i)));
  }
  container.innerHTML = "";
  container.appendChild(fragElement);
  container.style.width = ((j * (10 + 78)) - 10) + "px";
}

function createGridElement (nodeGrid) {
  var grid = nodeGrid.grid, gridElement = document.createElement("div"),
  itemElement = document.createElement("div"),
  spanValue = document.createElement("span"),
  rowElement, colElement;

  addClass(gridElement, "grid block");
  addClass(itemElement, "item");

  for (var i = 0, j = grid.matriz.length; i < j; i++) {
    rowElement = document.createElement("div");
    addClass(rowElement, "row clearfix");
    for (var x = 0, y = grid.matriz[i].length; x < y; x++) {
      colElement = document.createElement("div");
      addClass(colElement, "col");
      if (grid.matriz[i][x]) {
        colElement.innerText = grid.matriz[i][x];
      }
      rowElement.appendChild(colElement);
    }
    gridElement.appendChild(rowElement);
  }
  spanValue.innerText = nodeGrid.getValue();
  itemElement.appendChild(gridElement);
  itemElement.appendChild(spanValue);
  return itemElement;
}

function hasClass(ele,cls) {
  return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function addClass(ele,cls) {
  if (!this.hasClass(ele,cls)) ele.className += " "+cls;
}

function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
  }
}