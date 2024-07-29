"use strict";
class person6 {
    constructor(username) {
        this.username = username;
    }
    greeting() {
        return `Hi ${this.username}, welcome back`;
    }
}
const youssef = new person6("Youssef");
console.log(youssef.username);
console.log(youssef.greeting());
const Gamila = new person6("Gamila");
console.log(Gamila.username);
console.log(Gamila.greeting());
