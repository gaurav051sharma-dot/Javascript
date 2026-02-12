"use strict";  
/* treat all JS code as newer version. It is a good practice but all JS code today is
written in newer version */

// alert(3+3) 
/* We are using Node.js and not browser. It will work properly in browser but not here. To use alert
in Node.js there is a different mechanism and we will learn it later on */

// Semi-colons are optional in JS

// console.log(3+3);    console.log("Gaurav Sharma")
/* In the above statement semi-colon is must otherwise error would be given since you are giving
two commands in the same line. But if you do it in different lines then semi-colon is not necessary.
It is recommended that you do not write multiple commands in the same line since you have enough space
and it destroys code readability. */

// ECMAScript is the original document where all the rules regarding JS is written like how to declare 
// variables, how to use loops, etc. But it is not easy to understand. MDN is a good resource for 
// understanding different things in JS. 

// ***********************DATATYPES IN JAVASCRIPT*********************

let name="Gaurav"
let age=18
let isLoggedIn=false
let state=null

// number
// bigint ---> for large nos.
// string ---> "" (preferred) or ''
// boolean ---> true/false
// null ---> standalone value (It is not 0 or "", it means empty)
// undefined ---> value is not assigned to variable
// symbol ---> used for uniqueness in components like in React

// object

console.log(typeof "gaurav")
console.log(typeof age)
console.log(typeof null)
console.log(typeof undefined)

/* To know the type of the variable,i.e., whether a variable is number,string,boolean,etc. typeof is
used. It is necessary to know the type of variable beacause when we work in backend we do not know 
what type of value is coming from frontend(number,string). Like 33 can be both a number(33) and a 
string("33"). */