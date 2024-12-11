`
The splice() method in JavaScript is used to change the contents 
of an array by removing or replacing existing elements and/or adding 
new elements in place. This method modifies the original array and returns an array containing the removed elements.`

//array.splice(start, deleteCount, item1, item2, ...)
let arr=[1,2,3,4,5,6,7,8,9];
let c=arr.splice(1,1)
console.log(c)
console.log(arr)