import { VaibhavClass } from './class.js';

console.log(`Vaibhav Class Object has been created.`);
let myObject1 = new VaibhavClass;
console.log(`Call Vaibhav Class Function & output-- ${myObject1.showName()}`);

console.log(`Call Vaibhav Class Static Function & output-- ${VaibhavClass.myname()}`);
