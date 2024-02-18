const name = ["pk", "aditya", "harsh"];
const name1 = ["nikhil", "ankur", "anand"];

 name.push(name1);
 console.log(name); //consider 2nd array as a one element

name.concat(name1);
console.log(name); //it will also consider 2nd array as one element

 const allNames = name.concat(name1)
 console.log(allNames); //merges two array 


const allNmes = [...name, ...name1]
console.log(allNmes); //spread operator gives the same result as concat but it is most usable


const arrayInside = [1,2,3,7, [5,7,6], [9,8,4,3,[5,7,36,20]]] 
const NewArr = arrayInside.flat(Infinity) //Flat is used to convert all the multidimensional array into the one array, and infifty is used to give the depth of the array
console.log(NewArr);

console.log(Array.isArray("Priyamanshu")); //gives false because there is no any array

console.log(Array.from("Priyamanshu")); //now it converts it into array

console.log(Array.from({name: "Priyamanshu"})); //gives empty object because we did not define from which the array is made that is key or values


let score = 500
let score1 = 800
let score2 = 900
let score3 = 1000

console.log(Array.of(score,score1,score3,score2)); //of is conveert the all the values into array



