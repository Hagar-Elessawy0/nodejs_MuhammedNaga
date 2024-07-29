"use strict";
function examplePromisesRace() {
    const promise1 = new Promise((resolve, reject) => { setTimeout(resolve, 200, 'Value From Promise 1'); });
    const promise2 = new Promise((resolve, reject) => { setTimeout(reject, 100, 'The Reason For The Error From Promise 2'); });
    const promise3 = new Promise((resolve, reject) => { setTimeout(resolve, 100, 'Value From Promise 3'); });
    const promise4 = new Promise((resolve, reject) => { setTimeout(reject, 200, 'The Reason For The Error From Promise 4'); });
    return Promise.race([promise1, promise2, promise3, promise4]);
}
examplePromisesRace().then(console.log).catch(console.error);
