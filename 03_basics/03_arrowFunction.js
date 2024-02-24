// this refers to the current context of the scope

const user = {
    usernamae: "Nikhil",
    price: 200,

    welcomemessege: function() {
        //if we give only this to hear then it will console all the objects
        console.log(`${this.usernamae}, welcome to website`);
    }

}

user.welcomemessege() //hear the username nikhil is printed

user.usernamae = "Harsh"
user.welcomemessege() //hear the username is harsh


console.log(this); //this gives the empety {}


//but if we cannot use the this keyword in a function



//hear this gives the undefined means inside the function this keyword do not the data
function chai() {
    let username = "priyamanshu"
    console.log(this.username);
}

// chai()

const tea = function chai(){
    let usernamae = "Priyamanshu"
    
    console.log(this.username);//gives undefined
}

// tea()




//arrow function ()=>{}
//this is called arrow function


//basic arrow function
//explicit return
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(5,9));

//if we use () then we can not use return keyword
//implicit return

const addTwoNum = (num3, num4) => (num3 + num4)

console.log(addTwoNum(6,10));



//object in arrow function

const myName = (userName) => ({userName: "priyamanshu"})

console.log(myName());


