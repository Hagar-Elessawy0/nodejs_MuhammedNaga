/*
this keyword : refers to the object that is executing the current piece of code.

Its value varies depending on where it is used:
    - in global scope, this refers to the global object (window in the browser, and global in TS file).
    - Inside a function, this refers to the global object (window in the browser, and global in TS file) even if the function is called inside a method.
    - Inside a method, this refers to the object that the method is called on.
    - Inside a function/constructor in a Class, this refers to the class.
*/

// global scope
console.log(`From global scope: ${this}`);          // window in browser, global in TS file

// inside a function in global scope
function printThis() {
    return this;                                    // window in browser, global in TS file
}
console.log(`From function: ${printThis()}`);       

// inside a method
const person4 = {
    username: "Codeawy",
    walk() {
        console.log(`From method: ${this}`);        // person4 object 
        console.log(`From calling the function in method: ${printThis()}`);   // window in browser, global in TS file
    }
}
person4.walk();


/* 
inside a function/constructor in a Class => ThisKeywordWithClasses(newBinding).ts
*/