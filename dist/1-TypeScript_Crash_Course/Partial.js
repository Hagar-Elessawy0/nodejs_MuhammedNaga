"use strict";
;
const user = {
    username: "Codeawy",
    address: "10 main street",
    age: 21
};
function updateUser(user, update) {
    return Object.assign(Object.assign({}, user), update);
}
console.log(updateUser(user, { username: "Hagar", age: 22 }));
