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





// settime out

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