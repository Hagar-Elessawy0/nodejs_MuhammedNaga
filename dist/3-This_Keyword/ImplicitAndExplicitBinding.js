"use strict";
function printUser(welcomeMsg) {
    return `Hi ${this.username}, ${welcomeMsg}`;
}
const person5 = {
    username: "Codeawy",
};
const Hager = {
    username: "Hager",
    age: 21,
    printAge() {
        return this.age;
    }
};
console.log(Hager.printAge());
console.log(printUser.bind(person5)("Welcome Back!"));
console.log(printUser.call(Hager, "Welcome Back!"));
