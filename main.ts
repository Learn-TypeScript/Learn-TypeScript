// Without an export, the file is treated as a script 
// so it shares the global scope with other files.
// So we get an error for `message`
// because the `main.js` also has a message variable.
// By adding an `export` statement we convert it to a module.
export {};
let message = 'Welcome back';
console.log('message', message);

// 1.
// How to add Variable Types
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Footios';

let sentence: string = `My name is ${name}
I'm a beginner in TypeScript`;

console.log('sentence', sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

// Both are the same!
let list1: number[] = [ 1, 2, 3 ];
let list2: Array<number> = [ 1, 2, 3 ];

// 2.
// `tuple` type
// Use a tuple type for arrays with different values.
// The order and the ammount of elements must match the tuple type!
let person1: [string, number] = [ 'Chris', 22 ];

// 3.
// `Enum` type
// A way of giving more friendly names to a set of numeric values.
enum Color {
	Red,
	Green,
	Blue
}

let c: Color = Color.Green;
console.log(c); // Red = 1, Green = 2, etc.
// if enum Color { Red = 5, Green, Blue};
// then Green is 6 etc.

// 4.
// `Any` type
// Use it when you're not sure what a varible's type will be.
// e.g. when you're expecting a value from a 3rd party library.
let randomValue: any = 10;
randomValue = true;
randomValue = 'Footios';

// let myVariable: any = 10;

// Errors that might happen with above statement.
// console.log(myVariable.name); Error ... is not a function
// myVariable(); Error ... is not a function
// myVariable.toUpperCase(); Error ... is not a function

// To tackel the above issue we get
// `unknown` type
// It's like `any` but you cannot access any properties of an `unknown` type,
// nor you can call or construct them, unless you use type assertion.
// let myVariable2: unknown = 10;
// type assertion / type casting (in other languages)
// (myVariable2 as string).toUpperCase();

// 5.
// `user defined type gard`
// `hasName` has a parameter of type obj, and returns an obj
// that contains the 'name' property as a string.
// `hasName` checks if an object has a name property or not.
// It has a parameter `obj` of type `any`
// and is going to return an `obj` that contains the `name` property 
// as a string (obj is {name: string}).
// function hasName(obj: any): obj is { name: string } {
// 	return !!obj && typeof obj === 'object' && 'name' in obj;
// }

// No error!!!
// if (hasName(myVariable)) {
// 	console.log(myVariable.name);
// }

// 6.
// Type inference

let a;
a = 10;
a = true; // No error

// But if you initialize the variable...
let b = 20;
// b = true; // Error because Ts infers that it's of type number.
// But this takes place only when you initialize variables, not all the time.

// 7.
// `Union` of types
// Use them when the input is not in your control.
let multiType: number | boolean;
multiType = 20;
multiType = true;

// Difference between `any` and `union` types.
// Reasons to use them:
// 1. `union` restrict to the specified types.
// 2. Intellisense support on `union` type (i.e. get possible functions).

// 30:30
// 8. Functions
// Specify types of parameters
// after the parameters, specify the return type
function add(num1: number, num2: number): number {
	return num1 + num2;
}
add(5, 10); // Intellisense tell you about the function when hovering
// add(5, '10'); Error from static type cheking


// 8.1.
// Optional parameters

// Every param is required from the func. 
// add() Error
// Add a `?` to the parameter that is optional.
// You can have as many optional params as you wish,
// but they have to be after the required params.
function add2(num1: number, num2?: number): number {
	return num2 ? num1 + num2 : num1;
}
add2(5);

// 8.2.
// Default parameters
// Are like Optional, but with a set value instead of undefined.
function add3(num1: number, num2: number = 10): number {
	return num1 + num2;
}
add3(5, 10); // 15
add3(5); // 15

// 9. Interfaces

// You can specify an obj as type.
// object type: {firstName: string, lastName: string}
// function fullName(person: {firstName: string, lastName: string}) {
// 	console.log(`${person.firstName} ${person.lastName}`);
// } 

interface Person {
	firstName: string;
	lastName?: string; // To make it optional put a ?
}
function fullName(person: Person) {
	console.log(`${person.firstName} ${person.lastName}`);
} 
	let p = {
		firstName: 'Bruce',
		lastName: 'Wayne' // This can be removed if optional
	};

	fullName(p)