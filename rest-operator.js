function sum(a, b) {
    return a + b;
}
document.write(sum(20, 10), "<br>");

function sum2() {
    let sum = 0;
    for (let i in arguments) {
        sum += arguments[i];
    }
    console.log(typeof arguments); //type is -> object
    return sum;
}
document.write(sum2(20, 10, 10, 10), "<br>");

function sum3(...args) {
    let sum = 0;
    for (let i in args) {
        sum += args[i];
    }
    console.log(typeof args); //type is -> object
    return sum;
}
document.write(sum3(20, 10, 10, 10, 40, 30, 20, 10), "<br>");

function sum4(name, degree, ...args) {
    let sum = 0;
    for (let i in args) {
        sum += args[i];
    }
    return `Hello ${name}. you have degree of ${degree}. Your total sum is ${sum}`;
}
document.write(sum4("Vaibhav Chaudhary", "B.tech", 10, 20, 30, 40))