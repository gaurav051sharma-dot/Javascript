function sayMyName(){
    console.log("G")
    console.log("A")
    console.log("U")
    console.log("R")
    console.log("A")
    console.log("V")
}

// sayMyName()

// function addTwoNumbers(number1,number2){      // parameters
//     console.log(number1 + number2)
// }

// addTwoNumbers(3,4)    // arguments

// function addTwoNumbers(number1,number2){      
//     let result=number1 + number2
//     return result
//     console.log("Gaurav Sharma")  // unreachable statement
// }

// const result=addTwoNumbers(3,5)
// console.log("Result=",result)

function addTwoNumbers(number1,number2){
    return number1 + number2
}

const result=addTwoNumbers(3,7)
// console.log("Result=",result)

// function loginUserMessage(username){
//     if(username === undefined){        // if(!username)
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Gaurav"))

// Without if
// console.log(loginUserMessage())   // Output: undefined just logged in

// With if
// console.log(loginUserMessage())  // Output: Please enter a username

// By default: undefined is considered false
// if(!username)  --> if username= undefined so false !false=true if
// gets executed

// Default value given --> if no value is given function runs with 
// default value, here default value is "Sam"
// In case of default value there is no use of undefined

function loginUserMessage(username="Sam"){
    return `${username} just logged in`
}

// console.log(loginUserMessage("Gaurav"))
// console.log(loginUserMessage())

// Rest operator (...)

// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200,400,500,2000))

// val1=200, val2=400, num1=[500,2000]

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000))

// Passing objects as arguments in the function

const user={
    username: "Gaurav",
    price: 199
}

function handleObject(anyObject){
    // console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)

handleObject({
    username: "Sam",
    price: 399
})

// Passing arrays as arguments in the function

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))

// console.log(returnSecondValue([200,500,800,1100,1400,1700]))