var numbers = [1, 3, 4, 6, 600];
function minFinder(num) {
  var minResult = 1;
  for (var i = 0; i < num.length; i++) {
    if (minResult > num[i]) {
      minResult = num[i];
    }
  }
  return minResult;
}
function maxFinder(num) {
  var maxResult = 1;
  for (var i = 0; i < num.length; i++) {
    if (maxResult < num[i]) {
      maxResult = num[i];
    }
  }
  return maxResult;
}
function result(num) {
  console.log("min number -> " + minFinder(num));
  console.log("max number -> " + maxFinder(num));
}
console.log(result(numbers));
