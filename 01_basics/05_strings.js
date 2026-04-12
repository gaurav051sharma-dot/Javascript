// Strings are immutable

const name="gaurav"
const repoCount=50

// console.log(name + repoCount + " Value");
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
// console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`)

const gameName=new String('subway surfers')
// console.log(gameName)
// console.log(gameName[0])
// console.log(name[0])

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('b'))

// const newString=gameName.substring(0,4)
// console.log(newString)

// const anotherString=gameName.slice(-12,4)
// console.log(anotherString)

// Negative indexes only work for slice and not substring
// Length of the string "subway surfers"---> 14
// Negative indexes start from the end from -1
// gameName.slice(-8,4)    -8=(14-8) --> -8=6  (6,4) - No output (since first index > second index)

const newStringOne="      gaurav      "
// console.log(newStringOne)
// console.log(newStringOne.trim())

// console.log(name.replace('a','*'))
// console.log(name.replaceAll('a','*'))
// console.log(name)

// console.log(name.includes("ur"))
// console.log(name.includes("ab"))

const string1="gaurav sharma is a good boy"
// console.log(string1.split(' '))

// String Functions in JS

const fullName="gaurav sharma"

// console.log(fullName.length)
// console.log(fullName.charAt(10))
// console.log(fullName.indexOf('a'))
// console.log(fullName.lastIndexOf("a"))
// console.log(fullName.replace("a","*"))
// console.log(fullName.replaceAll("a","*"))
// console.log(fullName.startsWith("d"))
// console.log(fullName.endsWith("a"))
// console.log(fullName.split("a"))
// console.log(fullName.substring(3))
// console.log(fullName.substring(3))
// console.log(fullName.toUpperCase())

const num=100
console.log(num.toString()+" hello")