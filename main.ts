// Without an export, the file is treated as a script so it shares the global scope with other files. 
// So we get an error for `message`
// because the `main.js` also has a message variable.
// By adding an `export` statement.  
export {} 
let message = "Welcome back";
console.log(message);