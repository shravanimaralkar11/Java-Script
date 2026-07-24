function myName() {
    console.log("S");
    console.log("H");
    console.log("R");
    console.log("A");
}

// myName()

function addtwoNum(num1, num2) {  // num1 & num2 are parameters
    console.log(num1 + num2);   
}
// addtwoNum(4, 4) // here these are arguments i.e 4


function addtwoNum(num1, num2) {  // num1 & num2 are parameters
    // let result = num1 + num2
    // return result; 
    return num1 + num2
}

const result = addtwoNum(25, 5)
// console.log("Result: ", result);

function userLoginMsg(username) {
    // if(username === undefined){
    if(!username){
        console.log("Enter a username");
        return
        
    }
    return `${username} Just Logged In`
}
// userLoginMsg("Riya") //Will Print Nothing we don't havw returned log yet

// console.log(userLoginMsg("")) // Just Logged In
// console.log(userLoginMsg()) // Undefined Just Logged In
// console.log(userLoginMsg("Riya")) // Riya Just Logged In


function calculateCarPrice(...num1) { // rest operator == spread oepertor seprated based on usecases
    return num1
}

// console.log(calculateCarPrice(5));
// console.log(calculateCarPrice(400, 500, 600)); // OUTPUT ==> [ 400, 500, 600 ]

function calculateCarPrice(val1, val2, ...num1) { // rest operator == spread oepertor seprated based on usecases
    return num1
}

// console.log(calculateCarPrice(400, 500, 600, 700, 800));


// OBJECT
const user = {
    username : "Shravani",
    price : 255
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username}, price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username : "Shra",
    price : 800
})

// ARRAY
const mynewArray = [100,200,300,400,500]

// SINGL ELEMENT
function returnSecondValue(getArray) {
    return getArray[0]
}

// console.log(returnSecondValue(mynewArray));
// console.log(returnSecondValue([100,200,300,400,500]));

// ALL THE EMENETS OF ARRAY
function returnSecondValue(getArray) { 
    return getArray
}
console.log(returnSecondValue(mynewArray));
