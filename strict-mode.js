"use strict";

//a = 10;
//console.log(a);

//Uncaught SyntaxError: Duplicate parameter name not allowed in this context (at strict-mode.js:6:21)
function test(a, b, c) {
    // "use strict";  //check from here
    console.log(a + b + c)
}

test(10, 20, 30);