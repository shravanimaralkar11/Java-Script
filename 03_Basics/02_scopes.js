// let a = 10
// const b = 20
// var c = 30

// var c = 300 // still print 30 which is inside if this is the issue

let a = 300

if(true) {
    let a = 10
    const b = 20
    var c = 30

    // console.log("Inner :", a); // OUTPUT => 30    
}

// console.log(a);  // OUTPUT => 300
// console.log(b);
// console.log(c);

function one() {
    const username= "shravani"
    console.log(username);  

    function two() {
        const website = "yt"
        console.log(username);   
    }
    // console.log(website); cannot access outside function

    // two()
}
// one()

if(true) {
    const username = "Shravani"
    if(true) {
        const website = " yt"
        // console.log(username + website);       
    }
    // console.log(website);    
}
// console.log(username);


// *****************************Interesting************************************

console.log(addone(24)); // This is okay 
function addone(num){
    return num + 1
}


addtwo(23) //This will give error
const addtwo = function addtwo(num) {  
    return num + 2
}


