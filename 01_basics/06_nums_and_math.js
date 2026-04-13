const score= 400
// console.log(score)

const balance=new Number(100.897654)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber=123.8966

// console.log(otherNumber.toPrecision(2))
// console.log(otherNumber.toPrecision(3))
// console.log(otherNumber.toPrecision(4))

// Fixed --> consider the digits after the decimal point
// Precision --> consider all the digits

const num=123478698
// console.log(num.toLocaleString())
// console.log(num.toLocaleString('en-IN'))

// ***************** Maths ******************

// console.log(Math)
// console.log(Math.abs(-4.678))
// console.log(Math.round(-4.678))
// console.log(Math.round(4.5))
// console.log(Math.ceil(-4.678))
// console.log(Math.floor(-4.678))
// console.log(Math.min(-4,-6,-7,-8))
// console.log(Math.max(-4,-6,-7,-8))

console.log(Math.random())
console.log((Math.random()*10) + 1)
console.log((Math.floor(Math.random()*10)) + 1)

const min=10
const max=20

console.log((Math.floor(Math.random() * (max-min+1))) + min)

// Math.random() generates a number between 0 and 1 (inclusive)
// Math.random()*10 + 1 ---> range [1,11]
// (Math.random() * (max-min+1)) + min ---> range [min,max]