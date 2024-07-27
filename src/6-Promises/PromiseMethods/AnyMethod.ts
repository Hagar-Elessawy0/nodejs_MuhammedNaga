/* 
!! in tsconfig.json : "target": "ES2021" or later

Promise.any() :
- if all promises are reject: returns [AggregateError: All promises were rejected] and an array of rejected promises
- if there is one promise is resolve: returns the fulfilled promise
- if there are more than resolved promises: returns the fastest fulfilled promise
*/

function examplePromisesAny1() {
    // all promises is reject : promise objects will be rejected
    const promise1 = new Promise<string>((resolve, reject) => {setTimeout(reject, 200, 'The Reason For The Error From Promise 1');});
    const promise2 = new Promise<string>((resolve, reject) => {setTimeout(reject, 100, 'The Reason For The Error From Promise 2');});

    return Promise.any([promise1, promise2]);
}
//examplePromisesAny1().then(console.log).catch(console.error);  // [AggregateError: All promises were rejected] {[errors]: ['The Reason For The Error From Promise 1','The Reason For The Error From Promise 2','The Reason For The Error From Promise 2']} --> array of errors(rejected promises)


function examplePromisesAny2() {
    // Promises are resolve and reject : promise objects will be fulfilled or rejected
    const promise3 = new Promise<string>((resolve, reject) => {setTimeout(resolve, 100, 'Value From Promise 3');});
    const promise4 = new Promise<string>((resolve, reject) => {setTimeout(reject, 200, 'The Reason For The Error From Promise 4');});
    const promise5 = new Promise<string>((resolve, reject) => {setTimeout(reject, 100, 'The Reason For The Error From Promise 5');});
    const promise6 = new Promise<string>((resolve, reject) => {setTimeout(resolve, 200, 'Value From Promise 6');});

    return Promise.any([promise3, promise4, promise5, promise6]);
}
examplePromisesAny2().then(console.log).catch(console.error); // Value From Promise 3 --> fastest fulfilled promise