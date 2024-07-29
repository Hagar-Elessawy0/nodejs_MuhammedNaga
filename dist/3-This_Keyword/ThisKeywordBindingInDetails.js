"use strict";
function print_This() {
    return this;
}
const Hagar = {
    username: "Hagar",
    age: 21,
    printUser() {
        console.log(this);
        console.log(print_This());
        return print_This.bind(this)().age;
    }
};
console.log(Hagar.printUser());
