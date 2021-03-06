"use strict";
exports.__esModule = true;
var message = 'Welcome back';
console.log('message', message);
// 1.
// How to add Variable Types
var isBeginner = true;
var total = 0;
var name = 'Footios';
var sentence = "My name is " + name + "\nI'm a beginner in TypeScript";
console.log('sentence', sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// Both are the same!
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// 2.
// `tuple` type
// Use a tuple type for arrays with different values.
// The order and the ammount of elements must match the tuple type!
var person1 = ['Chris', 22];
// 3.
// `Enum` type
// A way of giving more friendly names to a set of numeric values.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c); // Red = 1, Green = 2, etc.
// if enum Color { Red = 5, Green, Blue};
// then Green is 6 etc.
// 4.
// `Any` type
// Use it when you're not sure what a varible's type will be.
// e.g. when you're expecting a value from a 3rd party library.
var randomValue = 10;
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
var a;
a = 10;
a = true; // No error
// But if you initialize the variable...
var b = 20;
// b = true; // Error because Ts infers that it's of type number.
// But this takes place only when you initialize variables, not all the time.
// 7.
// `Union` of types
// Use them when the input is not in your control.
var multiType;
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
function add(num1, num2) {
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
function add2(num1, num2) {
    return num2 ? num1 + num2 : num1;
}
add2(5);
// Default parameters
// Are like Optional, but with a set value instead of undefined.
function add3(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
add3(5, 10); // 15
add3(5); // 15
