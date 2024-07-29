"use strict";
const { user1, age, isMarried } = {
    user1: "Codeawy",
    age: 21,
    isMarried: false
};
const person2 = {
    username: "Codeawy",
    age: 22,
    eat: function () {
        return "I'm eating";
    },
    walk() {
        return "I'm walking";
    }
};
const { eat, walk } = person2;
console.log(eat());
console.log(walk());
