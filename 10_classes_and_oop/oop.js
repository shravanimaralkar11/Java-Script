const user = {
    username: 'Shravani',
    loginCount: 10,
    signedIn: true,

    getUserDetails: function(){
        // console.log('Got user details from database');
        // console.log(`username: ${this.username}`); 
        console.log(this) // this gives the object itself
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this); // global gives empty object in nodejs, but in browser it gives window object

// CONSTRUCTOR FUNCTION
// const promiseOne = new Promise()
// const date = new Date()

function User(username, LoginCount, isLoggedIn){
    this.username = username
    this.LoginCount = LoginCount
    this.isLoggedIn = isLoggedIn

    this.gretting = function() {
        console.log(`Welcome, ${this.username}`);
        
    }
    // return this
}

const userOne = new User("Shravani", 10, true)
const userTwo = new User('Shra', 11, false);

console.log(userOne.constructor);
// console.log(userTwo);

// When we use new keyword
// 1 it will create a new empty object
// 2 constructor function will be called with this keyword pointing to the new empty object
// 3 arguments are injected into this keyword
// 4 the new object is returned from the constructor function