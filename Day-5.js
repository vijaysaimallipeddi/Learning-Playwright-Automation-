//Callback: A function passed an argument to another function , to be execute later 

// function greet(name, callback){
//     console.log(`Hello ${name}`)
//     callback()
// }

// function done(){
//     console.log('Greetings Completed')
// }

// greet('Vijay', done)

// function delayedMessage(elapse){
//     setTimeout(() => {
//         console.log('This message appears after 2 seconds')
//         elapse()
//     }, 2000)
// }

// function done1(){
//     console.log('Callback executed after delay')
// }

// delayedMessage(done1)

// function login(username, password,onsuccess){
//     console.log(`Logging in with ${username}`)
//     onsuccess()
// }

// login('Admin', '12345', () => {
//     console.log('Login successful')
// })

// //Error Handling 
// try{
//     ;
//     console.log(result)
// }
// catch(error){
//     console.log(`something went wrong: ${error.message}`)
// }

// Q1. Create a function that accepts a callback and executes it.
function acc(name, callback){
    console.log('callback accepted')
    callback()
}

function confirm(){
    console.log('Success')
}

acc('vijay', confirm)



// Q2. Write a function that prints a message, then calls a callback function.

function process(callback){
    console.log('Processing Started')
    callback();
}

process(() =>{
    console.log('Processing Done')
})
// Q3. Write a try/catch block that handles an error when accessing a property of undefined.
try {
    console.log(a)
}
catch(error){
    console.log(`Error Message: ${error.message}`)
}
// Q4. Create a function divide(a, b) that uses try/catch and prints error if b is 0.

function divide(a,b){
    try{
        if (b === 0){
        throw new Error ('cannot divide')
    }
    console.log(a/b)
    }
    catch(error){
        console.log(error.message)
    }

}

divide(10, 11)

