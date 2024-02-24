//falsy value
/** false,  0, -0, BigInt 0n, "", null, undefined, NaN*/



//truthy value
/**  "0", "false", " ", [], {}, function(){}, */

//truthy value
const userEmail = "pk@gmail.com"

if(userEmail) {
    console.log("got user email");
} else {
    console.log("user email not found");
}


//to check the condition of the array
const empArr = [] 
if(empArr.length === 0) {
    console.log("it is empty array");
} else {
    console.log("array has more than one element");
}



//to check the condition of the object
//we have to first convert it into array then check lengths, when we fetch object.keys or object.values it converted into array
const  empObject = {}
if(Object.keys(empObject).length === 0) {
    console.log("empty object");
} else {
    console.log("Object is not empty");
}



//Nullish Coalescing Operator (??): null undefined

//it is made for null or undefined value means if we get null value then it will fetch other value
//it will fetch first value
let val;
val = 5 ?? 50 //it will give 5
val = null ?? 30 //it will give 30
val = undefined ?? 37 ?? 90 //it will give 37
val = undefined ?? null ?? 100 //it will give 100

console.log(val);


//Ternary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 100 ? console.log("less than or eqaul to 100") : console.log("more than 100");
