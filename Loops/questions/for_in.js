// Question 1: Sum of Numeric Properties
// Given an object with numeric values, write a function to calculate the sum of all the numeric properties.

// javascript
// Copy code
const data = {
  a: 10,
  b: 20,
  c: "hello",
  d: 30,
};
let sum = 0;
for(let key in data){
  if(typeof data[key]==='number'){
    sum+=data[key]
  }
}

console.log(sum)