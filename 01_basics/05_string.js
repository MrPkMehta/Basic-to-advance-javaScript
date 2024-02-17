const name = "priyamanshu"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //best way to write 

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); //gives the char at 2nd index
console.log(gameName.indexOf('t')); //give the index of t

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString); //it will slice the element and does not incluedde lat element

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); //it will the white spaces

const url = "https://pk.com/pk%20mehta"

console.log(url.replace('%20', '-')) //it will replaces the %20 with -

console.log(url.includes('pk')) //it will checks does the url contain sundar of not

console.log(gameName.split('-')); //it will split the string