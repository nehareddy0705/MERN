// Asynchronous JavaScript

console.log("--- Sync vs Async Execution ---");
console.log("First statement");

setTimeout(() => {
    console.log("Asynchronous task completed (executed after Call Stack is empty)");
}, 1);

console.log("Second statement");
console.log("Third statement");

// Timer Functions
// setTimeout: Executes callback once after the specified delay
setTimeout(() => {
    console.log("setTimeout callback executed after 3 seconds");
}, 3000);

// setInterval: Executes callback repeatedly at specified intervals
const intervalId = setInterval(() => {
    console.log("setInterval called (repeatedly)");
}, 3000);

// Clear the interval after 10 seconds to avoid infinite logging
setTimeout(() => clearInterval(intervalId), 10000);

// Promises
// A Promise represents the eventual completion (or failure) of an asynchronous operation.
// Examples: API requests, database queries, file reads.

console.log("--- Promise Example 1 ---");
console.log("Friend is waiting for a call in 5 seconds...");
let willCall = false; // Toggle to true to fulfill

const callPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (willCall) {
            resolve("Friend called successfully!");
        } else {
            reject("Friend forgot to call.");
        }
    }, 5000);
});

callPromise
    .then((message) => { console.log("Promise Fulfilled:", message); })
    .catch((errorMessage) => { console.log("Promise Rejected:", errorMessage); });

console.log("--- Promise Example 2 ---");
console.log("I will send 10,000/- tomorrow (in 10 seconds)...");
let willSendMoney = true;

const moneyPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (willSendMoney) {
            resolve("10,000/- transferred successfully.");
        } else {
            reject("Transaction failed. Can't send money.");
        }
    }, 10000);
});

moneyPromise
    .then((successMessage) => { console.log("Money Promise:", successMessage); })
    .catch((error) => { console.log("Money Promise Error:", error); });
