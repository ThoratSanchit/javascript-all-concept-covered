function fibb(number){
let a=0
let b=1;
let c;

for(let i=1;i<=number;i++){
    console.log(a);
    c=a+b;
    a=b;
    b=c
}
}

let number=20;
(fibb(number))