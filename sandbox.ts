let character = 'Goku';
let age = 30;
let isSuperSaiyan = true;

//character = 20; // Error: Type 'number' is not assignable to type 'string'
character = 'Yamcha'; 

//age = 'thirty'; // Error: Type 'string' is not assignable to type 'number'
age = 35;

//isSuperSaiyan = 1; // Error: Type 'number' is not assignable to type 'boolean'
isSuperSaiyan = false;

const circ = (diameter: number) => {
  return Math.PI * diameter;
}

//console.log(circ('hello')); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
console.log(circ(5.5)); // 17.27875959474386