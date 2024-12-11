///  object defining ways:--


//a) Object Literals
   // The most common way to create an object is using an object literal.

   let person1 = {
    name: "John",
    age: 30,
    city: "New York"
  };
  console.log(person1)



//b) Using the Object Constructor
  //Another way to create an object is by using the Object constructor.

  let person2 = new Object();
  person2.name = "John";
  person2.age = 30;
  person2.city = "New York";

  console.log(person2)


//c) Constructor Functions
   //Constructor functions allow you to create multiple similar objects.

   function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
  
  let john = new Person("John", 30, "New York");

  console.log(john)


  //d) ES6 Classes
   //ES6 introduced classes as a syntactical sugar over the existing prototype-based inheritance.

   class Persons {
    constructor(name, age, city) {
      this.name = name;
      this.age = age;
      this.city = city;
    }
  }
  
  let classSanchit = new Persons("John", 30, "New York");
  console.log(classSanchit)