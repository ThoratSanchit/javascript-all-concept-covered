`The some() method in JavaScript tests whether at least one element in the array passes 
the test implemented by the provided function. It returns a Boolean value: true if the callback 
function returns a truthy value for at least one element in the array; otherwise, false.`

//if one element pass the condition it will be true

let arr=[1,2,3,4]
let check=arr.some((e)=>e>2)
console.log(check)