//Function:- A function is block of reusable code

function greet(){
    console.log('Hello Vijay')
}

greet()

//function parameters
function greetuser(name){
    console.log(`hello ${name}`)
}

greetuser('Vijay sai')

//Function Return Values
function add(a, b){
    return a+b;
}

let result = add(10, 20)
console.log(result)

//Arrow Function 
const sqaure = (n) => {
    return n*n 
}

let output = sqaure(2)
console.log(output)

const Square = l => l * l 

console.log(Square(2))

//function with conditions 

function isAdult(age){
    if (age >= 18){
        return 'Eligible'
    }
    else {
        return 'Not Eligible'
    }
}

console.log(isAdult(20))

const vote = (year) => {
    if (year>=18){
        console.log('Eligible')
    }
    else{
        console.log('Not Eligible')
    }
}
vote(20)

// DAY-4 PRACTICE (DO FIRST, THEN CHECK ANSWERS)
// Q1. Write a function that prints “Welcome Tester”.

function role(n){
    console.log(`Welcome ${n}`)
}
role('Tester')
// Q2. Write a function multiply(a, b) that returns the result.
function mul(a,b){
    console.log(a*b)
}
mul(20, 30)
// Q3. Write an arrow function that returns “PASS” if marks ≥ 50, else “FAIL”.
let Res = (score) => {
    if (score >= 50) {
        console.log('Pass')
    }
    else{
        console.log('Fail')
    }
}
Res(10)
// **Q4. Write a function that takes username and prints:

// Logging in as <username>**
function stat(user){
    if (user === 'undefined'){
        console.log('Logging not Logged in')
    }
    else{
        console.log(`Logging in as ${user}`)
    }
    
}
stat('Vijay Mallipeddi')

// Q5. Bonus (Important):

// Create a function that checks if a number is even and returns true/false.

const checkNum = (x) => {
    if (x%2 === 0){
        return true
    }
    else {
        return false
    }
}
console.log(checkNum(11))
