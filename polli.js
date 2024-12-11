// let str="phpi";
// let isPolindrome=false;

// for(let i=0, j=str.length-1; i<j;i++,j--){
//     if(str[i]==str[j]){
//         isPolindrome=true;
//     }
// }

// // for(let i=0;i<str.length-1;i++){
// //     for(let j=str.length-1;j>=0;j--){
// //         if(str[i]==str[j]){
// //             isPolindrome=true;
// //         }
// //     }
// // }


// if(isPolindrome){
//     console.log("String is polindrome");
// }else{
//     console.log("String is not polindrome");
// }


let num="php";
let string=num.toString();
// let string="121";
let s="";
 for(let i=string.length-1;i>=0;i--){
   s+=string[i];
 }

if(string===s){
    console.log("This is the polindrome");
}else{
    console.log("This string in not the polindrome")
}