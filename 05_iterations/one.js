// for

// for (let i = 0; i < 10; i++) {
//     if(i == 5){
//         console.log("5 is best");      
//     }
//     console.log(i); 
// }


// for (let i = 0; i <= 10 ; i++) {
//     console.log(`outer loop value: ${i}`);
    
//     for(let j = 0; j <= 10; j++){
//         // console.log(`Inner loop value ${j} and outer loop ${i}`);
//         console.log(`${i} * ${j} = ${i * j}`);       
//     }   
// }


// let myArr = ["flash", "superman", "spiderman"]
// console.log(myArr.length);
// for(let i = 0; i < myArr.length; i++){
//     console.log(myArr[i]);
// }

// BREAK AND CONTINUE

for (let i = 1; i <= 20; i++){
    // if(i == 5){  // return from loop at i = 5
    //     break;
    // }
    if(i == 5){   // skip value 5
        console.log('detected');
        continue;
    }
    console.log(`value of i is ${i}`);
}