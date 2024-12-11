let arr=[1,2,3,1,4];

let sum=()=>{
    return arr.reduce((e,i)=>{
        return e+i;
    },0)
}

console.log(sum(...arr))