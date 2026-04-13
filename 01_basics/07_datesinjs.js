// Dates  --> It is an object

let myDate=new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())
// console.log(myDate.toUTCString())
// console.log(typeof myDate)

// let myCreatedDate=new Date(2026,0,28)
// let myCreatedDate=new Date(2026,0,28,5,3)
// let myCreatedDate=new Date("2026-04-13")
// let myCreatedDate=new Date("04-13-2026")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now()

// console.log(myTimeStamp)   ---> returns milliseconds from 1970
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
// console.log(newDate)
// console.log(newDate.getDay())
// console.log(newDate.getMonth())

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))

console.log(newDate.toLocaleString('default', {
    weekday: "narrow"
}))

console.log(newDate.toLocaleString('default', {
    weekday: "short"
}))