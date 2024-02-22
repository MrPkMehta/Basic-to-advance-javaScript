//scope any code insise the curly braces is called scope of that code{} means that code do not fetch data from outside that block or scope


//it is outside of the  scope
let a  = 10
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);

//when we give the scope like if else function then we cwan fetch the code only within the scope

//there is a problem with var keyword because this keyword do not follow the scoping criteria so we should avoid using the var

if(true) {
    let z = 15 //we cannot excess it outside
    console.log(z);
    // var z = 15 
}

// console.log(z); //gives z will not defined which is true

// console.log(z); //if we use var then it will be executed because var doesnot follow the scoping rule


// scoping concept 
// Inner variable can access the outer variable but outer variable cannto access the inner variable

function one() {
    const username = "priyamanshu"

    function two() {
        const website = "youtube"
        console.log(username);
        console.log(website);

    }
    // console.log(website); //it will not able to access it because out of the scope
    two()
}
one()


//if else case

if(true) {
    const username = "priyamanshu"

    if(username === "priyamanshu") {
        const website = " youtube"
        console.log(username + website); //it is acceseble
    }
    // console.log(website); //gives error ..out of scope
}

// console.log(username); //gives error .. out of scope


//other type to declare function
console.log(addOne(4)) //it will also execute

function addOne(num1) {
    return num1 + 1;
}

console.log(addOne(4)) //if we call this function above the function then also it is execute



//another way 

console.log(addTwo(6)); // gives error ..not execute because we put the function in a variable and we can not call the variable before its declaration



const addTwo = function addThree(num2) {
    return num2 + 2
}

console.log(addTwo(6)); //it will execute hear only but if we put this on above the function declaration then it will not execute