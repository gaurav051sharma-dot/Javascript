// Immediately Invoked Function Expression (IIFE)

// function one(){
//     console.log("DB CONNECTED")
// }

// one()

/*

IIFE ---> A function that is defined and executed immediately after 
it is created. It is required to Avoid Global Scope Pollution and to
Execute Code Immediately.

Global scope pollution in JavaScript refers to the situation where 
too many variables, functions, or objects are added to the global 
scope, making them accessible everywhere in the program and 
increasing the risk of name conflicts, accidental overwrites, and 
hard-to-debug errors.
When you unnecessarily create variables or functions in the global 
scope, you “pollute” it.

A semicolon is needed between two IIFEs to separate statements properly.
Without it, JavaScript may treat the second IIFE as a continuation of 
the first one, causing an error.
A semicolon indicates the end of an iife function.
*/

// IIFE

( function one(){
    console.log("DB CONNECTED 1")
}
)();

( () => {
    console.log("DB CONNECTED 2")
}
)();

( (name) => {
    console.log(`DB CONNECTED 3 ${name}`)
}
)("Gaurav");

( function () {
    console.log("DB CONNECTED 4")
}
)();