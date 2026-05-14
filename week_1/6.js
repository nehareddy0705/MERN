// 1. Spread Operator (...)
// Used to create shallow copies of objects and arrays, merge them, or add properties.
// Note: It creates a "shallow copy" - it doesn't deeply copy nested objects.

const personOriginal = {
    name: 'Neha',
    address: {
        city: 'Hyderabad'
    }
};

const shallowCopy = { ...personOriginal };
shallowCopy.name = 'Ravi';
shallowCopy.address.city = 'NYC'; // This modifies the original object too, because of shallow copying!

console.log("Original Person (Affected by shallow copy):", personOriginal);
console.log("Shallow Copy Person:", shallowCopy);

// 2. Deep Copy
// Copies all nested objects so they are completely independent.
const personForDeepCopy = {
    name: 'Neha',
    address: {
        city: 'Hyderabad'
    }
};

const deepCopiedPerson = structuredClone(personForDeepCopy);
deepCopiedPerson.name = 'Ravi';
deepCopiedPerson.address.city = 'NYC';

console.log("Original Person (Safe from deep copy):", personForDeepCopy);
console.log("Deep Copied Person:", deepCopiedPerson);


// 3. Rest Parameter (...)
// Gathers multiple arguments into a single array. Must be the last parameter.
function calculateSum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log("Sum of multiple arguments:", calculateSum(10, 30, 40, 50));

// 4. Destructuring (Unpacking)
// Unpacking Array values
const scoresArray = [12, 20, 30];
const [score1, score2, score3] = scoresArray;
console.log("Destructured Array Values:", score1, score2, score3);

// Unpacking Object values
const employeeRecord = {
    empId: 101,
    company: 'CTS'
};

// Variable names must match the object keys
const { empId, company } = employeeRecord; 
console.log("Destructured Object Value (empId):", empId);
