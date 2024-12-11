//It allows you to access each value directly, 
//without having to use an index.

//❖ for…of loop is used to loop through the 
   //values of an object like arrays, strings. 

let arr=[2,3,4,5,6,7,7];

for(let key of arr){

    if(key==5){
        
        break;
    }
    console.log(key)
}