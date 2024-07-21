"use strict";
;
const userProfile4 = {
    user: "Codeawy",
    age: 21,
    isMarried: false
};
const newUser1 = Object.assign(Object.assign({}, userProfile4), { address: "10 main street" });
