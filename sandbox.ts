// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;
age = 30;
//age = '30'; // error: Type 'string' is not assignable to type 'number'
isLoggedIn = true;
//isLoggedIn = 1; // error: Type '1' is not assignable to type 'boolean'


// arrays
let names: string[] = []; // need to initialize the array to allow push
names.push('John');


// union types
let mixed: (string | number)[] = []; // array can contain strings and numbers
mixed.push('John');
mixed.push(30);
//mixed.push(true); // error: Type 'boolean' is not assignable to type 'string | number'

let uid: string | number; // uid can be a string or a number
uid = '123'; // string
uid = 123; // number  
//uid = true; // error: Type 'boolean' is not assignable to type 'string | number'


// objects
let ninja: object;
ninja = { name: 'John', age: 30 };
ninja = []; // this is also an object, but not the one we want

// to use the properties of the object, we need to use a type assertion
let ninjaTwo: { name:string, age: number }; 
ninjaTwo = { name: 'John', age: 30 };
//ninjaTwo = { name: 'John' }; // error: Property 'age' is missing in type '{ name: string; }' but required in type '{ name: string; age: number; }'