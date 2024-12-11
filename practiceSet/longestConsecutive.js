let arr=[1,200,2,3,400,4];
let a=[];

for(let num of arr){
    if(num+1==num){
        a.push(num)
    }
}
console.log(a);
