"use strict";
const userProfile3 = {
    user: "Codeawy",
    age: 21,
    isMarried: false
};
const newUser = { ...userProfile3, address: "10 main street" };
console.log({ userProfile3 });
console.log({ newUser });
