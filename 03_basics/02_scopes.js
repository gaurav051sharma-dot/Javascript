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

console.log(a)
console.log(b)
console.log(c)

// var and a variable declared without any let,const,var both does not 
// follow block and function scope
// A variable declared inside a function or block with let and const is
// only accessible within the same block or function. (Block scope)
// But a variable declared outside a block or function is accessible 
// everywhere even inside a block or function. (Global scope)

// Browser's scope and code editor's scope are different.