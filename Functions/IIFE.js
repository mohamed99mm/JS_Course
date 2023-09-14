//An Immediate-Invoked Function Expression (IIFE)
// is a function that is executed instantly after it's defined.
// This pattern has been used to alias global variables,
// make variables and functions private and to ensure asynchronous code in loops are executed correctly

//-----------------> IIFE is one of the js design patterns
function outerFun() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    //IIFE pattern
    arr.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i)
    );
  }
  return arr;
}

var result = outerFun();
console.log(result);

result[0]();
result[1]();
result[2]();
