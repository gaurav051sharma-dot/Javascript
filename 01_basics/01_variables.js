const accountId=345
let accountEmail="gaurav@google.com"
var accountPassword="12345"
accountCity="Kolkata"
let accountState

// accountId=12   ---> not allowed

accountEmail="sharma@gmail.com"
accountPassword="123"
accountCity="Bengaluru"

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
const is used to declare variables whose values should not change
let and var are used to declare variables whose values can change

Prefer not to use var because of issue in block scope and functional scope
Ex- If you declare a variable say "count" inside a for loop with keyword "var" and in another for loop
say you again declare and use "var count". In first loop, you increment count till 5 and in the next
loop you again start incrementing count then it should start logically from 0 but it does not. It
starts from 5.But this problem does not occur in let.

We would be using let and const.

We could also declare variables without any let or const like accountCity but that is not recommended.

If we declare any variable but does not store any value in it like "let accountState" then till you
store any value in it, "undefined" is stored in it.
*/