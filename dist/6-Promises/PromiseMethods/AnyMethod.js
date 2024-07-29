"use strict";
function examplePromisesAny1() {
    const promise1 = new Promise((resolve, reject) => { setTimeout(reject, 200, 'The Reason For The Error From Promise 1'); });
    const promise2 = new Promise((resolve, reject) => { setTimeout(reject, 100, 'The Reason For The Error From Promise 2'); });
    return Promise.any([promise1, promise2]);
}
function examplePromisesAny2() {
    const promise3 = new Promise((resolve, reject) => { setTimeout(resolve, 100, 'Value From Promise 3'); });
    const promise4 = new Promise((resolve, reject) => { setTimeout(reject, 200, 'The Reason For The Error From Promise 4'); });
    const promise5 = new Promise((resolve, reject) => { setTimeout(reject, 100, 'The Reason For The Error From Promise 5'); });
    const promise6 = new Promise((resolve, reject) => { setTimeout(resolve, 200, 'Value From Promise 6'); });
    return Promise.any([promise3, promise4, promise5, promise6]);
}
examplePromisesAny2().then(console.log).catch(console.error);
