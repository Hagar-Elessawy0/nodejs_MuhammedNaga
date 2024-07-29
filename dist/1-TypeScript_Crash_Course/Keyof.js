"use strict";
const user2 = {
    username: "Codeawy",
    age: 21,
    address: "10 main street"
};
function getProperty(obj, key) {
    return obj[key];
}
console.log(getProperty(user2, "username"));
console.log(getProperty(user2, "age"));
console.log(getProperty(user2, "address"));
