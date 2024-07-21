"use strict";
;
;
const userProfile5 = {
    user: "Codeawy",
    age: 21,
    isMarried: false
};
const newUser2 = Object.assign(Object.assign({}, userProfile5), { address: "10 main street", image: "https://" });
