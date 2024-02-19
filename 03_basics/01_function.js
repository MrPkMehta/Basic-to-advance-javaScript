// function 
//is is a block of code which is reusable in the code

//function defination
function basicFunction (){
    console.log("hello World");
}

//function calling
basicFunction()

//when we passs anything inside the function is called parameters at function calling 
function addTwoNum(num1, num2) {
    let result = num1 + num2
    return result

    console.log("pk")//this will never execute
}

//when we call function and then pass anything is called arguments

const result = addTwoNum(5, 8)
console.log(result);


function addTwoNum(num1, num2) {
    const result = num1 + num2
}

addTwoNum(25,3) //if we did not give any arguments to the functin but it requires it , then the result is undefined


//if we did not the return statement to the function means we can not assing it to the variable and call that variable
function myName() {
    console.log("Priyamanshu");
}

const name = myName()
console.log(name); //undefined because we did not use the return keyword inside the function



//sam is a default value if we did not pass any value to the arguments then it is displayed
function login(userName = "sam") {
    return `${userName} just loggid in`
}

const userLoggidIn = login("pk")
console.log(userLoggidIn);




//when we dont know the number of arguments then we use rest operater ...value

function cartValue(...number1) {
    return number1
}

console.log(cartValue(200,500,600)) //print all the cart values in the array form



//hear when we print the 1st two values are not print when we call number2 because this is in val1 and val2
function cartValue1(val1, val2, ...number2) {
    return number2
}

console.log(cartValue1(200,500,600,700,600,100));



//we can also passed the object in the function
const user = {
    username: "harsh",
    salary: 91000
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} salary is ${anyObject.salary}`);
}

console.log(handleObject(user));



//we can also passed the array in the function

const  myArr = [500,200,300,400,900]

function fetchMyArr(getArray) {
    return getArray[3]
}

console.log(fetchMyArr(myArr));
console.log(fetchMyArr([200,800,900,100,400]));//we can also pass the array as the arguments
