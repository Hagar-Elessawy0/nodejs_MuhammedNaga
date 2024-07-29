"use strict";
function fetchUser1() {
    console.log("Fetched User.....");
    return new Promise(function executor(resolve, reject) {
        setTimeout(() => {
            console.log("Fetched User With ID 10.....");
            resolve({
                role: "USER",
                id: 10,
                name: "Hagar"
            });
        }, 1500);
    });
}
