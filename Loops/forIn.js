//1)for…in loop is used to loop through the properties of an 
  //object.

// It allows you to iterate over the keys of an object and 
   //access the values associated by using keys as the index.



let person={
    name:"sanchit",
    age:21,
    class:"bca"
}

let res=Object.values(person)
let result=Object.keys(person)
console.log(res)

for(let key in person){
    if(key=="name"){
        // console.log(person.name)
        console.log(person[key])
    }

    console.log(person[key])
}