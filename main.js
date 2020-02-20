"use strict";
exports.__esModule = true;
var message = 'Welcome back';
console.log('message', message);
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
// `tuple` type
// Use a tuple type for arrays with different values.
// The order and the ammount of elements must match the tuple type!
var person1 = ['Chris', 22];
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
// `Any` type
// Use it when you're not sure what a varible's type will be.
// e.g. when you're expecting a value from a 3rd party library.
var randomValue = 10;
randomValue = true;
randomValue = 'Footios';
var myVariable = 10;
// Errors that might happen with above statement.
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();
// To tackel the above issue we get
// `unknown` type
// It's like `any` but you cannot access any properties of an `unknown` type,
// nor you can call or construct them.
var myVariable2 = 10;
// type assertion / type casting (in other languages)
myVariable2.toUpperCase();
// `user defined type gard`
// Functions checks if an object has a name property or not.
// It has a parameter `obj` of type `any`
// and is going to return an `obj` that contains the `name` property as a string (obj is {name: string}).
function hasName(obj) {
    return !!obj && typeof obj === 'object' && 'name' in obj;
}
// No error!!!
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// Type inference
var b = 20;
// b = true; // Error
// `Union` of types
// Use them when the input is not in your control. 
var multiType;
multiType = 20;
multiType = true;
// Difference between `any` and `union` types.
// Reasons to use them:
// 1. `union` restrict to the specified types.
// 2. Intellisense support on `union` type.
// 30:30
