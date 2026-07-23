// const tinderUser = new Object() // singletone object
const tinderUser = {} // will give output as {} empty object

// console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "Shravani"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


//OBJECT INSIDE OBJECT
const regularUser = {
    email: "example@gmail.com",
    fullname: {
        userfullname: {
            firstname : "Shra",
            lastname : "maralkar"
        }
    }
}


// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.userfullname); gives undifined
// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2} // Method 1 OUTPUT : { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } 
// const obj3 = Object.assign(obj1, obj2) //Method 2 OUTPUT : { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } ==> This will resolve above problem
// const obj3 = Object.assign({}, obj1, obj2) // {} -> Not necessary
const obj3 = {...obj1, ...obj2}  //Spread Operator
// console.log(obj3);

const users = [
    {
        id : 1,
        email : "h@gmai.com"
    },
    {
        id : 2,
        email : "b@gmai.com"
    },
    {
        id : 3,
        email : "c@gmai.com"
    },
    {
        id : 4,
        email : "d@gmai.com"
    }
]

// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // Only key
// console.log(Object.values(tinderUser)); // Only value
// console.log(Object.entries(tinderUser)); // Both key : value

// console.log(users);
// console.log(Object.keys(users));
// console.log(Object.values(users));
// console.log(Object.entries(users));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Check if key exist



const course = {
    courseName : "Js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// course.courseInstructor // We have to repeatedly write the course. course. so instead do follwong

const {courseInstructor: instructor} = course //destructuring
// console.log(courseInstructor);
console.log(instructor);  

// JSON data
// {
//     "Name" : "Shravani",
//     "Age" : 20,
//     "Branch" : "AI-DS"
// }

[
    {},
    {},
    {}
]