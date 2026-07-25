// Immediately Invoked Function Expressions (IIFE)
// 1. to immediately invoke function
// 2. IIFE is used to avoid global scope pollution by creating a private scope, so variables inside it do not become global or conflict with other code.

// function chai() {
//     console.log("DB CONNECTED");
// }
// chai()

(function chai() {
    // named IIFE
    console.log("DB CONNECTED");
})(); // whenever writing nect iife use ; after completing 1st iife

// ()()

( (name) => {
    // simple IIFE
    console.log(`DB TWO CONNECTED ${name}`);    
} ) ("shra")