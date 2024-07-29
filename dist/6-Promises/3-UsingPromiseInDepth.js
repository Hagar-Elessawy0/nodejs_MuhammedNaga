"use strict";
function getUserTodos3(user) {
    console.log(`Fetching Todo List for user ID ${user.id}.....`);
    return new Promise(function executor(resolve, reject) {
        setTimeout(() => {
            const todolist = [{
                    id: 1,
                    todo: "Do something nice for someone I care about",
                    userId: 10
                },
                {
                    id: 2,
                    todo: "Make coffee",
                    userId: 10
                }];
            resolve(todolist);
            console.log(todolist);
        }, 3000);
    });
}
function fetchUser3() {
    console.log("Fetched User.....");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                role: "USER",
                id: 10,
                name: "Hagar",
            });
        }, 1500);
    });
}
fetchUser3().then(user => getUserTodos3(user));
