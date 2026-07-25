const userEmail = []

// if(userEmail){
//     console.log("Got User Email");
// }else{
//     console.log("Dont habe user email");    
// }

// falsy values
// false, 0, -0, NaN, Undefined, BigInt 0n, "", null

// truthy values
// "0", "false", [], {}, function (){}

// if(userEmail.length === 0){
//     console.log("Array is Empty");
// }

const myobj = {}

if(Object.keys(myobj).length === 0){
    console.log("Object is Empty");
}

// Nullish Coalscing Operator (??): null undefined

let val1
// val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 15

// console.log(val1);


// Terniary Operator
// condition ? true :false

const price = 100
price >= 80 ? console.log("greater than 80") : console.log("less than 80");

