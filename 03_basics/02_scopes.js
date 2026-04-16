let a=10
const b=20
var c=30

if(true){
    // a=100, b=200, c=300
    let a=100
    const b=200
    var c=300
}

// a=10, b=20, c=300

// console.log(a)
// console.log(b)
// console.log(c)

// var and a variable declared without any let,const,var both does not 
// follow block and function scope
// A variable declared inside a function or block with let and const is
// only accessible within the same block or function. (Block scope)
// But a variable declared outside a block or function is accessible 
// everywhere even inside a block or function. (Global scope)

// Browser's scope and code editor's scope are different.

function one(){
    const username="Gaurav"

    function two(){
        const website="Youtube"
        // console.log(username)        // No error
    }
    // console.log(website)    // Error
    two()
}

one()

// Inner function can access variables of outer function but vice-versa 
// is not true. (Lexical scope)

// Scope chain
// JS searches variables in the following way:
// Own Scope → Parent Scope → Global Scope

// Closure (basic idea)
// Function two() remembers variables of one() even when used

// Summary:
// Andar se bahar jana allowed
// Bahar se andar jana not allowed

if(true){
    const username="Gaurav"
    if(username === "Gaurav"){
        const website=" Youtube"
        // console.log(username + website)    // No error
    }
    // console.log(website)           // Error
}

// console.log(username)              // Error

// Hoisting (Basic concept)

addOne(5)                 // No error

// Function Declaration
function addOne(num){
    return num + 1
}

// addOne(5)              // No error

result(5)                  // Error

// Function Expression
const result = function addTwo(num){
    return num + 2
}

// result(5)             // No error

// Cannot access 'result' before initialization ---> error in 
// function expression