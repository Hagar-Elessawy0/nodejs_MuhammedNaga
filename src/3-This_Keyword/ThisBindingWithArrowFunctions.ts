/*
- This Keyword is not bound with arrow functions ,Because in arrow functions 'this' scope is the function scope.
- but it is bound with normal functions (function keyword).
*/

const Codeawy = {
    firstName : "Hager",
    lastName : "Gamal",
}

// normal function
const fullName_normal = function () {
    return `${this.firstName} ${this.lastName}`
}

const codeawyFullName = fullName_normal.bind(Codeawy);
console.log(codeawyFullName());                                 // Hager Gamal
/* same as :
const codeawyFullName = fullName_normal.bind(Codeawy)();
console.log(codeawyFullName);
*/

// arrow function
const fullName_arrow = () => {
    return `${this.firstName} ${this.lastName}`
}
const codeawyFullName_arrow = fullName_arrow.bind(Codeawy);
console.log(codeawyFullName_arrow());                           // undefined undefined