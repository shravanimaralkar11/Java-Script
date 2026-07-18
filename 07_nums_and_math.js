const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.valueOf());  //Gives only value

// console.log(balance.toString().length); //convert into string now we can use all mehods of string

// console.log(balance.toLocaleString());

// console.log(balance.toFixed(2)); // gives 2 digit after decimal

const otherNumber = 1123.8966
// console.log(otherNumber.toPrecision(3)); //val = 23.8966 --> 23.9
// console.log(otherNumber.toPrecision(3)); //val = 123.8966 --> 124
// console.log(otherNumber.toPrecision(4)); //val = 123.9966 --> 123.9
// console.log(otherNumber.toPrecision(3)); //val = 1123.8966 --> 1.12e+3

const hundreads = 1000000
// console.log(hundreads.toLocaleString());  //Proper format of number like 1.,000,000 default
// console.log(hundreads.toLocaleString('en-IN')); // in indian format


// ************************* Maths *********************************

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(4.5)); // will do roundof as normally we do , above .4 wil give greater value below lower val
// console.log(Math.ceil(4.2)); //gives upper val
// console.log(Math.floor(4.9)); //gives lowest val even if 4.9 gives 4
// console.log(Math.min(4, 6,7));
// console.log(Math.max(4, 6,7, 90));


console.log(Math.random()); //=> val from 0 to 1
console.log((Math.random()*10) + 1); // val from 1 to 9 
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // +1 to avoid 0 and we add min coz values are coming below 10 so by adding will get atleast above 10

