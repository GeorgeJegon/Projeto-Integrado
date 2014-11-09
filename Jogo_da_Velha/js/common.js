function getRandom (total) {
	return Math.floor(Math.random() * total);
}

function isInstanceOf(obj, objClass) {
	return obj instanceof objClass;
}

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}