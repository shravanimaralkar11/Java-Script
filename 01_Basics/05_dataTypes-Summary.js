// Premetive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Reference (Non-Premetive) the reference of this is allocated in heap memory.

// Array, Object, Function


// JavaScript is a dynamically typed language.

// This means the type of a variable is determined at runtime, and the same variable can hold different types of values.

// let x = 10;        // Number
// console.log(typeof x);   // "number"

// x = "Hello";       // String
// console.log(typeof x);   // "string"

// x = true;          // Boolean
// console.log(typeof x);   // "boolean"

// The variable x changes from a number to a string to a boolean without any errors.


// ********* SYMBOL **********

// const id = Symbol('123');
// const anotherId = Symbol('123');

// console.log(id === anotherId); // false, because each Symbol is unique, even if they have the same description.

// ********* BigInt **********

// const bigIntValue = 123456789012345n; // The 'n' at the end indicates a BigInt

// console.log(typeof bigIntValue); // "bigint"


// Reference (Non-Premetive) the reference of this is allocated in heap memory.

// Array, Object, Function

const heros  = ["spiderman", "ironman", "thor"] // Array

let myObj = {            // Object
    name: "Shravani",
    age: 22,
    isLoggedIn: true
}

const myFunction = function() {  // Function
    console.log("Hello World");
}

console.log(typeof heros); // "object"
console.log(typeof myObj); // "object"
console.log(typeof myFunction); // "function"

// Data Type of Non-Premetive is "object" except for function which is "function" (Function is Special case). data type of function is actually "object function"




// | Primitive Data Type | `typeof`      |
// | ------------------- | ------------- |
// | Number              | `"number"`    |
// | String              | `"string"`    |
// | Boolean             | `"boolean"`   |
// | Undefined           | `"undefined"` |
// | Null                | `"object"` ⚠️ |
// | BigInt              | `"bigint"`    |
// | Symbol              | `"symbol"`    |

// | Non-Primitive | `typeof`     |
// | ------------- | ------------ |
// | Object        | `"object"`   |
// | Array         | `"object"`   |
// | Function      | `"function"` |


// *******************************************************************

// Stack Memory : Used for storing primitive values(Premetive). creates copy of the value and stores it in stack memory. When we assign a primitive value to another variable, a copy of the value is created in memory. Changes made to one variable do not affect the other.
// Heap Memory : Used for storing reference values (Non-Premetive). changes made to one variable will affect the other. When we assign a reference value to another variable, both variables point to the same object in memory. Changes made to the object through one variable will be reflected when accessed through the other variable.


// *************** EXAMPLE STACK ********************

// let a = 10;
// let b = a;

// b = 20;

// console.log(a); // 10
// console.log(b); // 20

// Step 1
// let a = 10;

// Memory:

// Stack
// +---------+
// | a = 10  |
// +---------+


// Step 2
// let b = a;

// JavaScript reads the value stored in a (which is 10) and copies it into b.

// Memory:

// Stack
// +---------+
// | a = 10  |
// | b = 10  |
// +---------+

// Now there are two separate values.


// Step 3
// b = 20;

// Only b is updated.

// Memory:

// Stack
// +---------+
// | a = 10  |
// | b = 20  |
// +---------+

// So:

// console.log(a); // 10
// console.log(b); // 20



// *************** EXAMPLE HEAP ********************

// Example
// let user1 = {
//     name: "Shravani"
// };

// let user2 = user1;

// user2.name = "Riya";

// console.log(user1.name); // Riya
// console.log(user2.name); // Riya
// Memory
// Stack                     Heap
// +----------------+        +----------------------+
// | user1 ------+  |------->| { name: "Riya" }     |
// |              |  |        +----------------------+
// | user2 ------+  |
// +----------------+

// Both user1 and user2 point to the same object.

// Changing user2.name changes the object itself, so user1 also sees the change.