const myObj = {
    js : 'javaScript',
    cpp : "c++",
    rb : "Ruby",
    py : "python"
}

// for(const key in myObj) { // To Print Key
//     console.log(key);
// }

// for(const key in myObj){  // To Print values
//     console.log(`${key} shortcut is for ${myObj[key]}`);    
// }

const lang = ["js","cpp","python","html"]


// for(const ele in lang){ //This will give index
//     console.log(ele);    
// }

for(const ele in lang){  //This will give values 
    console.log(lang[ele]);  
}