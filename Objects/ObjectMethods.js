//Common Object Methods

let person = {
  name: "sanchit",
  age: 21,
  isSingle: true,
};

//1. Object.keys()

//Returns an array of a given object's own enumerable property names.
console.log(Object.keys(person)); // Output: ["name", "age", "class"]

//2) Object.values()

//Returns an array of a given object's own enumerable property values.
console.log(Object.values(person)); // Output: ["Sanchit", 21, "BCA"]

//3) Object.entries()

//Returns an array of a given object's own enumerable property [key, value] pairs.
console.log(Object.entries(person)); // Output: [["name", "Sanchit"], ["age", 21], ["class", "BCA"]]

//4). Object.assign()
//merge two object
//Copies all enumerable own properties from one or more source objects to a target object.

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);//  the target object include all the elements from the source obj.
console.log(target)  // Output: { a: 1, b: 4, c: 5 }
console.log(returnedTarget); // Output: { a: 1, b: 4, c: 5 }



//Using Methods to Manipulate Object Properties
//1. Adding Methods Dynamically:
const person1 = {
  name: "Sanchit",
  age: 21,
};

person1.sayAge = function () {
  console.log("I am " + this.age + " years old");
};
person1.sayAge(); // Output: I am 21 years old



//Q. How do you check if a property exists in an object?

let employee={
  name:"Sanchit",
  city:"Samgamner"
}


//1)using hasOwnProperty method
console.log(employee.hasOwnProperty("name"))
console.log(employee.hasOwnProperty("city"))


//2 using the in operatr
console.log("city" in employee)