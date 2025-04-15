let greet: Function;

greet = () => { 
    console.log("Hello, world!");
}
const add = (a: number, b: number, c?: number | string, d: number | string = 10) => {
    console.log(a + b);
    console.log(c); // from "optional" c? parameter
    console.log(d); // from "default" d: number = 10 parameter
}
add(1, 2);

const minus = (a: number, b: number): number => {
    return a - b;
}
let result = minus(10, 5);