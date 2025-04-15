"use strict";
let greet;
greet = () => {
    console.log("Hello, world!");
};
const add = (a, b, c, d = 10) => {
    console.log(a + b);
    console.log(c); // from "optional" c? parameter
    console.log(d); // from "default" d: number = 10 parameter
};
add(1, 2);
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 5);
