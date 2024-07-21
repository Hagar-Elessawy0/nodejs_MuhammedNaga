"use strict";
const arr = [1, 2];
const [a, b] = [3, 4];
console.log(a, b);
function printLanguages([lang1, lang2]) {
    return `First language ${lang1}, second language ${lang2}`;
}
console.log(printLanguages(["JavaScript", "TypeScript", "C++"]));
