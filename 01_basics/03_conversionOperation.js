let score="33"

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber=Number(score)
// console.log(typeof valueInNumber)

let score1="33abc"
let valueInNumber1=Number(score1)
// console.log(typeof valueInNumber1)
// console.log(valueInNumber1);

/* When you will check the typeof valueInNumber1 it will also come as "number". You might get confused
here bcoz. we know that "33abc" cannot be a no. but when you will print the value of valueInNumber1
you will see it is coming NaN(Not a Number) that is the reason why typeof is coming as number. So
in JS you have to be careful with the type of variable. Number is not always a number and so on. */

let val1=null
// console.log(typeof val1)
let valnew1=Number(val1)
// console.log(typeof valnew1)
// console.log(valnew1)

/* Here also null gets converted to 0 but we know that null doesn't mean 0 it means empty. */

let val2=undefined
// console.log(typeof val2)
let valnew2=Number(val2)
// console.log(typeof valnew2)
// console.log(valnew2)

let val3=true
// console.log(typeof val3)
let valnew3=Number(val3)
// console.log(typeof valnew3)
// console.log(valnew3)

let val4="gaurav"
// console.log(typeof val4)
let valnew4=Number(val4)
// console.log(typeof valnew4)
// console.log(valnew4)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

let isLoggedIn1=2
let booleanIsLoggedIn1=Boolean(isLoggedIn1)
// console.log(booleanIsLoggedIn1)

let isLoggedIn2=""
let booleanIsLoggedIn2=Boolean(isLoggedIn2)
// console.log(booleanIsLoggedIn2)

let isLoggedIn3="gaurav"
let booleanIsLoggedIn3=Boolean(isLoggedIn3)
// console.log(booleanIsLoggedIn3)

let isLoggedIn4=-1
let booleanIsLoggedIn4=Boolean(isLoggedIn4)
// console.log(booleanIsLoggedIn4)

// -infinity to infinity (except 0) => true; 0 => false
// "" => false
// "gaurav" => true

let num=33
let stringNum=String(num)
// console.log(stringNum)
// console.log(typeof stringNum)

// *******************Operations***********************

let value=3
let negValue=-value
// console.log(negValue)

/*
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)   // 2^2
console.log(2**4)   // 2^4
console.log(2/3)
console.log(2%3)
console.log(5.678/2.33)
*/

let str1="hello"
let str2="gaurav"
let str3=str1+" "+str2
// console.log(str3)

// All the below code are confusing and no need to write confusing code. A code should be easily readable.

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")

// console.log(3 + 4 % 5 * 6)  
/*
4 % 5 = 4 (3 + 4 * 6) 
4 * 6 = 24 (3 + 24) 
3 + 24 =27
*/ 

// console.log(true)
// console.log(+true)       // Converts true to its number equivalent,i.e, 1
// console.log(+"")         // Converts ""(empty string) to its number equivalent,i.e., 0

let num1,num2,num3

num1 = num2 = num3 = 2+2
// console.log(num1)
// console.log(num2)
// console.log(num3)

// Increment and Decrement Operators

let a,b

console.log("Postfix Increment")
a=3
b=a++
console.log("a= "+ a)
console.log("b= "+ b)

console.log("Prefix Increment")
a=3
b=++a
console.log("a= "+ a)
console.log("b= "+ b)

console.log("Postfix Decrement")
a=3
b=a--
console.log("a= "+a)
console.log("b= "+b)

console.log("Prefix Decrement")
a=3
b=--a
console.log("a= "+a)
console.log("b= "+b)