//If/Else

let age = 20;
let country = 'India'
let role = 'Developer'
let isLogged = true
let browser

if(age >= 18){
    console.log('Adult')
}
else{
    console.log('Child')
}

// //Comparison Operator

let StatusCode = 369;

if(StatusCode >= 200 & StatusCode <=299){
    console.log("These 2XX codes mean the client's request was successfully received, understood, and processed");
}
else if(StatusCode >= 100 & StatusCode <=199){
    console.log("These 1XX codes indicate that the request has been received and the process is continuing")
}
else if(StatusCode >= 300 & StatusCode <=399){
    console.log("These 3XX codes indicate that further action is needed to complete the request, often by redirecting to a different URL")
}
else if(StatusCode >= 400 & StatusCode <=499){
    console.log("These 4XX codes signify an error on the client's part that prevents the server from fulfilling the request")
}
else if(StatusCode >= 500 & StatusCode <=599){
    console.log("These 5XX codes indicate that the server encountered an error or is unable to perform the request")
}
else {
    console.log('Invalid')
}

// //Logical Operators
// //&& operator

if(age >= 18 && country == 'India'){
    console.log("Eligible")
}
else{
    console.log('Not Eligible')
}

// //OR operator

if(role === 'Admin' || role === 'Tester'){
    console.log('Acess Granted');
}
else{
    console.log('Access Denied');
}
//Not operator
if(!isLogged){
    console.log('User is not logged in')
}
else{
    console.log('User is logged in')
}

// //Switch Statement 

switch (browser) {
    case 'Chrome':
        console.log('Launching Chrome')
        break;
    case 'Firefox':
        console.log('Launching Chrome')
        break;
    default:
        console.log('Unknown Browser')
        break;
}

// //Loops
// //For 
for(let i=1; i<=5; i++){
    console.log(i)
}
//While
let j = 1;

while (j<=3) {
    console.log(j);
    j++;
}

// //For..of loop
let names = ['Vijay', 'Charan', 'Sahithi']
for (const name of names) {
    console.log(name)
}

// DAY-2 Practice Questions (Try before seeing answers)
// Q1. Check if a number is positive, negative, or zero.

let num = -100;
if(num>=1){
    console.log('Positive')
}
else if(num < 0){
    console.log('Negative')
}
else{
    console.log('Zero')
}

// Q2. If age is >= 18 AND country is “India”, print “Eligible voter”.
let years = 2 
if(years >= 18 && country === 'India'){
    console.log('Eligible voter')
}
else{
    console.log('Not Eligible')
}
// Q3. Use switch: Print message for days: “Mon”, “Tue”, “Wed”.
let day = 10
switch (day){
    case 1:
        console.log('Mon')
        break;
    case 2:
        console.log('Tue')
        break;
    case 3:
        console.log('Wed')
        break;
    case 4:
        console.log('Thu')
        break;
    case 5:
        console.log('Fri')
        break;
    case 6:
        console.log('Sat')
        break;
    case 7:
        console.log('Sun')
        break;
    default:
        console.log('Wrong Day');
        break;
}
// Q4. Loop from 1 to 10 and print only even numbers.
for(let m = 1; m<=10; m++){
    if(m%2 === 0){
        console.log(m)
    }
}
// Q5. Given array = [10, 20, 30], print each value using for…of.

let count = [10,20,30]

for (let n of count){
    console.log(n)
}