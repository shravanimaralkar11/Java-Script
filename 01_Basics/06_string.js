const name = "Shra"
const repocount = 50

// console.log(name + repocount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

// Another Way of defining STRING

const gameNAme = new String(`Shravani-aids-kop`)

console.log(gameNAme[0])
console.log(gameNAme.__proto__)

console.log(gameNAme.length);
console.log(gameNAme.toUpperCase());
console.log(gameNAme.charAt(2));
console.log(gameNAme.indexOf('r'));

const newstring = gameNAme.substring(0, 4) //can't use negative index
console.log(newstring);


const anotherstring = gameNAme.slice(-8, -1)  //To get whole name we have to write slice() with no arguments 
console.log(anotherstring);

const newStringOne = "      Shravani      "
console.log(newStringOne);
console.log(newStringOne.trim());  //Removes Extra Spaces

const mail = "example##google.com"
console.log(mail.replace('##', '@'));
console.log(mail.includes('example'));

console.log(gameNAme.split('-'));

