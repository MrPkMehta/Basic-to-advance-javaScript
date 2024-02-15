const accountId = 14478
let accountEmail = "pk124@gmail.com"
var accountPassword = "14563"
accountCity = "madhepura"
let accountState;

// accountId = 54 

// console.log(accountId); //not allowed to change because it is a constant variable

accountEmail = "pk25@gmail.com"
accountPassword = "4578" 
accountCity = "patna"

/*
 prefer not to use var
 because it is not a functional scope there is a issue in scope 
 */

//  to execute multiple variables at once
console.table ([accountEmail, accountPassword, accountCity, accountState]);