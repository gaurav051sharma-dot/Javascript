/*
console.log(2 > 1)
console.log(2 >= 1)
console.log(2 < 1)
console.log(2 <= 1)
console.log(2 == 1)
console.log(2 != 1)
*/

// console.log("2" > 1)           // String 2 is getting converted automatically to Number 2 by JS
// console.log("02" > 1)          // String 2 is getting converted automatically to Number 2 by JS

// In JS it is always recommended that you compare two values of same datatype

/*
console.log(null > 0)         // false
console.log(null >= 0)        // true
console.log(null == 0)        // false
console.log(null < 0)         // false
console.log(null <= 0)        // true
console.log(null != 0)        // true
*/

// The reason for different behaviour of comparison operators with null is that check(==,!=) and comparisons
// (>,<,>=,<=) work differently. Comparisons convert null to a number, treating it as 0.

/*
console.log(undefined == 0)    // false
console.log(undefined != 0)    // true
console.log(undefined >= 0)    // false
console.log(undefined <= 0)    // false
console.log(undefined > 0)     // false
console.log(undefined < 0)     // false
*/

// In JS, check(==,!=) and comparisons(>,<,>=,<=) work differently.

console.log("2" == 2)
console.log("2" === 2)

// "==" checks only the value and not the datatype. "==" converts the datatype(if required) during comparison.
// "===" checks both the value and the datatype. "===" does not convert the datatype during comparison.