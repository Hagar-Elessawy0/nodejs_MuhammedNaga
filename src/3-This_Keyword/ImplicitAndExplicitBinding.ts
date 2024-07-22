function printUser ( welcomeMsg : string ) {
    return `Hi ${this.username}, ${welcomeMsg}`
}

const person5 = {
    username : "Codeawy",
}

const Hager = {
    username : "Hager",
    age : 21,
    printAge() {
        // Implicit Binding
        return this.age;
    }
}
console.log(Hager.printAge());                                // 21

// Explicit Binding
console.log(printUser.bind(person5)("Welcome Back!"));        // Hi Codeawy, Welcome Back    -     printUser is bound to person5
console.log(printUser.call(Hager , "Welcome Back!"));         // Hi Hager, Welcome Back      -     printUser is called on Hager