"use strict";
console.log(`From global scope: ${this}`);
function printThis() {
    return this;
}
console.log(`From function: ${printThis()}`);
const person4 = {
    username: "Codeawy",
    walk() {
        console.log(`From method: ${this}`);
        console.log(`From calling the function in method: ${printThis()}`);
    }
};
person4.walk();
