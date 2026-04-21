// if

// {} --> scope
// condition should be true for the if block to get executed

// if(condition){

// }

// < , > , <= , >= , == , != , === , !==  ---> conditional operators used  
// in if 

if( 3 != 2 ){        //true
    // console.log("True 1")
}    

if( 2 == "2"){       // true
    // console.log("True 2")
}

if( 2 === "2"){       // false
    // console.log("True 3")
}

if( 2 != "2"){       // false
    // console.log("True 4")
}

if( 2 !== "2"){       // true
    // console.log("True 5")
}

// == , != checks only the value
// === , !== checks both the value and the datatype

// Block Scope

const score=200

if(score > 100){
    const power="fly"
    // console.log(`User power:${power}`)
}

// console.log(`User power:${power}`)   // Error: Out of scope

const balance=1000

// Implicit scope (without curly braces) --> only for single line 
// instruction

// if(balance > 500) console.log("test1")

// The following is not recommended

// if(balance > 500) console.log("test1"), console.log("test2")

if(balance < 500){
    // console.log("Less than 500")
}
else if(balance < 750){
    // console.log("Less than 750")
}
else if(balance < 900){
    // console.log("Less than 900")
}
else{
    // console.log("Less than 1200")
}

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn && debitCard){
    // console.log("Allow to buy course")
}

if(userLoggedIn && debitCard && 2==3){
    // console.log("Allow to buy course")
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in")
}