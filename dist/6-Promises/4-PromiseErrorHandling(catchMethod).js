"use strict";
function getUserTodos4(user) {
    console.log(`Fetching Todo List for user ID ${user.id}.....`);
    return new Promise(function executor(resolve, reject) {
        setTimeout(() => {
            const todolist = [{
                    id: 1,
                    todo: "Do something nice for someone I care about",
                    userId: user.id
                },
                {
                    id: 2,
                    todo: "Make coffee",
                    userId: user.id
                }];
            resolve(todolist);
            console.log(todolist);
        }, 3000);
    });
}
function fetchUser4(user) {
    console.log("Fetched User.....");
    return new Promise((resolve, reject) => {
        const userIdList = Array.from({ length: 100 }, (_, index) => index + 1);
        setTimeout(() => {
            if (user.id > userIdList.length || user.id < 1) {
                reject("Unknown User ID " + user.id);
            }
            else {
                resolve(user);
            }
        }, 1500);
    });
}
function onSuccesse2(user) {
    return getUserTodos4(user);
}
function onRejected2(error) {
    return console.error(`Error : ${error}`);
}
function onFinally() {
    console.log("Stop loading");
}
fetchUser4({
    role: "USER",
    id: 101,
    name: "Hagar",
}).then(onSuccesse2).catch(onRejected2).finally(onFinally);
