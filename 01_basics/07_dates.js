//DATES 


let myDates = new Date()
console.log(myDates); //it will give this much large output 2024-02-17T15:27:15.147Z which is unreadble

console.log(myDates.toString()); //it will give the date in cordinates format like  "Sat Feb 17 2024 15:28:50 GMT+0000 (Coordinated Universal Time)"

console.log(myDates.toDateString()); //it will give the simple date and day format like this "Sat Feb 17 2024"

console.log(myDates.toTimeString()); //gives output "15:44:23 GMT+0000 (Coordinated Universal Time)"



console.log(typeof myDates); //object

// ********************* to create dat************

let createdDate = new Date(2024, 10, 4); //hear the month index start from 0. 
console.log(createdDate.toDateString()); //OUTPUT IS => "Mon Nov 04 2024" 


let createdDateTime = new Date(2024, 1, 17, 10, 20); //year/month start with index 0/ date/ hour/min
console.log(createdDateTime.toLocaleString()); //it will give the date and time also "2/17/2024, 10:20:00 AM"


let newTimeStamp = Date.now()

console.log(newTimeStamp); //gives value in milisecond

console.log(Math.floor(newTimeStamp / 1000)); //to convert in seconds used floor to remove the decimal points

let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth() + 1); //+1 because month index starts from 0
console.log(newDate.getDay()); //it will give day