// for of loop

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num)
}

const greetings="Hello World!"

for(const greet of greetings){
    // console.log(`Each char is ${greet}`)
}

// Maps (key,value pairs) ---> holds unique keys

const map=new Map()
map.set('IN',"INDIA")
map.set("USA",'United States of America')
map.set('FR','France')
map.set("IN","INDIA")

// console.log(map)

for (const key of map) {
    console.log(key)
}

for(const [key,value] of map){
    // console.log(key, ':-', value)
}

for(const [key] of map){
    // console.log(key)
}

for(const [,value] of map){
    // console.log(value)
}

// for of loop does not iterate over objects. In simple words, we cannot 
// iterate over objects using for of loop.