// Normal Array
const arr = [ 1 , 2 ];

// Array Destructing
const [ a , b ] = [ 3 , 4 ];
console.log(a, b);      //3 4

// Function with Array Destructing
function printLanguages([ lang1 , lang2 ] : string[]){
    return `First language ${lang1}, second language ${lang2}`
}

console.log(printLanguages(["JavaScript", "TypeScript", "C++"]));   //First language JavaScript, second language TypeScript