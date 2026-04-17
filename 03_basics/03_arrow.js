const user={
    username: "Gaurav",
    price: 999,
    welcomeMessage:function(){
        // console.log(`${this.username} , welcome to website`)
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username= "Sam"
// user.welcomeMessage()

// console.log(this)

function one(){
    let username= "Gaurav"
    // console.log(this)
    // console.log(this.username) 
}

one()

/*
Story of "this" keyword till now:

Writing "this" in global scope gives output {} and this.username gives
undefined.
Writing "this" in function gives a long information (non-strict mode).
Writing this.username in function gives undefined (strict mode).
Writing "this" in a function inside an object gives the whole information
about the object. Writing this.username in a function inside an object
gives the value of the variable username.

Best use of "this" keyword---> Inside an object 
*/

const result=function(){
    let username= "Gaurav"
    // console.log(this)             // Gives long information
    // console.log(this.username)    // Gives undefined
}

result()

// Arrow function

const value= () => {
    let username="Gaurav"
    // console.log(this)                // empty {}
    // console.log(this.username)       // undefined
}

value()

const addNos= (num1,num2) => {
    return num1+num2
}

// console.log(addNos(3,4))

// Implicit Return ---> In functions curly braces {} are required if you
// use return statement. Implicit return means to execute functions of
// single line without {} and return statement and the value is returned
// by using if required parentheses (). [Only for arrow functions]

const add1= (num1,num2) => num1 +  num2
const add2= (num1,num2) => (num1 +  num2)

// Returning objects using implicit return
// Without () for objects output will be undefined in implicit return

const object= () => ({username:"Gaurav"})

// console.log(add1(5,6))
// console.log(add2(8,5))
// console.log(object())