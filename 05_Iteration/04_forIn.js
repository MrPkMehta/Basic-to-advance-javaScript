


//NOTE
//We do not use for in loop in Map()
//we can use for in loop in array also
//we can not use for of loop in object


//for in loop in object

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

//it will print all keys
for (const key in myObject) {
   console.log(key);
}


//if we want keys and values both then we have to write objName and key in []

//this will print keyas and values both
for (const key in myObject) {
    console.log(`${key} is the shortcut for ${myObject[key]}`);
}



//for in loop in array

const programming = ["js", "ruby", "py", "java", "cpp"]

//this will print only keys that is indexing
for (const key in programming) {
    console.log(key);
}

//to fetch values
//it will give the value of the array
for (const key in programming) {
    console.log(programming[key]);
}



