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

let p1 = [];
for (let key in person) {
  p1.push(person[key]);
}

let p2 = [];
for (let key in person3) {
  p2.push(person3[key]);
}

let isValueEqual=false;
for(let i=0;i<=p1.length-1;i++){
    for(let j=0;j<=p2.length;j++){
        if(p1[i]===p2[j]){
            return isValueEqual=true;
        }
    }
}
console.log(isValueEqual)