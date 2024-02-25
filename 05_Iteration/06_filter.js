


// const coding = ["js", "ruby", "java", "python", "cpp"]


//gives error because we cann not hold for each loop in any variable

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);



//filter 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myNewNums = myNums.filter( (num) => num >= 6 )
console.log(myNewNums);


//we can also do this using for each loop but in this case we can not hold this on any variable
const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )

console.log(newNums);




// perform filter operations on books
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  //fetch the data whose edition is greater then 2010
let userBooks = books.filter( (bk) => bk.edition > 2010 )
console.log(userBooks);


//hear we can use return keyword because we can open the scope {}
userBooks = books.filter( (bk) => {
    return bk.genre === 'History'
} )

console.log(userBooks);


//we want to fetch the data whose edition is > 2010 and publication is > 2009

userBooks = books.filter( (bk) => {
    return bk.edition > 2010 && bk.publish >= 2009
} )

console.log(userBooks);
