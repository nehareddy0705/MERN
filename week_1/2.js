// Functions are first-class objects in JavaScript.
// A callback is a function passed as an argument to another function.

const processPayment = function(amount, paymentMethod) {
    console.log(`Payment of $${amount} started...`);
    paymentMethod();
};

const processUPIPayment = function() {
    console.log("UPI payment completed successfully.");
};

const processCardPayment = function() {
    console.log("Card payment completed successfully.");
};

processPayment(3000, processUPIPayment);
processPayment(4000, processCardPayment);

// Closures
const createAdder = function(x) {
    return function(y) {
        return x + y;
    };
};

const addTen = createAdder(10);
console.log("Closure output:", addTen(20)); // Output is 30. The value of x is stored in the heap memory (closure) even after the outer function finishes execution.

// Iteration (for-of loop)
const studentNames = ['Ravi', 'Ram', 'Vikas'];
for (let name of studentNames) {
    console.log("Student Name:", name);
}

// Object iteration
const studentInfo = {
    id: 100,
    name: 'Neha',
    age: 18,
    course: 'BTECH'
};

// for-in loop to iterate through object keys.
for (let key in studentInfo) {
    console.log(`${key} is ${studentInfo[key]}`);
}

// Array of objects
const employeesList = [
    { id: 101, name: 'Neha' },
    { id: 102, name: 'Ravi' }
];

for (let employee of employeesList) {
    console.log(`Employee ID is ${employee.id} and Name is ${employee.name}`);
}

// Complex Object with Methods
const advancedStudent = {
    rollNo: 11,
    firstName: 'Neha',
    lastName: 'Reddy',
    course: 'BTECH',
    marks: [80, 90, 100],
    address: {
        city: 'Hyderabad',
        pincode: 500081
    },
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    getAverageMarks: function() {
        let totalMarks = 0;
        for (let mark of this.marks) {
            totalMarks += mark;
        }
        return totalMarks / this.marks.length;
    }
};

console.log("Full Name:", advancedStudent.getFullName());
console.log("Average Marks:", advancedStudent.getAverageMarks());

// Array operations
let numbersArray = [1, 2, 3, 4];
numbersArray.push(6); // Add element at the end.
numbersArray.unshift(0); // Add element at the start of the array.
numbersArray.splice(5, 0, 5); // Insert 5 at index 5. splice(index, deleteCount, items...)
let removedFirstElement = numbersArray.shift(); // Removes the first element of the array.
numbersArray.pop(); // Removes the last element in the array.
numbersArray.splice(2, 2); // Remove 2 elements starting from index 2.
numbersArray.splice(0, 1, 9); // Update the first element to 9.
console.log("Modified numbers array:", numbersArray);

// Basic operations on objects
let personDetails = {
    name: 'Neha',
    age: 18
};

// Add new property
personDetails.city = 'Hyderabad';

// Update property
personDetails.name = 'Ravi';

// Delete property
delete personDetails.age;
console.log("Modified person object:", personDetails);
