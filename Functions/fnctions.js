//functions types

//1. Function Declaration or named function
//   A function declaration defines a named function.

function add(a, b) {
  return a + b;
}

//2) Function Expression
//A function expression defines a function inside an expression.

const subtract = function (a, b) {
  return a - b;
};

//3. Arrow Function
//A concise way to write function expressions using the => syntax.

const multiply = (a, b) => a * b;

//4. Anonymous Function
//A function without a name, often used as an argument to other functions.

setTimeout(function () {
  console.log("This is an anonymous function");
}, 1000);


//5. Immediately Invoked Function Expression (IIFE)
//  A function that is defined and invoked immediately.

(function() {
    console.log('IIFE');
  })();


//6. Higher-Order Function
   //A function that takes another function as an argument or returns a function.

   function createAdder(a) {
    return function(b) {
      return a + b;
    };
  }
  
  const addFive = createAdder(5);
  console.log(addFive(3)); // 8

