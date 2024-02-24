// if statement
const isUserLogged = true
if(isUserLogged) { //condition check
    console.log("yes");
}

if(false) {

}


//check condition
if (2 == 2) {
    console.log("it is equal");
}

//comparasion operator
/**<, >, <=, >=, ==, !=, ===(it will check type also) */


//test the  condition and then return
if(5 === "5"){ //hear the type checkeng is also done that is why it is not executed 
    console.log("executed");
} else {
    console.log("not executed");
}


const score = 200

if(score > 100) {
    const power = "fly"
    console.log(`User power ${power}`);
}

// console.log(`User power ${power}`); error messege because the power is out of scope, but if we use var then it will be exeuted because var do not follow the rule of scope




//we cannot write the code like this, bad practice
const balance =1000

if(balance > 500) console.log("test"), console.log("test2");



//multiple condition
const accBalance = 2000

if(accBalance < 1200) {
    console.log("less than 1200");
} else if(accBalance < 1500) {
    console.log("balance less than 1500 nad greter than 1200");
} else {
    console.log("greater than 1500");
}




//real life example
const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle =false
const loggedInFromEmail = true


// && => if both are true 
if(isUserLoggedIn && debitCard) {
    console.log("Allow to buy course");
}


// || => if any one is true
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}

