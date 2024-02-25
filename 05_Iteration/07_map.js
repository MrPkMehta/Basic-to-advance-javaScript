const myNumbers = [1, 2, 6,9 ,7, 20, 10, 18 ]

let newNums = myNumbers.map( (num) => {
    return num * 10
} )

console.log(newNums);
//OUTPUT
/** [
  10,  20,  60,  90,
  70, 200, 100, 180
] */


//channig means multiple method in one go
newNums = myNumbers.map( (num) => num * 10 )
                .map( (num) => num + 1 )
                .filter( (num) => num > 90 )


console.log(newNums);
//OUTPUT:
/** [ 91, 201, 101, 181 ] */