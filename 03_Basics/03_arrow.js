const user = {
    username : "Shra",
    price : 999,

    welMsg : function() {
        console.log(`${this.username}, welcome to website`); //this is used to refer the current context i.e variable inside scope
        console.log(this); //gives current context
        
    }
}

// user.welMsg()
// user.username = "Sama" //Here we changed the context/value of username soo without this.username we cannot get sama but using this. we can do so
// user.welMsg()

// console.log(this); // this will give empty but when you run this on console this will give window object

// function chai() {
//     let username = "Shra"
//     console.log(this.username); //this.username not working here
   
// }
// chai()

// const chai = () => {
//     let username = "Shra"
//     console.log(this); //this.username not working here
   
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2  //Explicit return 
// }
// console.log(addTwo(25, 25));

// const addTwo = (num1, num2) => num1 + num2 //Implicit return
// console.log(addTwo(25, 25));

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username : "Riya"}) //() for object
console.log(addTwo());
