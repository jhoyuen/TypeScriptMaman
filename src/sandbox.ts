// Example 1
let greet: (a: string, b: string) => void;
greet = function (name: string, greeting: string) {
  console.log(`${greeting}, ${name}`);
};

// Example 2
let calc: (a: number, b: number, c: string) => number;
calc = function (num1: number, num2: number, operation: string) {
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
}

// Example 3
let logDetails: (obj: { name: string; age: number }) => void;
type Person = { name: string; age: number };
logDetails = function (person: Person) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}