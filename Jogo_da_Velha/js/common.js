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