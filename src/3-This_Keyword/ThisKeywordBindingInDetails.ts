// Binding : creates a bound function that has the same body as the original function

//  makes 'this' inside a function in global scope refer to the object that is calling the function.

// function in global scope
function print_This() {
    return this;                            // window in browser, global in TS file
}

const Hagar = {
    username: "Hagar",
    age : 21,
    printUser() {
        console.log(this);                  // Hagar object
        console.log(print_This());          // window in browser, global in TS file

        /* ways to bind 'this'
        return print_This.bind(this)();     // Hagar object
        return print_This.call(this);       // Hagar object
        return print_This.apply(this);      // Hagar object 
        */
        
        return print_This.bind(this)().age; // print_this is  bound to Hagar
    }
}

console.log(Hagar.printUser());             // 21                 
