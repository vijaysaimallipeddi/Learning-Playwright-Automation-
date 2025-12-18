//Day -3 
//1. Arrays An Array holds order sequence of items
let fruits = ['Apple', 'Banana', 'Orange'] 
//access the elements 
console.log(fruits[0]);
console.log(fruits[1]);


//push
fruits.push('Lichi');
//pop
fruits.pop()
//unshift
fruits.unshift('Kiwi')
//shift
fruits.shift()
console.log(fruits.includes('Red Apple'));
console.log(fruits.length)

//Advanced Array Methods
//map() --> transform each element
let num = [1,2,3]
let doubled = num.map(n=>n*2);
console.log(doubled);
//filter() --> returns matching items 
let marks = [30,40,50,89,65,54]
let passed = marks.filter(marks => marks>=53);
console.log(passed);
//find
let nums = [10,20,30]
let find = nums.find(nums => nums > 10);
console.log(find)
//objects - store key/value data
let user = {
    username: 'Admin',
    password: '12345',
    isActive: true
}

console.log(user.password)

//Array of Objects
let users = [
    {
        userID: 'Aifauser6',
        passcode: 'Admin 6'
    },
    {
        userID: 'Aifauser7',
        passcode: 'Admin 7'
    }
];

for(let l of users){
    console.log(l.userID)
}

// DAY-3 PRACTICE QUESTIONS
// Q1. Create an array of 5 city names. Print the 3rd city.
let cities = ['Vijayawada', 'Visakhapatnam', 'Hyderabad']
console.log(cities[2])


// Q2. Add “Delhi” to the array using push().
cities.push('Delhi')
console.log(cities[3])
// Q3. Remove the first element using shift().
cities.shift()
console.log(cities)
// Q4. Given:
// let scores = [85, 42, 97, 50, 33];
// Use filter() to get scores >= 50.
let scores = [85, 42, 97, 50, 33]
let average = scores.filter(scores => scores >= 50)
console.log(average)

// Q5. Create an object representing a book with: title, author, year. Print the title.

let book = {
    title: 'Atomic Habbits',
    Author: 'James Clear',
    year: 2018
}
console.log(book.title)
// Q6. Create array of 3 user objects (username + password) and loop through each printing username.

let credentials = [
    { username: "admin", password: "123" },
    { username: "manager", password: "456" },
    { username: "guest", password: "789" }
]

for (let d of credentials){
    console.log(d.username)
}