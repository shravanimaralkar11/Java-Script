//Dates

let myDate = new Date();
// console.log(typeof myDate);  //type => object

// console.log(myDate);

// console.log(myDate.toString());

// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());

//let myCreatedDate = new Date(2026, 0, 25) //Mont starts from 0
// console.log(myCreatedDate.toDateString());


// let myCreatedDate = new Date(2026, 0, 25, 5, 3)
// console.log(myCreatedDate.toLocaleString());


let myCreatedDate = new Date("01-01-2026")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); //mili-seconds => seconds

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());  //Starts From 0 i.e sun

// newDate.getDay();      // Day of week (0–6)
// newDate.getDate();     // Day of month (1–31)
// newDate.getMonth();    // Month (0–11)
// newDate.getFullYear(); // Year (e.g., 2026)

console.log(newDate.toLocaleString('default', {weekday:"long"}));
// dateStyle and timeStyle are used for predefined date/time formats. Individual options like weekday, year, month, and day are used for custom formatting. 
// These two approaches cannot be used together.