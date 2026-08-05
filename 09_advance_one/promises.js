// STORED IN VARIABLE

// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async task
//     // DB Calls, cryptography, network
//     setTimeout(() => {
//         console.log(`async task is complete`)
//         resolve()
//     }, 1000)
// })


// DIRECTLY WITHOUT VARIABLE
// promiseOne.then(() => {
//     console.log(`Promise Consumed`)
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(`async task two`)
//         resolve()
//     }, 1000)
// }).then(() => {
//     console.log(`Promise two completed`)
// })


// PASSING DATA FROM PROMISE
// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({name: 'Shravani', age: 20, email:'example.com'})
//     }, 1000)
// })

// promiseThree.then((user) => {
//     console.log(user)
// })


// PASSING DATA FROM PROMISE AND CATCHING ERROR
// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false
//         if(!error){
//             resolve({username: 'Shravani', pass: '1234'})
//         }else{
//             reject('Error: Something went wrong')
//         }
//     }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user)
//     return user.username
// }).then((username) => {
//     console.log(username)
// }).catch((error) => {
//     console.log(error)
// }).finally(() => console.log(`Promise is either resolved or rejected`))


// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false
//         if(!error){
//             resolve({username: 'Shravani', pass: '1234'})
//         }else{
//             reject('Error: JS went wrong')
//         }
//     }, 1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     }catch (error) {
//         console.log("E: ", error)
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch(() => {
    console.log(`Error: Something went wrong`)
})