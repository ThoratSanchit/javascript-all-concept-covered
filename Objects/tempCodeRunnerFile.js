let employee={
  name:"Sanchit",
  city:"Samgamner"
}


//1)using hasOwnProperty method
console.log(employee.hasOwnProperty("name"))
console.log(employee.hasOwnProperty("city"))


//2 using the in operatr
console.log("city" in employee)