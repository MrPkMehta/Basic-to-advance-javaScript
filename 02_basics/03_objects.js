// objects 


//We can pass all the things in the object like array, function , or even object
//objects always take keys as a string

const mySym = Symbol("Key1") //it shawes uniqueness

const jsUser = {
    name: "priyamanshu",
    "full name": "priyamanshu Kumar",
    age: 19,
    [mySym]: "Key1",
    location: "bihar",
    email: "pk@google.com",
    isLoggedIn: false,
    LastLogInDays: ["MOnday", "Sunday"]
}

console.log(jsUser); //to console the objects

console.log(jsUser[mySym]); //to access the symbol we did not use invited ""

//to access the object
//by using . operator
console.log(jsUser.name)

//By using []
console.log(jsUser["email"]);

//to update the object values
jsUser.isLoggedIn = true 
console.log(jsUser);

jsUser["email"] = "pk@chatgpt.com"
console.log(jsUser); //2nd way to update the data

console.log(jsUser["full name"]);


// Object.freeze(jsUser) //it will freeze the object so that we cannot update further
jsUser.name = "tanu"
console.log(jsUser);


//to add functions in the objects

jsUser.greeting = function() {
    console.log("Hello JS User");
}

jsUser.greeting2 = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());