"use strict"; //treat all js code as newer verson

// alert(3 + 3) //we are using node.js, not browser in browser we get popup

//tc39.es and mdn => to read javascript documentation

let name = "pk";
let age = 20;
let isLoggedIn = true;
let state = null;

// primtive data type

// number => 2 to power 53
//bigint
//string => "" or ''
//boolean => true/false
//null => standalone value ,value not assinged
//symbol => unique



//non primtive datatype 



//object, array, function 
console.log(typeof undefined); //undefined
console.log(typeof null); //object

const heros = ["marvel", "ritik", "tiger"];
console.log(heros);

let myObj = {
    name: "priymanshu",
    age: 20
}

console.log(myObj.age);

const myFunction = function() {
    console.log("Hello World");
}

const callFunction = myFunction


console.log(myFunction());


// +++++++++++++++++++++++++++++++++++++++++

//stack (primtive), Heap (Non primative)

// primtive goes into stack

// non primtive goes into heap
