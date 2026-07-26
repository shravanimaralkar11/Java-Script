const coding = ["js", "cpp", "java", "Python", "html"]

// coding.forEach ( function (item) {
//     console.log(item);   
// }) 

// coding.forEach( (item) => {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName : "javascript",
        fileName : "js"
    },
    {
        languageName : "python",
        fileName : "py"
    },
    {
        languageName : "java",
        fileName : "java"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})