"use strict";
function logArg(arg) {
    console.log(arg);
}
console.log(logArg(1));
console.log(logArg("Codeawy"));
console.log(logArg(true));
console.log(logArg({ name: "Codeawy" }));
console.log(logArg([1, 2, 3]));
function swap(arg1, arg2) {
    return [arg2, arg1];
}
let num1 = 10;
let num2 = 20;
console.log(`Before swap : num1 = ${num1}, num2 = ${num2}`);
[num1, num2] = swap(num1, num2);
console.log(`After swap : num1 = ${num1}, num2 = ${num2}`);
let str1 = "Hello";
let str2 = "World";
console.log(`Before swap : str1 = ${str1}, str2 = ${str2}`);
[str1, str2] = swap(str1, str2);
console.log(`After swap : str1 = ${str1}, str2 = ${str2}`);
