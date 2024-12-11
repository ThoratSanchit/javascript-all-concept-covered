//concat() is used to concat the arrays.
let arr=[1,2,3];
let arr2=[4,5,6];
let c=[5,6,7];
let combine=arr.concat(arr2,c);
console.log(combine)

//use spread to concat two or more array.

let d=[...arr2,...arr]
console.log(d)