// const userEmail="gaurav@google.com"
// const userEmail=""
const userEmail=[]

if(userEmail){
    // console.log("Got user email")
}
else{
    // console.log("Don't have user email")
}

/*
Falsy values --> false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

All the values other than the above falsy values are truthy values

Some examples of truthy values:

"0" , 'false' / "false" , " " , [] , {} ---> empty object , function(){} --->
empty function , etc.
*/

// Correct way to check for empty array

const emptyArr=[]
if(emptyArr.length === 0){
    // console.log("Array is empty")
}

// Correct way to check for empty object

const emptyObj={}
if(Object.keys(emptyObj).length === 0){
    // console.log("Object is empty")
}

// Nullish Coalescing Operator (??) --> only made for null,undefined

let val1
// val1=5 ?? 10
// val1=null ?? 10
// val1=undefined ?? 15
val1=null ?? 10 ?? 20
// console.log(val1)

// Ternary Operator

const iceTeaPrice=100
iceTeaPrice <= 80 ? console.log("Price less than 80") : 
console.log("Price more than 80")

