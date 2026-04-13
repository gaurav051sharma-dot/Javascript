// Arrays
// JS arrays are resizable and can contain a mix of different data types
// JS arrays are zero-indexed

const array=[0,1,2,3,4,5,true,"hitesh"]
const myArr=[1,2,3,4,5]
const myHeroes=["Shaktiman","Naagraj"]
const myArr2=new Array(1,2,3,4)
// console.log(myArr[3])
// console.log(myArr.length)

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.unshift(11)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))
// console.log(myArr.indexOf(3))

const newArr=myArr.join()    // Converts array myArr to string newArr 

// console.log(myArr)
// console.log(newArr)
// console.log(typeof myArr)
// console.log(typeof newArr)

// slice,splice

console.log("SLice Method")
console.log("Original array before slice operation")
console.log(myArr)
const myN1=myArr.slice(1,3)
console.log("Sliced array")
console.log(myN1)
console.log("Original array after slice operation")
console.log(myArr)

console.log("SpLice Method")
console.log("Original array before splice operation")
console.log(myArr)
const myN2=myArr.splice(1,3)
console.log("Spliced array")
console.log(myN2)
console.log("Original array after splice operation")
console.log(myArr)

// In splice operation, original array gets altered