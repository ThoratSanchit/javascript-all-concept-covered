let string ="The Sanchit Thorat java developer";

let sp=string.split(" ");

let longest="";
for(let key of sp){
 if(key.length>longest.length){
    longest=key;
 }
}
console.log(longest);
