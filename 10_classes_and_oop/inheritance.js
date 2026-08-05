class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, pass){
        super(username) 
        this.email = email
        this.pass = pass  
    }

    addcourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "code.com", "123")
chai.addcourse()
chai.logMe()

const tea = new User("tea")
// tea.addcourse() // not possible
tea.logMe()

// console.log(chai === tea) //flase
// console.log(chai === Teacher); //false

// console.log(chai instanceof Teacher); //true
console.log(chai instanceof User); // true

