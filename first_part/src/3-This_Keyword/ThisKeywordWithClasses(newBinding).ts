// This Keyword inside a function/constructor in a Class, this refers to the class.
// new Binding : creates an object with same properties as the class (instance of the class).

class person6 {
    username : string;
    constructor(username : string) {
        this.username = username;
    }

    greeting() {
        return `Hi ${this.username}, welcome back`;
    }
}


const youssef = new person6("Youssef");     // new Binding
console.log(youssef.username);      //"Youssef"
console.log(youssef.greeting());    //"Hi Youssef, welcome back"

const Gamila  = new person6("Gamila");      // new Binding
console.log(Gamila.username);       //"Gamila"
console.log(Gamila.greeting());     //"Hi Gamila, welcome back"



