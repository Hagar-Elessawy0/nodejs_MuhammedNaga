"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const person3 = {
    username: "Codeawy",
    age: 22,
    eat1: function () {
        return "I'm eating";
    },
    walk1() {
        return "I'm walking";
    }
};
const { eat1, walk1 } = person3, restPerson = __rest(person3, ["eat1", "walk1"]);
console.log(restPerson);
