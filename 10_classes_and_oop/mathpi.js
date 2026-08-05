const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(Math.PI);
console.log(descriptor); 
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }


const chai = {
    name: 'ginger chai',
    price: '250',
    isAvailable: 'true',

    ordereChai: function(){
        console.log("chai nhi bani(code get disturbed)");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));


// Object.defineProperty(chai, 'price', {
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "price"));

for (let [key, value] of Object.entries(chai)){
    if (typeof value != 'function'){
        console.log(`${key}, ${value}`);
    }    
}

