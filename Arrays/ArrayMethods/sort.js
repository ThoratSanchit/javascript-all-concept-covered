`The sort() method in JavaScript is used to sort the elements of an array in place and returns the sorted array. 
The default sort order is according to string Unicode code points.`
// it modify the original array


let arr=['a','g','f','t','u']
let d=arr.sort();
console.log(d,arr)

let num=[100,2,3,444,55,66]
let sortNum=num.sort((a,b)=>a-b)
console.log(sortNum)