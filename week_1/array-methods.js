// Advanced operations on arrays
// These methods generally do not modify the original array; instead, they return a new array (except sort).

const dataValues = [90, 45, -12, 65, 73];

// 1. filter - Selecting elements based on a condition
let midRangeValues = dataValues.filter((element) => element > 40 && element < 80);
console.log("Values between 40 and 80:", midRangeValues);

// 2. map - Transforming elements
let increasedValues = dataValues.map(element => element + 10);
console.log("Values increased by 10:", increasedValues);

// Add 10 for elements < 50, and subtract 20 for elements >= 50.
const adjustedValues = dataValues.map(element => {
    if (element < 50) {
        return element + 10;
    } else {
        return element - 20;
    }
});
console.log("Adjusted values:", adjustedValues);

// 3. reduce - Accumulating a single result from the array
const totalSum = dataValues.reduce((accumulator, element) => accumulator + element, 0);
console.log("Sum of all values:", totalSum);

// Find minimum value
const minValue = dataValues.reduce((min, element) => {
    return (min < element) ? min : element;
});
console.log("Minimum value:", minValue);

// Find maximum value
const maxValue = dataValues.reduce((max, element) => {
    return (max > element) ? max : element;
});
console.log("Maximum value:", maxValue);

// 4. sort - Modifies the original array
let arrayToSort = [9, 10, 8, 4];
arrayToSort.sort((a, b) => a - b);
console.log("Sorted array (in-place):", arrayToSort);

// 5. toSorted - Returns a new sorted array without modifying the original
// Note: toSorted is a modern JavaScript feature
if (arrayToSort.toSorted) {
    let originalArray = [9, 10, 8, 4];
    let newlySortedArray = originalArray.toSorted((a, b) => a - b);
    console.log("Newly sorted copy:", newlySortedArray);
}
