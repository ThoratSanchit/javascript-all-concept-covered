let obj = {
  name: "sanchit",
  age: 21,
  weight: 70,
};

console.log(Object.entries(obj))//  [ [ 'name', 'sanchit' ], [ 'age', 21 ], [ 'weight', 70 ] ]
let arr = Object.entries(obj);
arr.forEach((e, i) => {
  console.log(e);
});

