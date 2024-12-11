let person = {
  name: "sanchit",
  age: 21,
  status: true,
};

let person3 = {
  name: "sanchit",
  age: 21,
  status: true,
};

let p1 = Object.values(person);
let p2 = Object.values(person3);

let isValue = true;
for (let i = 0; i <= p1.length - 1; i++) {
  if (p1[i] !== p2[i]) {
    isValue = false;
  }
}

let p3 = Object.keys(person);
let p4 = Object.keys(person3);
let isEqual = p3.every((e, i) => {
  if (e === p4[i]) {
    return true;
  }
});

if (isEqual == true && isValue == true) {
  console.log("Objects are similar ");
} else {
  console.log("Object are not similar");
}
