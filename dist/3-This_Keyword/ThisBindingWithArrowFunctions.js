"use strict";
const Codeawy = {
    firstName: "Hager",
    lastName: "Gamal",
};
const fullName_normal = function () {
    return `${this.firstName} ${this.lastName}`;
};
const codeawyFullName = fullName_normal.bind(Codeawy);
console.log(codeawyFullName());
const fullName_arrow = () => {
    return `${this.firstName} ${this.lastName}`;
};
const codeawyFullName_arrow = fullName_arrow.bind(Codeawy);
console.log(codeawyFullName_arrow());
