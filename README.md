Tutorial on Youtube:

[Learn TypeScript in 50 Minutes - Tutorial for Beginners](https://www.youtube.com/watch?v=WBPrJSw7yQA&t=9s)


* To run the code, run tsc `filename.ts` or without `.ts`. Then a `js` file gets created. 
* Then use node to run the code `node filename.js`
* To automatically recompile the typescript file, whenever there is a change, use the  `watch` option of the TypeScript compiler. To do this, run:  `tsc filename --watch`.
* Then you get this:
- [6:49:19 PM] Starting compilation in watch mode...
- [6:49:21 PM] Found 0 errors. Watching for file changes.
* So with TypeScript you get a `TS` file that then gets transpiled into `JS` which is then used in your application.

### Concepts of TypeScript:
- 1. Variable Declarations: `let` and `const` ...

- 2. Variable Types (the esense of TypeScript):
* `Boolean, Number, String, null, undefined`. 
* Note: `null and undefined` are subtypes. That means you can assign them to a `Boolean, Number or String`.
- Check type inference.
* What is the use of having types?
- 1. Static type checking.
- 2. Intellisense: You get automatically functions that match the type of a variable, when e.g. you do `name.` and name is a string...

3. Functions 



 


### Packages installed:
- npm install -g npm
- npm install -g typescript