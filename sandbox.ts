// Defeats the purpose of Types in TypeScript but there may be edge case scenarios where you need to use it
// where you don't know the type of a variable at compile time
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