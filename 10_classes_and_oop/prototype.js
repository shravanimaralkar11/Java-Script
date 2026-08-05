let myName = "shravani     "

console.log(myName.length) // Includes spaces at the end
//console.log(myName.trim().length);

//How many times you write trim() becomes a performance issue tht why follwing is better way to do it
// console.log(myName.trueLength);

let myHeros = ['Thor', 'Spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.Shra = function(){
    console.log(`Shra is present in all object`);    
}

Array.prototype.HeyShra = function () {
    console.log(`Shra says hello`);
    
}

// heroPower.Shra()
// myHeros.Shra()

// myHeros.HeyShra()
// heroPower.HeyShra() Not possible because HeyShra is only available for array and not for object

//Inheritance

const User = {
    name: 'shravani',
    email: 'example.com'
}

const Teacher = {
    makevideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User

//Moder Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let username1 = 'ChaiAurCode'

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

username1.trueLength()
"shra".trueLength()
"IceTea".trueLength()