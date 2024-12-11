`The every() method in JavaScript is a built-in array method that checks 
if all elements in an array pass a specified test implemented by a provided function.
It returns true if all elements satisfy the condition, and false if at least one element fails the test.`
////if one element fail the condition it will be false


let arr=[2,4,6,8,10]
let ever=arr.every(e=>e%2==0)
console.log(ever)