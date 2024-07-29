"use strict";
const person1 = {
    username: "Codeawy",
    age: 22,
    eat: function () {
        return "I'm eating";
    },
    walk() {
        return "I'm walking";
    }
};
console.log(person1.eat());
console.log(person1.walk());
