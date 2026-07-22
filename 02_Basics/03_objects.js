//object literals

const myKey = Symbol("Key1");

const jsUser = {
    name: "John",
    [myKey]: "value",
    "full name": "John Doe", // This will not work with dot notation we have to use ["full name"]
    age: 30,
    location: "New York",
    email: "john@example.com",
    isLoggedIn: false,
    lastLogin: ["Monday", "Saturday"]   
}

console.log(jsUser.email)  // .email will take it as a string
console.log(jsUser["email"]); // here we have to use ["email"]
console.log(jsUser["full name"]); // here we have to use ["full name"]
console.log(typeof jsUser[myKey]); // here we have to use the symbol as a key


//How to change the value of a key in an object
jsUser.age = 35;
console.log(jsUser.age); // Output: 35

// How to fix one key as a permanent key in an object
// Object.freeze(jsUser); // This will make the object immutable, meaning you cannot change its properties or add new ones
jsUser.age = 40; // This will not change the age property
console.log(jsUser.age); // Output: 35

console.log(jsUser);


jsUser.greeting = function() {
    console.log("Hello, From the greeting method");
}

jsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(jsUser.greeting()); // Output: Hello, From the greeting method
console.log(jsUser.greetingTwo()); // Output: Hello Js User, John