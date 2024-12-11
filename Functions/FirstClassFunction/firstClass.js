
//first class functon means that function can be used like any other variable.
let greet=function(){
    console.log("Hello world")
}


function firstClass(fn){
    fn();
}

console.log(firstClass(greet))


