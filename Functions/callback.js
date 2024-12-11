// A callback function is a function passed as an argument to another function

function add(a,b,callback){
   console.log(a+b);
    callback();
}

const greet=()=>{
    console.log("Hello deare from anon");
}

const another=()=>{
    console.log("not working")
}


// pass anonymous function
add(2,4, function(){
    console.log("anonymous function")
})


// pass  function as a parameter
add(2,3,another);

// pass  function as a parameter
add(3,4,greet)