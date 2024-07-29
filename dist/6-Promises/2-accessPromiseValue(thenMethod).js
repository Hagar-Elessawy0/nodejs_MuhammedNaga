"use strict";
function fetchUser2() {
    console.log("Fetched User.....");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched User With ID 10.....");
            resolve({
                role: "USER",
                id: 10,
                name: "Hagar",
            });
        }, 1500);
    });
}
const promiseResult = fetchUser2();
console.log(promiseResult);
fetchUser2().then(value => console.log(value));
function onSuccesse1(value) {
    if (value.role === "ADMIN") {
        console.log("Welcome Admin, Here you can navigate to the Dashboard");
    }
    else {
        console.log(`Welcome ${value.name}, You can checkout your products now.`);
    }
}
function onRejected1() {
    console.error("Failed to fetch user");
}
fetchUser2().then(onSuccesse1, onRejected1);
