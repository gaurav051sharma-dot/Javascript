// for in loop

const myObject={
    js: "Javascript",
    cpp: 'C++',
    rb: 'Ruby',
    swift: "Swift by Apple"
}

for (const key in myObject) {
    // console.log(key)
}

for (const key in myObject) {
    // console.log(myObject[key])
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming=["js","rb","py","java","cpp"]

for(const key in programming){
    // console.log(key)
}

for(const key in programming){
    // console.log(programming[key])
}

// for in loop does not iterate over maps. In simple words, we cannot 
// iterate over maps using for in loop.