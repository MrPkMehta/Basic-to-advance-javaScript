//array

//Array index starts from 0
//It contains all the data types

const myArr = ["pk", "aditya", "nikhil",true, "harsh", 500];

console.log(myArr); //to print the array

console.log(myArr.indexOf("harsh")); //gives the index of the harsh taht is 4

console.log(myArr[4]); //gives the value at that index


//array methods

myArr.push("priyanshi");//add to the last index
console.log(myArr); 

myArr.pop() //remove from the last index
console.log(myArr);

myArr.unshift("tanu"); //add value to the 1st index
console.log(myArr);

myArr.shift() //remove value from the 1st index
console.log(myArr);

console.log(myArr.includes(500)); //check the value is in array ort not gives boolean result

const newArr = myArr.join() //join converts the array into string
console.log(newArr);
console.log(typeof newArr); //string


console.log("A ", myArr);
const myarr1 = myArr.slice(1, 3); //slice the value and not include the last value hear it is 3rd index it will take only upto 2nd inex
console.log(myarr1); //original array is not change

console.log("B ", myArr); //B  [ 'pk', 'aditya', 'nikhil', true, 'harsh', 500 ]

const myarr2 = myArr.splice(1, 3); //it will include the index and print from index 1 to 3 but it changed the original array

console.log(myarr2); //OUTPUT => [ 'aditya', 'nikhil', true ]
console.log("C ", myArr); //OUTPUT => C  [ 'pk', 'harsh', 500 ]


