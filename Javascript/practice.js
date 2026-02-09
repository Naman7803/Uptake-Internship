//1.Conditions 


//if

// let age = 18;
// let text = "You can Not drive";

// if (age >= 18) {
//   text = "You can drive";
// }

// console.log(text);




// nested if

// let age = 16;
// let country = "USA";
// let text = "You can Not drive!";

// if (country == "USA") {
//   if (age >= 16) {
//     text = "You can drive!";
//   }
// }





// if else


// let age = 10;
// // let text = "You can Not drive";

// if (age >= 18) {
//   text = "You can drive";
// }
// else{
//     text="You can not drive";
// }





// else if

// let hour=13;

// if(hour<12){
//     text="Good Morning";
// }
// else if(hour>12 && hour<18){
//     text="Good Afternoon";
// }
// else{
//     text="Good Evening";
// }


// console.log(text);





// switch


// let day;
// let date = new Date().getDay();

// switch (date) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }

// console.log(day);








// 2.loops


//for loop

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }




// while loop

// let i=0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }




// do while loop

// let i = 0;

// do {
//   console.log(i);
//   i++;
// }
// while (i < 10);





// 3. fucntion

// let n=2;
// function square(num){
//   let res=num * num;
//   return res;
// }

// let square2=square(n);
// let square5=square(5);

// console.log(square2);
// console.log(square5);  




// arrow function

// let square=x=>x*x;
// console.log(square(5));



// foreach function

// let arr=[1,2,3,4,5];
// let res=arr.forEach(n => console.log(n));



// map function

// let arr=[1,2,3,4,5];
// let double=arr.map(n=>n*2);
// console.log(double);




// filter function

// let arr=[1,2,3,4,5,6,7,8,9,10];
// let prime=arr.filter(n=>n%2==1)
// console.log(prime)



// reduce function

// let arr=[1,2,3,4,5,6,7,8,9,10];
// let sum=arr.reduce((val,total)=>val+total,0)
// console.log(sum)





// function a(){
//   console.log(b);
// }

// var b=10;
// a();






// call stack

// function a(){
//     b();
//     console.log("a");
// }

// function b(){
//     c();
//     console.log("b");
// }

// function c(){
//     console.log("c");
// }

// var x=10;
// a()
// console.log(x)





// lexical environment

// Global scope
// let globalVar = "I am in the global scope";

// function outerFunction() {
//     // Outer function scope
//     let outerVar = "I am in the outer function scope";

//     function innerFunction() {
//         // Inner function scope
//         let innerVar = "I am in the inner function scope";

//         // Accessing variables from inner, outer, and global scopes
//         console.log(innerVar);   // Found in inner scope
//         console.log(outerVar);   // Found in outer scope (lexical environment)
//         console.log(globalVar);  // Found in global scope
//     }

//     return innerFunction;
// }

// // Create a closure
// const main = outerFunction();

// // Even though outerFunction has finished executing,
// // closureFunc still has access to outerVar and globalVar
// main();






// anonymous function

// const greet=function(name){
//     console.log("hello" +" "+ name);
// };
// greet("john")



// anonymous arrow function

// const greet=(name) => console.log("hello"+" "+name)
// greet("john")





//shadowing

// var a=100;
// let b=200;
// const c=300;
// {
//     var a=10;
//     let b=20;
//     const c=30;

//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// console.log(a)
// console.log(b)
// console.log(c)






// var a=100;
// let b=200;
// const c=300;
// function x(){
//     // var a=10;
//     // let b=20;
//     // const c=30;

//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// x()
// console.log(a)
// console.log(b)
// console.log(c)






// clousers 

// function outer(){
//     let outervar="i am outer";

//     function inner(){
//         console.log(outervar)
//     }

//     return inner;
// }

// let main=outer()
// main()





// setinterval

// function myfunction(){
//     console.log("hello");
// }
// let show=setInterval(myfunction,1000);

// setTimeout(() => {
//     clearInterval(show);
//     console.log("bye");
// },5000);





// settimeout

// console.log("start");
// setTimeout(() => {
//     console.log("hello after delay");
// },1000)
// console.log("end")  





// settime out + clouser

// function x(){
//     var i=1;
//     setTimeout(function(){
//         console.log(i);
//     },2000);

//     console.log("hello")
// }
// x()





// settime out + clouser + loop

// function x(){
//     for(let i=1;i<=5;i++){
//          setTimeout(function(){
//         console.log(i);
//     },i * 1000);
//     }
// }
// x()




// function x(){
//     for(var i = 1; i <= 5; i++){
//         function close(i){
//             setTimeout(function(){
//                 console.log(i);
//             }, i * 1000);
//         };
//         close(i);
//     }
// }
// x();





// function statement/declaration

// function a(){
//     console.log("a");
// }
// a()



// function expression

// var b=function(){
//     console.log("b");
// }
// b()



// named function

// var b=function abc(){
//     console.log("b");
// }
// b()
// abc()




// first class function

// function processUserInput(callback) {
//     const name = "Bob";
//     console.log(callback(name));
// }

// processUserInput(function(name) {
//     return `Hi, ${name}!`;
// });






// call back function

// function greet(name,callback){
//     console.log(`hello, ${name}`);
//     callback();
// }

// function goodbye(){
//     console.log("Goodbye");
// }

// greet("john",goodbye);





// event loop

// console.log("start")

// setTimeout(() =>{
//     console.log("timeout");
// },0);

// console.log("end");






// Array.prototype

// Array.prototype.gMap = function(callback){
//    let context = this;
//    let result = [];
//    for (let i = 0; i < context.length; i++) {
//       let returnedVal = callback(context[i]);
//       result.push(returnedVal);
//    }
//    return result;
// }


// let numbers = [1,2,3,4,5];
// let data=numbers.gMap( e => e*2 );
// console.log(data)





// promise

// let checkEven = new Promise((resolve, reject) => {
//     let number = 3;
//     if (number % 2 === 0) resolve("The number is even!");
//     else reject("The number is odd!");
// });
// checkEven
//     .then((message) => console.log(message)) // On success
//     .catch((error) => console.error(error)); // On failure







// promise

// const promise=new Promise((resoleve,reject) =>{
//     let success = true;
//     if(success){
//         resoleve("Successful");
//     }
//     else{
//         reject("Failed");
//     }
// });


// promise.then(result => {
//     console.log(result);
// })
// .catch(error => {
//     console.log(error);
// })
// .finally(() => {
//     console.log("Promises settled");
// });









// array methods



// check array

// let arr=[1,2,3,4,5]
// console.log(Array.isArray(arr));




// toString()

// let arr=["Banana", "Orange", "Apple", "Mango"];
// let res=arr.toString();
// console.log(res);





// at function

// let arr=["Banana", "Orange", "Apple", "Mango"];
// let res=arr.at(2);
// // let res=arr[2];
// console.log(res);




// join

// let arr=["Banana", "Orange", "Apple", "Mango"];
// let res=arr.join("|")
// console.log(res)






// push 

// let arr=["Banana", "Orange", "Apple", "Mango"];
// let res=arr.push("kiwi");
// console.log(arr);




// pop 

// let arr=["Banana", "Orange", "Apple", "Mango"];
// let res=arr.pop();
// console.log(arr);



// shift

// let arr=["Banana", "Orange", "Apple", "Mango"];
// let res=arr.shift();
// console.log(arr);



// unshift

// let arr=["Banana", "Orange", "Apple", "Mango"];
// let res=arr.unshift("kiwi");
// console.log(arr);



// change element

// let arr=["Banana", "Orange", "Apple", "Mango"];
// arr[0]="kiwi";
// console.log(arr);



// delete

// let arr=["Banana", "Orange", "Apple", "Mango"];
// delete arr[0];
// console.log(arr);



// concat

// let myGirls = ["Cecilie", "Lone"];
// let myBoys = ["Emil", "Tobias", "Linus"];

// let child=myGirls.concat(myBoys)

// console.log(myGirls);
// console.log(myBoys);
// console.log(child);



// copyWithin

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.copyWithin(2,0);
// console.log(fruits)



// flat

// let arr=[1, [2, [3, 4]]];
// let res=arr.flat(2);
// console.log(res);



// flatMap

// let arr=[1,2,3,4,5]
// let res=arr.flatMap(n => [n,n*10]);
// console.log(res);   





// splice

// 1.without delete
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2,0,"Lemon","Kiwi");
// console.log(fruits);


// 2.with delete
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2,2,"Lemon","Kiwi");
// console.log(fruits);


// 3.to remeove elements

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0,1);
// console.log(fruits);





// toSpliced

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res=fruits.toSpliced(0,1);
// console.log(res)





// slice

// let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let res=fruits.slice(1)
// console.log(res)


// let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let res=fruits.slice(1,3)
// console.log(res)




// indexOf

// let fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position=fruits.indexOf("Apple");
// console.log(position);



// lastIndexOf

// let fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position=fruits.lastIndexOf("Apple");
// console.log(position);




// includes

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res=fruits.includes("Mango");
// console.log(res);





// find

// let arr=[1,2,3,4,5];
// let res=arr.find(x => x>3);
// console.log(res);


// let res=arr.find(myfunction)
// function myfunction(value,index,arr){
//     return value>3;
// }
// console.log(res);





// findIndex

// let arr=[1,2,3,4,5];
// let res=arr.findIndex(x => x>3);
// console.log(res);


// let res=arr.findIndex(myfunction)
// function myfunction(value,index,arr){
//     return value>3;
// }
// console.log(res);





// findLast

// let arr=[1,2,3,4,5];
// let res=arr.findLast(x => x>3);
// console.log(res);





// findLastIndex

// let arr=[1,2,3,4,5];
// let res=arr.findLastIndex(x => x>3);
// console.log(res);




// sort

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res=fruits.sort()
// console.log(res)



// reverse

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res=fruits.reverse()
// console.log(res)




// sort + reverse

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res=fruits.sort().reverse()
// console.log(res)




// toSorted
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res=fruits.toSorted();
// console.log(res)



// toReversed

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res=fruits.toReversed();
// console.log(res)




// sort numerically

// let points = [40, 100, 1, 5, 25, 10];
// let res=points.sort(function(a,b){return a-b})
// console.log(res)




// find minimum

// let points = [40, 100, 1, 5, 25, 10];
// let res=points.sort(function(a,b){return a-b});
// console.log(res[0]);

// let res=Math.min.apply(null,points);
// console.log(res);




// find maximum

// let points = [40, 100, 1, 5, 25, 10];
// let res=points.sort(function(a,b){return b-a});
// console.log(res[0]);

// let res=Math.max.apply(null,points);
// console.log(res);





// sorting object array

// const cars = [
//   {type:"Volvo", year:2016},
//   {type:"Saab", year:2001},
//   {type:"BMW", year:2010}
// ];

// let res=cars.sort(function(a,b){return a.year-b.year});
// console.log(res)




// every

// let numbers = [45, 4, 9, 16, 25];

// let res=numbers.every(x => x>18)

// let res=numbers.every(myfunction);

// function myfunction(value) {
//     return value>18;
// }
// console.log(res);




// some

// let numbers = [45, 4, 9, 16, 25];

// let res=numbers.some(x => x>18)

// let res=numbers.some(myfunction);

// function myfunction(value) {
//     return value>18;
// }
// console.log(res);




// from

// let arr=[1,2,3,4,5]
// let res=Array.from(arr,x => x*2);
// console.log(res)

// console.log(Array.from("hello"))



// keys

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let keys=fruits.keys();
// for(let x of keys){
//     console.log(x);
// }





// values

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let keys=fruits.values();
// for(let x of keys){
//     console.log(x);
// }



// valueOf

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res = fruits.valueOf();
// console.log(res)




// entries

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res=fruits.entries();
// for(let x of res){
//     console.log(x);
// }




// with

// let months = ["Januar", "Februar", "Mar", "April"];
// let res=months.with(2,"March");
// console.log(res);




// spread(...)

// let arr1=[1,2,3];
// let arr2=[4,5,6];

// let arr3=[...arr1,...arr2];
// console.log(arr3);



// rest(...)

// let a,rest;
// let arr=[1,2,3,4,5,6];
// [a,...rest]=arr;
// console.log(rest)








// union array



// let arr1=[1,2,3,4];
// let arr2=[3,4,5,6];

// let arr3=[...new Set([...arr1,...arr2])];
// console.log(arr3);






// let arr1=[1,2,3,4];
// let arr2=[3,4,5,6];

// arr1.push(...arr2);

// let union=[...new Set(arr1)];
// console.log(union);






// let arr1=[1,2,3,4];
// let arr2=[3,4,5,6];

// let union=arr1.concat(arr2).filter((value,index,arr) => arr.indexOf(value)===index);
// console.log(union)





// let arr1=[1,2,3,4];
// let arr2=[3,4,5,6];

// let union=arr1.concat(arr2).reduce((acc,value) =>{
//     if(!acc.includes(value)) acc.push(value);
//     return acc;
// },[]);

// console.log(union);








// count frequency of each array element


// let arr=[1, 2, 2, 3, 3, 3, 4];
// let f={};

// arr.forEach(i => {
//     f[i]=(f[i] || 0)+1;
// });

// console.log(f);





// let arr=[1, 2, 2, 3, 3, 3, 4];
// let f=new Map();

// arr.forEach(i => {
//     f.set(i,(f.get(i) || 0)+1);
// })

// console.log(f);





// let arr=[1, 2, 2, 3, 3, 3, 4];
// let f=arr.reduce((acc,i) => {
//     acc[i]=(acc[i] || 0)+1;
//     return acc;
// },{});

// console.log(f);





// const arr=["apple","orange","mango"];
// console.log(arr[1])








// async function fetchforecast() {
//     try {
//         const apikey = 'uI92Hp2VOdXDRSGRtA3vLtdt7IS1CVJf6xWsugdK';
//         const baseurl = 'https://api.api-ninjas.com/v1/weatherforecast';
//         const url = `${baseurl}?lat=${latitude}&lon=${longitude}&x-Api-Key=${apikey}`;

//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();

//         // Group by date
//         const grouped = data.reduce((acc, d) => {
//             const date = new Date(d.timestamp * 1000).toLocaleDateString();
//             if (!acc[date]) acc[date] = [];
//             acc[date].push(d);
//             return acc;
//         }, {});

//         // Take only first 5 dates
//         const limitedDates = Object.keys(grouped).slice(0, 5);

//         // Build HTML
//         display.innerHTML = limitedDates.map(date => {
//             return `
//                 <tr><th colspan="10">${date}</th></tr>
//                 ${grouped[date].map(d => `
//                     <tr>
//                         <td>${new Date(d.timestamp * 1000).toLocaleTimeString()}</td>
//                         <td>${d.temp}</td>
//                         <td>${d.feels_like}</td>
//                         <td>${d.humidity}</td>
//                         <td>${d.min_temp}</td>
//                         <td>${d.max_temp}</td>
//                         <td>${d.weather}</td>
//                         <td>${d.cloud_pct}</td>
//                         <td>${d.wind_speed}</td>
//                         <td>${d.wind_degrees}</td>
//                     </tr>
//                 `).join('')}
//             `;
//         }).join('');

//     } catch (error) {
//         console.log(error);
//     }
// }






// group by

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

// const result=Object.groupBy(inventory,({type}) =>type)
// console.log(result)


function mycallback({quantity}){
    return quantity>5?'ok':'restock';
}
const result=Object.groupBy(inventory,mycallback)
console.log(result)
