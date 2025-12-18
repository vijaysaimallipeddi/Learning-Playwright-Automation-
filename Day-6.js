//Promise A Promise that will be available later

//Creating A Promise 
const myPromise = new Promise((resolve, reject) => {
    let success = true
    if(success) {
        resolve('Task comptleted')
    }
    else{
        reject('Task Failed')
    }
});

myPromise
.then(result => {
    console.log('result')
})
.catch(error => {
    console.log(error)
})

//then() VS async/await
//Old Style
fetchData().then(data=>{
    console.log(data)
})

// async/await (modren & Playwright uses)
const data = await fetchData()
console.log(data)

// Rule 1: only use 'await' inside an async function
//wrong:
await fetchData();

//Correct:
async function getData(){
    await fetchData();
}

//Rule 2: Always await Playwright actions
//wrong
page.click('login')
//correct:
await page.click('login')

//Rule 3: 
//Async function Always returns a promise
async function test(){
    return 'done';
}

function wait(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve('Finished Waiting')
        }, 2000)
    })
}

async function run(){
    console.log('Start')
    const result = await wait();
    console.log(result);
    console.log('End')
}

run()

// Q1. Create an async function that waits 1 second and prints “Done”.
function wait1sec(){
    return new Promise(resolve => setTimeout(resolve,1000))
}

async function run(){
    await wait1sec()
    console.log('Done')
}
// Q2. Why does this code fail?
function test() {
    await page.click("#btn");
}
//Answer is used Await without using the Async function 

// Q3. Fix the above code correctly.

async function test() {
    await page.click("#btn");
}


// Q4. Write an async function that returns the sum of two numbers and print the result.

async function add(a, b){
    return a+b;
}

async function run(){
    const result = await add(5, 10);
    console.log(result)
}

run()