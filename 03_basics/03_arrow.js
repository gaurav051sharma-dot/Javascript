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
Writing this.username in function gives undefined.
Writing "this" in a function inside an object gives the whole information
about the object. Writing this.username in a function inside an object
gives the value of the variable username.

Best use of "this" keyword---> Inside an object 
*/

const result=function(){
    let username= "Gaurav"
    console.log(this)             // Gives long information
    // console.log(this.username)    // Gives undefined
}

result()

