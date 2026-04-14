// Objects can be created in two ways using cnstructor and object literals.
// Using constructors, singleton object is created which we will study 
// later.Using object literals, singleton object is not created and we 
// will study now about object literals.

// Singleton
// Object.create

// Object literals

// Symbol creation

const mySym=Symbol("key1")

const JsUser={
    name: "Gaurav",
    "full name": "Gaurav Sharma",
    [mySym]: "mykey1",
    age: 23,
    location: "Kolkata",
    email: "gaurav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser.full name)  ---> will give an error
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

/*

JsUser is an object and name is a key and Gaurav is a value.
An object can have primitive data types, objects, arrays,etc.
By default all keys are strings but we do not have to mention it in "".
You can access values in two ways - object_name.key_name and 
object_name[key_name].
If you mention the key in "" like "full name", you can access the value 
only in one way and that is object_name[key_name].

Symbol is a primitive data type but if you want to use it in objects the
approach is different as compared to other primitive data types.
You have to first declare the symbol and then you can use it in object as 
shown here.

*/

// Changing values of keys in objects

JsUser.email="gaurav@yahoo.co.in"
// console.log(JsUser)

// Freezing the object so that nobody could change the values of keys 
// in the object

// Object.freeze(JsUser)
JsUser.email="gaurav@microsoft.com"
// console.log(JsUser)

// Using function in an object

JsUser.greetingOne=function(){
    console.log("Hello JS user")
}

JsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`)   // String interpolation
}

JsUser.greetingOne()
JsUser.greetingTwo()

// If you want to access a key of the same object in which you are doing
// operation, use "this" keyword