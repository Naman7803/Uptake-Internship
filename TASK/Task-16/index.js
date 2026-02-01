// debouncing

// function delayFuncExec() {
//     console.log("I AM GFG ");
// }

// let timerId = setTimeout(delayFuncExec, 1000)

// console.log("Timer Id: " + timerId);






// throttling 


// function throttle(func, delay) {
//     let lastCall = 0;
//     return function (...args) {
//         const now = new Date().getTime();
//         if (now - lastCall < delay) {
//             return;
//         }
//         lastCall = now;
//         func(...args);
//     };
// }

// function logMessage(message) {
//     console.log(message);
// }

// const throttledLogMessage = throttle(logMessage, 1000);

// // Logs 'Hello'
// throttledLogMessage('Hello');

// // Doesn't log anything
// throttledLogMessage('World');

// // Logs 'Delayed' after 2 seconds
// setTimeout(() => throttledLogMessage('Delayed'), 2000);