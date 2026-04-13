const marvel_heroes=["Thor","Ironman","Spiderman"]
const dc_heroes=["Superman","Ironman","Batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)

// ***** Syntax of push operation ******
// arr1.push(arr2,arr3,....)
// All the elements will be pushed into the arr1 array


// console.log(marvel_heroes)
// console.log(marvel_heroes[3])
// console.log(marvel_heroes[3][1])
// console.log(marvel_heroes[2][1])

// const allHeroes=marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)

// ***** Syntax of concat operation ******
// const finalArr=arr1.concat(arr2,arr3,...)
// All the elements will be stored in the finalArr

// push operation moves the elements of all arrays into one array
// concat operation merges two or more arrays and produces a new array

// const all_new_heroes=[...marvel_heroes,...dc_heroes]
// console.log(all_new_heroes)

// ***** Syntax of spread operation ******
// const finalArr=[...arr1,...arr2,...arr3,...]
// All the elements will be stored in the finalArr

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array)

// console.log(Array.isArray("Gaurav"))
// console.log(Array.from("Gaurav"))
//console.log(Array.from({name:"Gaurav"}))  // interesting case
// When you try to make arrays with objects, you have to tell that whether 
// you want array of key pairs or array of value pairs

let score1=100
let score2=200
let score3=300

// console.log(Array.of(score1,score2,score3))

const array_new=[300,100,200]
console.log(array_new.sort())
console.log(array_new.reverse())

// In sort and reverse operation, original array gets altered