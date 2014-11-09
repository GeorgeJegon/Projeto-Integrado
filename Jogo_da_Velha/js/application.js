window.onload = function () {
  var testGrid = new Grid();
  testGrid.setMove(4, "x");
  testGrid.setMove(1, "o");
  console.table(testGrid.matriz);
  console.log(testGrid.calculate());
};