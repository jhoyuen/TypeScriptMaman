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

## JTM-12: Classes
- A simple `class` example below:
```
// classes
class Invoice {
  client : string;
  details : string;
  amount : number;
  constructor(c: string, d: string, a: number) {
      this.client = c;
      this.details = d;
      this.amount = a;
  }

  format() {
      return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice('Mario', 'work on the mario website', 250);
const invTwo = new Invoice('Luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);

invOne.client = 'Yoshi';
invTwo.amount = 600;
console.log(invOne, invTwo);
```

## JTM-13: Public, Private and ReadOnly access modifiers
- Show the use of `access modifiers` in the example `Invoice` class:
```
// classes
class Invoice {
    // readonly client : string;
    // private details : string;
    // public amount : number;
    constructor(
        readonly client: string, 
        private details: string, 
        public amount: number){}

    format() {
        //this.client = 'Yoshi'; // Error: Cannot assign to 'client' because it is a read-only property.
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice('Mario', 'work on the mario website', 250);
const invTwo = new Invoice('Luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    //inv.client = 'Yoshi'; // Error: Cannot assign to 'client' because it is a read-only property.
    console.log(inv.client, inv.amount, inv.format());
});
```

## JTM-14: Modules
- Enable `Modules` support by going to `tsconfig.json`(NOTE: Modules will work for modern web browsers but not older ones - need to do other things to support older browsers e.g using Babel or Webpack)
  - change `target` to `"target": "es6"`
  - change `module` to `"module": "es2015"`
- Update `index.html` script element type to `module` i.e `<script type="module" src='app.js'></script>`
- Create a separate `Invoice.ts` file and export `Invoice`
- Import `Invoice` at the top of the `app.ts` file with `import { Invoice } from './classes/Invoice.js';`

## JTM-15: Interfaces
- Implement `interface` example:
```
// Interfaces
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

// Classes
const me: IsPerson = {
    name: 'Mario',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent', amount);
        return amount;
    }
};
console.log(me);

let someone: IsPerson;
someone = {
    name: 'Luigi',
    age: 35,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent', amount);
        return amount;
    }
};
console.log(someone);

const greetPerson = (person: IsPerson) => {
    console.log('Hello', person.name);
}
greetPerson(me);
greetPerson(someone);
```

## JTM-16: Interfaces with Classes
- Interface example `HasFormatter.ts`
```
export interface HasFormatter {
    format(): string;
}
```
- Class example `Invoice.ts` and `Payment.ts` implements `HasFormatter.ts`
```
import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Invoice implements HasFormatter {
  constructor(
      readonly client: string, 
      private details: string, 
      public amount: number){}

  format() {
      return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
```
```
import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Payment implements HasFormatter {
  constructor(
      readonly recipient: string, 
      private details: string, 
      public amount: number){}

  format() {
      return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }
}
```
- Usage example. Instantiate new `Invoice` or new `Payment` objects based on field `type`
```
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';

const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    console.log(doc.format());
});
```

## JTM-17: Rendering an HTML template
- First, create your `template` class:
```
import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate {
  constructor(private container: HTMLUListElement){}

  render(item: HasFormatter, heading: string, pos: 'start' | 'end'){
    const li = document.createElement('li');
    const h4 = document.createElement('h4');
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement('p');
    p.innerText = item.format();
    li.append(p);

    if(pos === 'start'){
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}
```
- then, use it to `render` the desired HTML:
```
// list template instance
const ul = document.querySelector('ul')!; // The exclamation mark (!) at the end means you are absolutely certain your element exists and won't be undefined
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    
    list.render(doc, type.value, 'end');
});
```

## JTM-18: Generics
- Example `Generics`
```
// GENERICS

const addUID = <T extends {name: string, age: number}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid}; // ... lets us grab the properties of obj
}

let docOne = addUID({name: 'Yoshi', age: 40});
console.log(docOne);
```
- Example `Generics` with `interface` and `class`
```
// GENERICS with interface and class
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docTwo: Resource<object> = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'Shaun' }
}

const docThree: Resource<string[]> = {
    uid: 2,
    resourceName: 'shopping list',
    data: ['bread', 'butter']
}
console.log(docTwo, docThree);
```

## JTM-19: Enums
- Example `Enums` and usage:
```
// ENUMS
enum ResourceType {
    BOOK,
    AUTHOR,
    FILM,
    DIRECTOR,
    PERSON,
    SHOPPING
}

interface Resource<T> {
    uid: number;
    resourceName: string;
    resourceType: ResourceType;
    data: T;
}

const docTwo: Resource<object> = {
    uid: 1,
    resourceName: 'person',
    resourceType: ResourceType.PERSON,
    data: { name: 'Shaun' }
}

const docFour: Resource<object> = {
    uid: 3,
    resourceName: 'Name of the wind by Patrick Rothfuss',
    resourceType: ResourceType.BOOK,
    data: { name: 'Name of the wind', author: 'Patrick Rothfuss' }
}

console.log(docTwo, docFour);
```