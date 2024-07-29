"use strict";
const person3 = {
    username: "Codeawy",
    age: 22,
    eat1: function () {
        return "I'm eating";
    },
    walk1() {
        return "I'm walking";
    }
};
const { eat1, walk1, ...restPerson } = person3;
console.log(restPerson);
