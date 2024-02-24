//immedietly invoked function expression (iife)
//to imediatly execute
//do not get pollute from the global scope
//to remove the problem of global scope
//to connect database and immediatly invoked


//simple function
// function pk() {
//     console.log(`This is priyamanshu`);
// }
// pk()



//immedietly invoked function we have to rap into parenthesis and remove execution
(function chai() {
    console.log(`Db Connected`)
}) ();



//if we want to write another iife then we have to give ; at the end

//arrow function
((myName) => {
    console.log(`My Name is ${myName}`);
}) ("priyamanshu") //passing parameters 

