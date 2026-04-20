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

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     // console.log(`User power: ${power}`);
// }

// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2")

// if (balance < 500) {
//     console.log("less than 500")
// } else if (balance < 750) {
//     console.log("less than 750")
    
// } else if (balance < 900) {
//     console.log("less than 750")
    
// } else {
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==3) {
//     console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }

const month = "may"

switch (month) {
    case "jan":
        console.log("January")
        break
    case "feb":
        console.log("feb")
        break
    case "march":
        console.log("march")
        break
    case "april":
        console.log("april")
        break

    default:
        console.log("default case match")
        break
}
