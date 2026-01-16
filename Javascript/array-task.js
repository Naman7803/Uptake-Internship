// 1. Write a JavaScript function to check whether an `input` is an array or not.


// let arr=[1,2,3,4,5];
// console.log(Array.isArray(arr));




// 2.Write a JavaScript function to get the last element of an array.
//  Passing the parameter 'n' will return the last 'n' elements of the array.


// let arr=[7, 9, 0, -2];
// let res=arr.slice(-2);
// console.log(res)




// 3.Write a simple JavaScript program to join all elements of the following array into a string.


// let myColor = ["Red", "Green", "White", "Black"];
// let res=myColor.join(",")
// console.log(res)




// 4.Write a JavaScript program to find the most frequent item in an array.


// let arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// arr.forEach(x => {count[x]=(count[x] || 0)+1});
// console.log(count)




// 5.Write a JavaScript program to shuffle an array.


// let arr=[11,22,33,44,55];
// arr.sort(() => Math.random()-0.5)
// console.log(arr)





// 6.Write a JavaScript program to compute the union of two arrays.


// let arr1=[1,2,3,4,5];
// let arr2=[4,5,6,7,8];

// let arr3=[...new Set([...arr1,...arr2])];
// console.log(arr3)






// 7.Write a JavaScript function to remove a specific element from an array.


// let arr=[2, 5, 9, 6,3,7];
// arr.splice(4,1)
// console.log(arr);




// 8.Extract only the middle 3 numbers without changing the original array.


// let arr=[10, 20, 30, 40, 50];
// let res=arr.slice(2);
// console.log(res)




// 9. Insert "red" and "blue" at index 1 without removing anything.

// let colors = ["black", "white"];
// colors.splice(0,0,"red")
// colors.splice(2,0,"blue")
// console.log(colors)





// 10. Final Dependency Task :


// let users = [
//   { id: 1, name: "Rahul", role: "admin", age: 28, isActive: true },
//   { id: 2, name: "Anita", role: "user", age: 22, isActive: false },
//   { id: 3, name: "Suresh", role: "user", age: 30, isActive: true },
//   { id: 4, name: "Priya", role: "manager", age: 26, isActive: true },
//   { id: 5, name: "Amit", role: "user", age: 19, isActive: true }
// ];



// /* -TASK 1
// From the above array, create a new array of only active users.
// ❗ Original array should NOT be modified. */

// let activeuser=users.filter(x => x.isActive)
// console.log(activeuser);




// // - TASK 2
// // From the result of Task 1, keep only users whose age is 25 or more.

// let ageover25=activeuser.filter(x => x.age>25)
// console.log(ageover25);



// // -TASK 3
// // From the result of Task 2, create a new array of user names only


// let names=ageover25.map(x => x.name)
// console.log(names , "names") 
 



// - TASK 4
// From the result of Task 3, add "Mr/Ms " before each name

// const finalNames = names.map((name) => `Mr/Ms ${name}`)
// console.log(finalNames , "final names")




// let arr=[1,2,3,4,5,6,7,8,9,10];
// arr.splice(0,4)
// arr.splice(10,0,11)
// console.log(arr)    