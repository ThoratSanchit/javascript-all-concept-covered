`The forEach() method in JavaScript is an array method used to execute a provided
function once for each array element. It is particularly useful for iterating over
arrays and performing operations on each element without returning a new array.
Here’s a detailed explanation of how forEach() works, its syntax, behavior, examples, and common use cases.`


//dosent return new array

let arr=[1,2,3,4,5,67,8]

arr.forEach((e)=>{
    console.log(e*2)
})
console.log(arr)