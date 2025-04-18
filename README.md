# TypeScriptMaman
TypeScript Tutorial based off of the NetNinja Youtube channel TypeScript course

## JTM-1: Prerequisites and Setup
-  Install latest `Node.js` version to allow compiling `TypeScript`
-  Use a decent text editor e.g `VS Code`
-  Install the `TypeScript compiler` globally on the computer with the following command in `CMD prompt`:

`npm install -g typescript`

## JTM-2: Compiling TypeScript
- Install package called `Live Server` in VS Code Extensions
- Right-click your html file entry point > select and click `Open with Live Server`
- Compile `TypeScript` using the following command e.g:

`tsc sandbox.ts -w`

- NOTE: if you have both your .ts and .js files open, you will get the following error, just close your .js file tab to resolve the error in your corresponding .ts file:

`Cannot redeclare block-scoped variable...`

## JTM-3: Type Basics
- enforce correct type e.g parameter diameter `(diameter: number)`:
```
const circ = (diameter: number) => {
  return Math.PI * diameter;
}
```

## JTM-4: objects and arrays
`TypeScript` enforces `valid types` for arrays and objects as shown below:
```
// arrays
let names = ['Alice', 'Bob', 'Charlie'];
names.push('David');
//names.push(42); // Type 'number' is not assignable to type 'string'.
//names[0] = 30; // Type 'number' is not assignable to type 'string'.
//names = 'Eve'; // Type 'string' is not assignable to type 'string[]'.

let numbers = [1, 2, 3, 4, 5];
numbers.push(6);
//numbers.push('seven'); // Type 'string' is not assignable to type 'number'.
//numbers[0] = 'one'; // Type 'string' is not assignable to type 'number'.

let mixed = [1, 'two', 3, 'four'];
mixed.push('five');
mixed.push(6);
mixed[0] = 'one';

let mixedArray: (string | number)[] = ['Alice', 42, 'Bob', 100];


// objects
let person = {
  name: 'Alice',
  age: 30,
  isStudent: false
};

person.age = 31;
person.name = 'Bob';
//person.age = 'thirty'; // Type 'string' is not assignable to type 'number'.
//person.skills = ['JavaScript', 'TypeScript']; // Property 'skills' does not exist on type '{ name: string; age: number; isStudent: boolean; }'.
//person = ''; // Type 'undefined' is not assignable to type '{ name: string; age: number; isStudent: boolean; }'.

person = {
  name: 'Jon',
  age: 25,
  isStudent: true
};

// person = {
//   name: 'Jon',
//   age: 25,
//   //isStudent: true
// }; // Type '{ name: string; age: number; }' is not assignable to type '{ name: string; age: number; isStudent: boolean; }'.

// person = {
//   name: 'Alice',
//   age: 30,
//   isStudent: false,
//   skills: ['JavaScript', 'TypeScript']
// }; // Type '{ name: string; age: number; isStudent: boolean; skills: string[]; }' is not assignable to type '{ name: string; age: number; isStudent: boolean; }'. Property 'skills' does not exist on type '{ name: string; age: number; isStudent: boolean; }'.
```

## JTM-5: Explicit Types
Examples of variables with `types declared explicitly`:
```
let character: string;
let age: number;
let isLoggedIn: boolean;
let names: string[] = [];
let mixed: (string | number)[] = []; 
let uid: string | number;
let person: object;
let personTwo: { name:string, age: number }; 
```

## JTM-6: Dynamic Types
Create dynamic types with `any` type. However, it defeats the purpose of Types in TypeScript but there may be edge case scenarios where you need to use it where you don't know the type of a variable at compile time
```
let age: any = 25;
age = true;
age = "hello world";
age = { name: "John" };
age = [1, 2, 3, 4, 5];

let mixed: any[] = [1, "hello", true, { name: "John" }, [1, 2, 3]];
mixed.push(100);
mixed.push("world");
mixed.push(false);

let person : {
  name: any,
  age: any,
  isEmployed: any
};
person = { name: "John", age: 25, isEmployed: true};
person = { name: "John", age: 25, isEmployed: "yes"}; // This is allowed because of 'any' type
```

## JTM-7: Better workflow and tsconfig
- `To initialize the tsconfig file` - Run the following command `tsc --init` 
- `To update the source folder for .ts files and output folder for .js files` - Update the `rootDir` and `outDir` paths in the `tsconfig.json` file to determine where source files are found and resulting files get compiled to respectively
- `To compile one-off .ts files ` - Run `tsc` to compile all `.ts` files in the `rootDir` folder path
- `To compile one-off .ts files with watch` - Run `tsc -w` to compile all `.ts` files in the `rootDir` folder path every time the `.ts` file is saved
- `To prevent .ts file outside of the rootDir path to create a .js file`, add an `include` section in the `tsconfig.json` file as follows to determine which path source files should compile output files:
```
"include": ["src"],
```

## JTM-8: Function Basics
- basic function example below, also showing the use of `optional` and `default` parameters (required parameters come first followed by optional and default parameters)
```
const add = (a: number, b: number, c?: number | string, d: number | string = 10) => {
    console.log(a + b);
    console.log(c); // from "optional" c? parameter
    console.log(d); // from "default" d: number = 10 parameter
}
```
- Return type when not actually returning a value is `void`, which translates to `undefined` in javascript
- Typescript can implicitly infer the value for the return type if not explicitly specified
- However, to explicitly define the return type you would do something like this below (after the parameter parentheses `: number` in this case):
```
const minus = (a: number, b: number): number => {
    return a - b;
}
```

## JTM-9: Type Aliases
- `Type Aliases` helps us reduce code duplication by specifying type aliases that can be passed to function parameters as follows:
```
type stringOrNum = string | number;
type objWithName = { name: string; uid: stringOrNum };

const logDetails = (uid: stringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: objWithName) => {
    console.log(`${user.name} says hello!`);
}
```

## JTM-10: Function Signatures
- `Function Signatures` helps us enforce the signature of our functions
```
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
```

## JTM-11: The DOM and Type Casting
- using the `DOM querySelector` and `TypeCasting` to access html elements and perform a form submit example:
```
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(type.value);
    console.log(tofrom.value);
    console.log(details.value);
    console.log(amount.valueAsNumber);
});
```