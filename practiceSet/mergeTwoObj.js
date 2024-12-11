let obj={
    a:12,
    b:13
}

let obj2={
    c:34,
    d:4,
  
}

//we can use 1)spread operator  and 2)Object.assign(arr) method to merge two arrays

let merge={
    ...obj, ...obj2
}

console.log(merge)

const mergedArray=Object.assign(obj,obj2);
console.log(mergedArray)