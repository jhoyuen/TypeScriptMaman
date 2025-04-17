"use strict";
// Example 1
let greet;
greet = function (name, greeting) {
    console.log(`${greeting}, ${name}`);
};
// Example 2
let calc;
calc = function (num1, num2, operation) {
    switch (operation) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num1 / num2;
        default:
            throw new Error("Invalid operation");
    }
};
// Example 3
let logDetails;
logDetails = function (person) {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
};
