 function createAdder(a) {
    return function(b) {
      return a + b;
    };
  }
  
  const addFive = createAdder(5);
  console.log(addFive(3)); // 8