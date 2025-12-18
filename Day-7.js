/* Why import/export needed 

In Automation:
    One File for login logic 
    One file for utilities
    One file for tests
Instead of rewriting the code, we reuse it. This is done using export & Import */

//Export a function (named Export)
// export function add(a,b){
//     return a+b;
// }

// import {add} from './Day-1'

// console.log(add(5,10))

// //Exporting Variables

// export const baseurl = 'https://example.com'
// export const timeout = 30000;

// //importing variables

// import {baseurl, timeout} from './Day-2'

// console.log(baseurl)
// console.log(timeout)

// //Exporting Objects 
// export const user = {
//     username: 'Admin',
//     password: '1244'
// };

// import {user} from './Day-3.js'
// console.log(user.username)

// //Default Export 
// export function login(){}

// //import
// import {login} from './Day-2'
// //Default Export 
// export default function login(){}

// //import 
// import login from './Day-1.js'

//Automation Style Folder Structure 

/* 
project/
|---- tests/
|      |___login.test.js
|--- pages/
|      |____loginpage..js
|----utils/
|      |___helpers.js
|----config/
|       |__env.js
                    */

import { mul } from "./math.js";

let res = mul(3,4)

console.log(res)

import { user } from "./data.js";

console.log(user.username)