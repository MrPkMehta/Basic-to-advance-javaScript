//for each knows the maximum properties of the array like length, indexes etc

const coding = ["js", "ruby", "cpp", "python"]

//foreach requers callback function means the function whoch does not have name is called callback function 
// we can pass any parameters as a name inside the callback function

//it will print all the valuees inside the array
coding.forEach( function (value) {
    // console.log(value);
} )


//we can also make arrow function as a callback

coding.forEach( (item) => {
    // console.log(item);
} )


//we can also make the function and pass as a callback

function printMe(item) {
    // console.log(item);
}
//hear we do not execute the function we have to give only referencre to the function
coding.forEach(printMe)



//for each do not contain only item it will contain more things like index and whole array
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )



//for each loop on object inside array [{}]

const myCoding = [
   {
    languageName: "javascript",
    languageFile: "js"
   },
   {
    languageName: "python",
    languageFile: "py"
   },
   {
    languageName: "Java",
    languageFile: "java"
   }
]

//this will print all the values inside the array
myCoding.forEach( (item)=> {
    console.log(item);
} )


//this will print languagename of all the object indside the array
myCoding.forEach((element) => {
    console.log(element.languageName);
});
