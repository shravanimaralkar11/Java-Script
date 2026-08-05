class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
    static createId(){
        return '123'
    }
}

const shra = new User('Shra')
console.log(shra.createId());
