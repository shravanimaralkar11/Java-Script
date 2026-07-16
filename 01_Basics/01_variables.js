const accId = 12345
let accEmail = "shra@example.com"
var accPass = "12345"
accCity = "New York"
let accState;  //gives undefined because it is declared but not initialized

// accId = 54321 //This is not allowed because accId is a constant variable and cannot be reassigned.
console.log(accId);

accEmail = "riya@example.com"
accPass = "54321"
accCity = "jaipur"


/*
Prefer not to use var
because of issue in black scope and funtional scope
*/ 

console.table([accId, accEmail, accPass, accCity, accState]);