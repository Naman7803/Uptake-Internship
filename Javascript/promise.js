// let checkEven = new Promise((resolve, reject) => {
//     let number = 4;
//     if (number % 2 === 0) resolve("The number is even!");
//     else reject("The number is odd!");
// });
// checkEven
//     .then((message) => console.log(message)) // On success
//     .catch((error) => console.error(error)); // On failure





// Promise.all()

// Promise.all([
//     Promise.resolve("Task 1 completed"),
//     Promise.resolve("Task 2 completed"),
//     Promise.reject("Task 3 failed")
// ])
//     .then((results) => console.log(results))
//     .catch((error) => console.error(error));



// Promise.allSettled()

// Promise.allSettled([
//     Promise.resolve("Task 1 completed"),
//     Promise.reject("Task 2 failed"),
//     Promise.resolve("Task 3 completed")
// ])
//     .then((results) => console.log(results));



// Promise.race()

// Promise.race([
//     new Promise((resolve) =>
//         setTimeout(() =>
//             resolve("Task 1 finished"), 1000)),
//     new Promise((resolve) =>
//         setTimeout(() =>
//             resolve("Task 2 finished"), 500)),
// ]).then((result) =>
//     console.log(result));




// Promise.any()

// Promise.any([
//     Promise.reject("Task 1 failed"),
//     Promise.resolve("Task 2 completed"),
//     Promise.resolve("Task 3 completed")
// ])
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));




// Promise.resolve()

// Promise.resolve("Immediate success")
//     .then((value) => console.log(value));




// Promise.reject()

// Promise.reject("Immediate failure")
//     .catch((error) => console.error(error));




// Promise.finally()

// Promise.resolve("Task completed")
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error))
//     .finally(() => console.log("Cleanup completed"));




// Promise.prototype.then()

// Promise.resolve(5)
//     .then((value) => value * 2) // Multiplies by 2
//     .then((value) => value + 3) // Adds 3
//     .then((finalValue) => console.log(finalValue)); // Logs: 13



// Array.prototype.reduce()

// let tasks = [1, 2, 3];
// tasks.reduce((prevPromise, current) => {
//     return prevPromise.then(() => {
//         return new Promise((resolve) => {
//             console.log(`Processing task ${current}`);
//             setTimeout(resolve, 500); // Simulate async task
//         });
//     });
// }, Promise.resolve());




// Dynamic Promise Creation

// function asyncTask(taskName) {
//     return new Promise((resolve) => {
//         setTimeout(() => 
//             resolve(`${taskName} completed`), 1000);
//     });
// }
// asyncTask("Download File").then((result) => 
//     console.log(result));




// Timeout Handling with Promise.race()

// let fetchData = new Promise((resolve) =>
//     setTimeout(() =>
//         resolve("Data loaded"), 3000));
// let timeout = new Promise((_, reject) =>
//     setTimeout(() =>
//         reject("Timeout!"), 2000));
// Promise.race([fetchData, timeout])
//     .then((result) =>
//         console.log(result))
//     .catch((error) =>
//         console.error(error));




// Handling Multiple Failures with Promise.allSettled()

// Promise.allSettled([
//     Promise.resolve("Task 1 done"),
//     Promise.reject("Task 2 failed"),
//     Promise.resolve("Task 3 done")
// ])
//     .then((results) => console.log(results));




// Combining Promises with Parallel and Sequential Execution

// Promise.all([
//     new Promise((resolve) =>
//         setTimeout(() =>
//             resolve("Task A done"), 1000)),
//     new Promise((resolve) =>
//         setTimeout(() =>
//             resolve("Task B done"), 500))
// ])
//     .then(([resultA, resultB]) => {
//         console.log(resultA, resultB);
//         return new Promise((resolve) =>
//             setTimeout(() => resolve("Final Task done"), 700));
//     })
//     .then((finalResult) =>
//         console.log(finalResult));




// Wrapping Callbacks into Promises

// function loadData(callback) {
//     setTimeout(() => 
//         callback("Data loaded"), 1000);
// }
// function promisifiedLoadData() {
//     return new Promise((resolve) => {
//         loadData((result) => 
//             resolve(result));
//     });
// }
// promisifiedLoadData().then((data) => 
//     console.log(data));



// fetch(`https://jsonplaceholder.typicode.com/users`).then(response =>{
//     if(response.ok){
//         return response.json();
//     }else{
//         throw new Error('API Failed');
//     }
// }).then(data =>{
//     console.log(data);
// }).catch(error =>{
//     console.log(error)
// });



// const api2=fetch(`https://finalspaceapi.com/api/v0/episode/`).then(response =>{
//     if(response.ok){
//         return response.json();
//     }else{
//         throw new Error('API Failed');
//     }
// }).then(data =>{
//     console.log(data);
// }).catch(error =>{
//     console.log(error)
// });



// const api3=fetch(`https://api.disneyapi.dev/character`).then(response =>{
//     if(response.ok){
//         return response.json();
//     }else{
//         throw new Error('API Failed');
//     }
// }).then(data =>{
//     console.log(data);
// }).catch(error =>{
//     console.error(error)
// });






// async function fetchSequentially(urls) {
//     for (let i = 0; i < urls.length; i++) {
//         try {
//             const response = await fetch(urls[i]);
//             if (!response.ok) {
//                 throw new Error(`API ${i + 1} failed with status: ${response.status}`);
//             }
//             const data = await response.json();
//             console.log(`API ${i + 1} Response:`);
//         } catch (error) {
//             console.error(`Error in API ${i + 1}:`, error);
//             break;  // Stop further execution if an error occurs
//         }
//     }
// }
// const urls = [
//     'https://jsonplaceholder.typicode.com/',
//     'https://finalspaceapi.com/api/v0/episode/',
//     'https://api.disneyapi.dev/character'
// ];

// // Call the function
// fetchSequentially(urls);





// async/await

// async function fetchData() {
//   try {
//     // Simulated API response (mock data)
//     const response = await Promise.resolve({
//       json: async () => ({
//         userId: 1,
//         id: 1,
//         title: "Sample Post",
//         body: "This is mock data for async/await demonstration"
//       })
//     });

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// fetchData();




// const cart=['shoes','pant','kurta'];

// const promise=createOrder(cart);

// promise
//     .then(function(orderId){
//         console.log(orderId);
//         return orderId;
//     })
//     .catch(function (err){
//         console.log(err.message);
//     })
//     .then(function(orderId){
//         return proceedPayment(orderId);
//     })
//     .then(function(paymentInfo){
//         console.log(paymentInfo);
//     })
//     .catch(function (err){
//         console.log(err.message);
//     });


// function createOrder(cart){
//     const pr=new Promise(function(resolve,reject){
//         if(!validateCart(cart)){
//             const err=new Error('Cart is not valid');
//             reject(err);
//         }

//         const orderId='12345';
//         if(orderId){
//             setTimeout(()=>{
//                 resolve(orderId);
//             },3000)
//         }
//     });
//     return pr;
// }

// function proceedPayment(orderId){
//     return new Promise(function(resolve,reject){
//         resolve('Payment Successful')
//     });
// }

// function validateCart(cart){
//     return false;
// }




// const p1=new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         resolve('Promise Resolved');
//     },5000);
// });

// const p2=new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         resolve('Promise Resolved');
//     },10000);
// });

// async function handlePromise() {
//     console.log('Javascript');
//     const val1=await p1;
//     console.log('hello')
//     console.log(val1);

//     const val2=await p2;
//     console.log('hello')
//     console.log(val2);
// }
// handlePromise()



// // this
// 'use strict'
// // this in global space

// console.log(this)


// // this inside function

// function x(){
//     console.log(this);
// }
// x()
// window.x()


// // this inside object's method

// const obj={
//     a:10,
//     x:function(){
//         console.log(this.a);    
//     },
// };
// obj.x()


// // call,apply,bind method

// const obj1={
//     a:20,
// };

// obj.x.call(obj1)


// // this inside arrow function

// const obj2={
//     a:10,
//     x:() =>{
//         console.log(this);
//     },
// };
// obj2.x()    


// const obj3={
//     a:10,
//     x:function(){
//         const y=()=>{
//             console.log(this);
//         };
//         y();
//     },
// };
// obj3.x()



// this inside DOM

