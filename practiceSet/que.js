const cart=[
    {
        name:"phone",
        quantity:200,
        ae:2
    },
    {
        name:"mobikle",
        quantity:200,
        ae:2
    },
    {
        name:"bike",
        quantity:200,
        ae:2
    },
    {
        name:"mo",
        quantity:200,
        ae:2
    }
]

cart.forEach((e,i)=>{
    // if(e.name.includes('mo')){
    //     console.log(e)
    // }
    // let c=e.name.lastIndexOf('e');

    // if(c>-1){
    //     console.log(e)
    // }
    

    let c=e.name.includes('i');

    if(c==true){
        console.log(e)
    }

})



