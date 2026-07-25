// if
const isUserLoggedIn = true

// if(isUserLoggedIn){

// }

// if (2 == "2"){
//     console.log(`executed`);   
// }

// if (2 === "2"){
//     console.log(`executed`);  // === will check data type also
// }
// <, >, <=, >=, ==, !=, ===, !==(It compares both value and data type.)

const temprature = 25

// if(temprature < 50){
//     console.log(`less than 50`); 
// }else {
//     console.log(`greater then 50`);
// }
// console.log(`executed`);

const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`Power: ${power}`);
// }

// SHORTHAND 

// const balance = 1000

// if(balance > 500) console.log("test"), console.log("test2"); //Multiple lines but not readable

// if(balance > 500) console.log("test");

// const balance = 1000

// if(balance < 500){
//     console.log(`less than 500`);
// }else if(balance < 750){
//     console.log(`less than 750`); 
// }else if(balance < 900){
//     console.log(`lest than 900`);
// }else{
//     console.log(`less than 1200`);    
// }

const UserLoggedIn = true
const debitCard  = true
const loggedInFromGoogle = true
const loggedInFromEmail = false

if(UserLoggedIn && debitCard && 2== 2){
    console.log("allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log(`User Logged in`);  
}