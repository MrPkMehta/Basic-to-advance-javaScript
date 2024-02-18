//how to declere object as singleton or constructor  

// const tindereUser = new Object() //we can also decleare object like this


const tindereUser = {}

//to add the data in the objects
tindereUser.id = "124asv"
tindereUser.name = "samm"
tindereUser.isLoggedIn = false

console.log(tindereUser); 


//we can add multiple objects inside the objects
const regularUser = {
    email: "aadf@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Harsh",
            lastName: "Mehta"
        }
    }
}

//to access the objects firstName
console.log(regularUser.fullName.userFullName.firstName);


//To merge object
const obj1 = {1: "a", 2: "B", 3: "c"}
const obj2 = {4: "a", 5: "B", 6: "c"}

const obj3 = {obj1, obj2}

//assign helps to copy the object target and source
const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);

//spread operator is also help to copy the object
const obj5 = {...obj1, ...obj2}
console.log(obj5);


//It will gives all the keys  and the type is array
console.log(Object.keys(tindereUser));

//It will givesa all the values aand the type is array
console.log(Object.values(tindereUser));


//It will give all the entries of the data in the array format of each key values pair
//OUTPUT => [ [ 'id', '124asv' ], [ 'name', 'samm' ], [ 'isLoggedIn', false ] ]
console.log(Object.entries(tindereUser));




