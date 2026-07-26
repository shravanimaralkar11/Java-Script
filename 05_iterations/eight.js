const myNums = [1,2,3]

// USING NORMAL FUNCTION

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);   
//     return acc +currval
// }, 0)


// USING ARROW FUNCTION

// const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)

// console.log(myTotal);


const shoppingcart = [
    {
        itemName : "js course",
        price : "500"
    },
    {
        itemName : "py course",
        price : "1500"
    },
    {
        itemName : "java course",
        price : "1600"
    },
    {
        itemName : "web dev course",
        price : "2300"
    },
    {
        itemName : "Data Science course",
        price : "2300"
    }
]

const priceToPay = shoppingcart.reduce((acc, item) => acc + Number(item.price), 0)

console.log(priceToPay);
