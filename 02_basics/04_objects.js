//const tinderUser=new Object()  // singleton object
const tinderUser={}              // non-singleton object


tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Gaurav",
            lastname:"Sharma"
        }
    }
}

// console.log(regularUser)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname)

const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"a",
    4:"b"
}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
// console.log(obj3)

// Generally, the data which comes from the database is in the form of 
// array of objects.

const users=[
    {
        id:1,
        email:"gaurav1@gmail.com"
    },
    {
        id:2,
        email:"gaurav2@gmail.com"
    },
    {
        id:3,
        email:"gaurav3@gmail.com"
    },
    {
        id:4,
        email:"gaurav4@gmail.com"
    },
    {
        id:5,
        email:"gaurav5@gmail.com"
    }
]

// console.log(users[1].email)
// console.log(tinderUser)

// Extracting keys,values and entries of an object as arrays

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(Object.keys(tinderUser).length)

// Checking whether an object has a particular key or not

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))
// console.log(tinderUser.hasOwnProperty("isLogged"))

// Object de-structure  ---> Accessing data of an object easily

const course={
    coursename:"JS in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}

// console.log(course.courseInstructor)

const {coursename}=course
const {price}=course
const {courseInstructor:instructor}=course

// console.log(coursename)
// console.log(price)
// console.log(courseInstructor)
// console.log(instructor)

// Object de-structure in React

// const navbar=({company}) => {

// }

// navbar(company="gaurav")

// JSON API Introduction --> API return data in form of JSON

// JSON API's can be in the form of objects or arrays.
// JSON API object keys and values are in the form of strings except 
// numbers.

// Object form

// {
//     "name":"Hitesh",
//     "coursename":"JS in hindi",
//     "price":"Free"
// }

// Array form

// [
//     {},
//     {},
//     {}
// ]