const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`Accumulator: ${acc} and current value: ${currval}`)
//     return acc + currval
// },0)

const myTotal=myNums.reduce((acc,curr) => acc+curr , 0)

// console.log(myTotal)

const shoppingCart=[
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Python",
        price: 299
    },
    {
        itemName: "Java",
        price: 1999
    },
    {
        itemName: "C++",
        price: 599
    }
]

const priceToPay=shoppingCart.reduce((acc,item) => acc + item.price,0)

console.log(priceToPay)
