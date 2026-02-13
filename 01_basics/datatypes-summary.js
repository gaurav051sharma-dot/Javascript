// Depending on how the data is stored in memory and accessed, datatypes are of two types- Primitive and 
// Non-Primitive

// Primitive Datatypes ---> When the values of variables of primitive datatypes are passed, then a copy 
// of the values are passed and not the original memory reference and the changes done are only affected
// in the copied version and not the original memory reference

// 7 types: String, Number, Boolean, Null(means empty and not 0), Undefined, Symbol, BigInt

// Example of Null- Suppose that you are fetching the temperature of a place from the server but due to 
// some issues the temperature is not fetched then the server gives a null value and not 0 since 0 is also
// a temperature.

// Example of Undefined- We have declared a variable but not assigned any value to it then the value stored
// in that variable is undefined means no value assigned. Memory space is created but no value is stored
// there.

// Reference(Non-Primitive) Datatypes ---> When the values of variables of reference datatypes are passed,  
// then the original memory reference is passed and the changes done are affected in the original memory 
// reference.

// 3 types: Arrays, Objects, Functions

let value
value=67
// console.log(value);     // 67
value="gaurav"
// console.log(value);     // gaurav
value=true
// console.log(value);     // true

// JavaScript is a dynamically typed language means we do not have to explicitly declare the data type of 
// a variable when we create it, and a single variable can hold different types of data during the 
// program's execution. The interpreter determines the variable's type at runtime based on the value 
// assigned to it.

// Static typed language ---> TypeScript, Java, C++

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail     // userEmail=undefined

// Let's understand the datatype "Symbol"

const id=Symbol("123")
const anotherId=Symbol("123")

//console.log(id === anotherId)    // false

// Symbol is a datatype in which we can store String, Number. A variable declared with datatype "Symbol"
// stores some value and returns a new unique Symbol value. The Symbol value is not same for any two
// Symbol type variables though they contain same data.

const bigNumber=3423456776533228378654335n    
// By putting 'n' at the end of the number, the number gets converted to bigint

// Arrays

const heroes=["Shaktiman", "Naagraj", "Doga"]

// Objects ---> stored in form of key-value pairs

let myObj={
    name: "gaurav",
    age: 23,
}

// Functions

const myFunction=function(){
    console.log("Hello World")
}

console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof scoreValue)
console.log(typeof anotherId)
console.log(typeof myFunction)
console.log(typeof myObj)
console.log(typeof heroes)

/*
Return type of variables in JavaScript
1) Primitive Datatypes
   Number --> number
   String --> string
   Boolean --> boolean
   Null --> object
   Undefined --> undefined
   Symbol --> symbol
   BigInt --> bigint

2) Non-Primitive Datatypes
   Arrays --> object
   Object --> object
   Function --> function (object function)
*/