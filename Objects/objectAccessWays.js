///ways of accessing elements in an objects

let person = {
  name: "sanchit",
  age: 21,
  class: "bca",
};

//a) dot notation
console.log(person.name); // Outputs: John

//b) Bracket Notation
console.log(person["age"]); //21

//c) Variables as Property Keys
let key = "name";
console.log(person[key]); //sanchit

console.log(person);
//{ name: 'sanchit', age: 21, class: 'bca' }
