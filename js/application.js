function Node (value) {
  this.value = value;
  this.listNodes = [];
}

function Path (origin, destiny, direcionado) {
  this.origin = origin;
  this.destiny = destiny;
  this.direcionado = direcionado || 0;
}

function Graph (nodes, paths) {
  this.listNodes = [];
  this.listPaths = [];
}

Graph.prototype.draw = function (containerElement) {
  containerElement = (isObject(containerElement))? containerElement : ge(containerElement);
  var context = createSVG({
    width: containerElement.offsetWidth,
    height: containerElement.offsetHeight
  });
  containerElement.appendChild(context);
};

function ge (id) {
  return document.getElementById(id);
}

function isObject (value) {
  return typeof(value) === "Object";
}

function isString (value) {
  return typeof(value) === "String";
}

function createSVGElement (type, options) {
  var svgNS = "http://www.w3.org/2000/svg",
  svgElement = document.createElementNS(svgNS, type);

  options = options || {};

  for (var prop in options) {
    svgElement.setAttributeNS(null ,prop, options[prop]);
  }

  return svgElement;
}

function createSVG (options) {
  options = extend(options, {
    version: "1.1",
    baseProfile: "full"
  });

  var svg = createSVGElement("svg", options);
  svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
  return svg;
}

function createSVGCircle (options) {
  options = extend(options, {
    cx: 100,
    cy: 100,
    r: 50,
    fill: "black",
    stroke: "none"
  });

  return createSVGElement("circle", options);
}

function extend (destination, source) {
  for (var prop in source) {
    destination[prop] = source[prop];
  }
  return destination;
}

var vertices = [], arestas = [];

vertices.push(new Node("0"));
vertices.push(new Node("1"));
vertices.push(new Node("2"));
vertices.push(new Node("3"));
vertices.push(new Node("4"));
vertices.push(new Node("5"));
vertices.push(new Node("6"));
vertices.push(new Node("7"));

arestas.push(new Path(0, 6));
arestas.push(new Path(1, 2));
arestas.push(new Path(0, 1));
arestas.push(new Path(5, 7));
arestas.push(new Path(4, 3));
arestas.push(new Path(6, 5));

window.onload = function () {
  var graph = new Graph(vertices, arestas);
  graph.draw("canvasContainer");
};
