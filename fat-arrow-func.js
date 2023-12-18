document.write(`<h3>Normal Way of Function -- 1</h3>`);
function showName(name) {
    return `Hello ${name}`;
}
document.write(`${showName('vaibhav')}`);

document.write(`<h3>Normal Way of Function -- 2</h3>`);
let nameDisplay = function (name) {
    return `Hello ${name}`;
}
document.write(`${nameDisplay('vaibhav')} <br>`);
document.write("Show type :" + typeof nameDisplay);

document.write(`<h3>Using Arrow Function</h3>`);
let nameDisplay2 = (name, age) => {
    let newname = `Vaibhav ${name}`;
    return `Hello ${newname}. Your age is ${age}`;
};
document.write(`${nameDisplay2('chaudhary', 24)} <br>`);