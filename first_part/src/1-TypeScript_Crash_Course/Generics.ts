// Generics allow us to write functions and classes that can work with any data type
function logArg <T>(arg : T){
    console.log(arg);
}
console.log(logArg(1));
console.log(logArg("Codeawy"));
console.log(logArg(true));
console.log(logArg({ name : "Codeawy" }));
console.log(logArg([1, 2, 3]));

// swap with Generics
function swap <T>(arg1 : T, arg2 : T){
    return [arg2, arg1];
}
// Example 1 
let num1 = 10;
let num2 = 20;
console.log(`Before swap : num1 = ${num1}, num2 = ${num2}`);    // Before swap : num1 = 10, num2 = 20
[num1, num2] = swap(num1, num2);
console.log(`After swap : num1 = ${num1}, num2 = ${num2}`);     // After swap : num1 = 20, num2 = 10

// Example 2
let str1 = "Hello";
let str2 = "World";
console.log(`Before swap : str1 = ${str1}, str2 = ${str2}`);    // Before swap : str1 = Hello, str2 = World
[str1, str2] = swap(str1, str2);
console.log(`After swap : str1 = ${str1}, str2 = ${str2}`);     // After swap : str1 = World, str2 = Hello