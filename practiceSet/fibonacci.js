let series=20;
let n1=0;
let n2=1;
let nextTerm;

for(let i=1;i<=series;i++){
    console.log(n1);
    nextTerm=n1+n2;
    n1=n2;
    n2=nextTerm;
}
