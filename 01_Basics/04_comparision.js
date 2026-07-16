// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 <= 1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1)
// console.log("02" > 1)


/* 
<, >, <=, >= first convert values to numbers.

Number(null) → 0
Number(undefined) → NaN
*/



// console.log(null == 0)  //No conversion to number
// console.log(null < 0)  //we cant predict the output sometimes it convert null to 0 or null
// console.log(null >= 0) //most of the time we avoid such comparision

// console.log(undefined == 0)
// console.log(undefined < 0)
// console.log(undefined > 0)

console.log("2" == 2); //== compares values only. If the data types are different, JavaScript automatically converts (type coercion) one value to match the other.

// ===
console.log("2" === 2);  //=== compares both value and data type.


