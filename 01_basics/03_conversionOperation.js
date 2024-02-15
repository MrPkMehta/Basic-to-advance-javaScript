console.log(".....Number to string and vise versa.....");

let score = 33;
let score1 = "33abc" 



// convert number into string but give NaN
console.log(typeof score);
let valueInString = String(score);
console.log(typeof valueInString);


// convert strig into number
console.log(typeof (score1));
let valueInNumber = Number(score1);
console.log(typeof valueInNumber);


// "33" => 33 convert into number
// "33abc" => NaN not a number
// true => 1; false => 0


/*
Boolean Conversition
*/
console.log(".....Boolean conversion.....");

let isLoggedIn ="pk"; 
let isLogedOut = "";
let loggedIn = true;
let loggedOut = 0;

let booleanIsLoogedIn = Boolean(isLoggedIn) 
console.log(booleanIsLoogedIn);
console.log(typeof loggedIn);

let BolleanisLogedOut = Boolean(isLogedOut)
console.log(BolleanisLogedOut);

console.log(typeof loggedOut);
let BooleanConversion = Boolean(loggedOut)
console.log(typeof BooleanConversion);

// 1 => true; 0 => false
//"" => false
// "pk" => true