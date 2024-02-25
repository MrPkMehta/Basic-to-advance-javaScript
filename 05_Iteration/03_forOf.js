//for of

const arr =[1, 2, 5, 8, 6, 10]

for (const num of arr) {
    console.log(num);
}


//for of
//this will print each value 
const greetings = "hello World"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}


//maps
//it is the object holds key values pair and remembers the original iteration order of the key
//no duplicate values in it

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United States Of America")
map.set('IN', "INDIA") //duplicate which is not printed
map.set('FR', "France")

console.log(map);


//this will print all the key values in array format, but if we want only keys and value then we want to give square []
for (const key of map) {
    console.log(key);
}

//this will print key and values 
for (const [key, values] of map) {
    console.log(key, ':-', values);
}



//for of on objects 
//object is not iterablr through for of loop
const myObj = {
    'gane1' : "NFS",
    'game2' : "Spiderman"
}

//gives error myObj is not iterable 
//we can not use for of loop for object 
// for (const [key, values] of myObj) {
//     console.log(key, ':-', values);
// }

