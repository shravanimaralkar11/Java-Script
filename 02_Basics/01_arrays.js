// Arrays

const myArr = [0, 1, 2, 3, 4, 5, 6]
const myHeros = ["Thanos", "Hulk", "SpiderMan", "Thor"]

// console.log(myArr[0]);

// console.log(myHeros);
// console.log(myHeros.length);

// Array Method

// myArr.push(7)
// myArr.push(8)
// myArr.pop()

// myArr.unshift(9)  //Add This value to the start of the array
// myArr.shift()

// console.log(myArr.includes(9));  //Result is in boolean
// console.log(myArr.indexOf(9)); //Gives -1 as it is not present

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// console.log(typeof myArr);
// console.log(typeof newArr);

// slice and splice

console.log("A ", myArr); //Original Array

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr); //Array after slice

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C ", myArr); //Array after splice
