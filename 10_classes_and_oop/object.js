function multiBy5(num) {
    return num * 5
}

multiBy5.power = 2

console.log(multiBy5(5))
console.log(multiBy5.power);
console.log(multiBy5.prototype);

function CreateUser(username, score) {
    this.username = username;
    this.score = score
}

CreateUser.prototype.increment = function() {
    console.log(`Score before increment ${this.score}`)
    this.score++
}

CreateUser.prototype.printMe = function () {
    console.log(`Score after ${this.score}`)
}

const user1 = new CreateUser('Susan', 4)
const user2 = new CreateUser('Suhani', 9)

user1.increment()
user1.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a 
new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype 
property of the constructor function. This means that it has access to properties 
and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified 
arguments and this is bound to the newly created object. If no explicit return 
value is specified from the constructor, JavaScript assumes this, the newly 
created object, to be the intended return value.

The new object is returned: After the constructor function has been called, 
if it doesn't return a non-primitive value (object, array, function, etc.), 
the newly created object is returned.

*/