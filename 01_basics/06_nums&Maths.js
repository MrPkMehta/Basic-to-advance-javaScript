const score = 400
console.log(score); //it will print 400 and it is number

const balance = new Number(200);
console.log(balance); //to update the value or current instance of the class

console.log(balance.toString().length); //convert number into string and checks length

console.log(balance.toFixed(1)); //it will gives the value after the decimal place hear it is one

console.log(balance.toPrecision(4)); //it will print the three value only and gives the priority before the decimal place. 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //it will place the , between the number to easily read the big number OUTPUT = 10,00,000



//**********MATHS********** */
// by default library in js 
console.log("\n*****************MATHS*************");
console.log(Math);

console.log(Math.abs(-8)); //it will the give the +ve value

console.log(Math.round(6.8)); //round of the value and gives the value 7

console.log(Math.ceil(4.9)); //it will give the value by incrising +1 before point like hear it will gives 5

console.log(Math.floor(6.9)); //it will exclude the point value

console.log(Math.min(5, 6, 1, 3, 0, 9)); //gives the minimum value

console.log(Math.max(5, 9, 3, 0, 7, 10)); //gives the maximum value 


console.log(Math.random()); //it will gives the value between the 0 to 1 and gives in random

console.log(Math.random() * 10); //it will multiply the number by 10 but again therir is possibility to display 0 because if the random nukber is 0.01 then multiply by 10 gives the value 0;

console.log((Math.random() * 10) + 1); //now it will give the the minimum value 1.somthing

console.log(Math.floor(Math.random() * 10) + 1); //it will give the value before the decimal point

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //now it will give the value >then min and <max.

