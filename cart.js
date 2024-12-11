let totalPrice=0;
let cart=[
    {
        productName:"Mobile",
        quantity:2,
        price:10000
    },
    {
        productName:"Laptop",
        quantity:4,
        price:40000
    },
    {
        productName:"Watch",
        quantity:7,
        price:1000
    }
]

cart.forEach((e,i)=>{

  let price=e.quantity*e.price;
  totalPrice+=price;
})
console.log(`Total price is ${totalPrice}`)

