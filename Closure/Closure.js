var b = 2;

function outerFun(x, y) {
  var z = 10;
  var a = 1;
  var innerFun = function (a, b) {
    var w = 20;

    return x + y + +z + a + +b + +w;
  };
  return innerFun;
}

var result = outerFun(5, 6);
console.log(result); // function

console.log(result(3, 4));
