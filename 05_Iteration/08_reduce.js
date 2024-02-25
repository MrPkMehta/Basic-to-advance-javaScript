//reduce :- used in shoping Cart
//accumelator means the value is added and store on that  and currunt value means after adding what is the value inside it see mdn
//also needs one initial value

let myNums = [1, 2, 3, 4]

let myTotal = myNums.reduce(function (acc, currVal) {
    console.log(`acc: ${acc} and currVal ${currVal}`);
    return acc + currVal
}, 0) //hear the 0 refers the initial value 

console.log(myTotal);



//using arrow function
//hear we do not use return keyword because we cdo not use {}

const myTotalCart = myNums.reduce( (acc, currVal) => acc + currVal,0 ) 


console.log(myTotalCart);



//reduce on object inside the array
const shopingCart = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "java Course",
        price: 1900
    },
    {
        itemName: "web dev Course",
        price: 5900
    },
    {
        itemName: "c++ Course",
        price: 1999
    },
]


const totalCartBill = shopingCart.reduce( (acc, item) => acc + item.price, 0 )

console.log(totalCartBill);


