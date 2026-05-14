// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
let highTemps = temp.filter(element => element > 35)
console.log("Temperatures above 35:", highTemps)

//     2. map() to convert all temperatures from Celsius → Fahrenheit
let tempsInFahrenheit = temp.map(element => (element * 9/5 + 32))
console.log("Temperatures in Fahrenheit:", tempsInFahrenheit)

//     3. reduce() to calculate average temperature
let avgTemp = temp.reduce((acc, element) => acc + element, 0) / temp.length
console.log("Average temperature:", avgTemp)

//     4. find() first temperature above 40
let firstHighTemp = temp.find(element => element > 40)
console.log("First temperature above 40:", firstHighTemp)

//     5. findIndex() of temperature 28
let indexOfColdTemp = temp.findIndex(element => element === 28)
console.log("Index of temperature 28:", indexOfColdTemp)
