var a; //declare a variable
a = 20; //assign a value
//debugger;
var a; //redeclare same variable
//a = 30; //reassign new vaue
document.write(`Using Var ${a} <br>`);

let b; //declare a variable
b = 1; //assign a value
//var b; //Cannot redeclare block-scoped variable 'b'
//let b; //Cannot redeclare block-scoped variable 'b'.javascript
//const b = 20; //Cannot redeclare block-scoped variable 'b'
b = 100 //reassign new vaue
document.write(`Using Let ${b} <br>`);

//constant variable
const c = 200;
//c = "world"; //Uncaught TypeError: Assignment to constant variable.
document.write(`Using Const ${c} <br>`);