const marvel_heros = ["Thor", "IronMan", "SpiderMan"]
const dc_heros = ["superMan", "flash", "batman"]

// marvel_heros.push(dc_heros) 

// console.log(marvel_heros);  //dc_heros array comes as it is in the marvel_heros
// console.log(marvel_heros[3]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]  //Spread Operator
// console.log(all_new_heros);


const anthor_arr = [1,2,3,[4,5,6], 7, [6,7, [4, 5]]]
const combine_arr = anthor_arr.flat(Infinity) //This will convert into only one array and uh cn give depth here used infinity

// console.log(combine_arr);

// console.log(Array.isArray("shravani"));
// console.log(Array.from("shravani"));
// console.log(Array.from({name : "Shravani"})); //gives empty dict we have to say on whic base we want array 


let s1 = 100
let s2 = 200
let s3 = 300

// console.log(Array.of(s1,s2,s3));






