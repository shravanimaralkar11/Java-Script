function setUsername(username){
    this.username = username
    console.log("called");
    
}

function createUser(username, email, pass){
    setUsername.call(this, username)

    this.email = email
    this.pass = pass

}

const chai = new createUser("chai", "example.com", "123")
console.log(chai);
