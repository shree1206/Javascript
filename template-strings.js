document.write('<h3>Normal Way</h3>');
document.write(`<pre>
let fname = "Vaibhav";
let lname = "Chaudhary";
let age = 30;
let message1 = "Hello " + fname + ". Your Age is " + age + ". Your Full Name is " + fullName(fname, lname);
document.write(message1);
</pre>`);
let fname = "Vaibhav";
let lname = "Chaudhary";
let age = 30;
let message1 = "Hello " + fname + ". Your Age is " + age + ". Your Full Name is " + fullName(fname, lname);
document.write('<b>Output:</b><br>');
document.write(message1);

document.write('<br><br>');

document.write('<h3>Using Template Strings</h3>');
document.write("<pre>let message2 = `Hello ${fname}. Your Age is ${age}. Your Full Name is ${fullName(fname, lname)}`;</pre>");
document.write("<pre>function fullName(fn, ln) " + "\n" +
    "{" + "\n" + " return `${fn}  ${ln}`; " + "\n" + "}</pre>");

//call function using template literals
function fullName(fn, ln) {
    return `${fn}  ${ln}`;
}

document.write('<b>Output:</b><br>');
let message2 = `Hello ${fname}. Your Age is ${age}. Your Full Name is ${fullName(fname, lname)}`
document.write(message2);
document.write("<br>");