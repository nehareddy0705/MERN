// Error Handling using try...catch

console.log("Execution started: Step 1");

try {
    // Attempting to print an undefined variable will throw a ReferenceError
    console.log(undefinedVariable); 
} catch (error) {
    console.error("An error occurred:", error.message);
}

console.log("Execution continued: Step 2");
