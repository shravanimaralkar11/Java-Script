// for of

// ["", "", "",]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

// for (const num of arr){
//     console.log(num); 
// }

const greetings = "Hello World!"

// for(const greet of greetings){
//     if(greet == " ")
//         continue
//     console.log(greet);   
// }

// Maps

const map = new Map()

map.set('IN', 'India')  // Map stores Unique Value
map.set('USA', 'United State of India')
map.set('Fr', 'France')

// console.log(map);

// for(const key of map){  // Gives values as it is
//     console.log(key);  
// }

// for(const [key, value] of map){  // Gives values as it is
//     console.log(key, ':-', value);  
// }

// const myObject = {
//     game1 : 'NFS',
//     game2 : 'Spiderman'
// }

// for (const [key, value] of myObject){ // This will not work for object
//     console.log(key, ':-', value);   
// }