/* Promise.all() : 
- if all promises are resolve: returns array of fulfilled promises
- if there is one promise is reject: returns the rejected promise
- if there are more than rejected promises: returns the fastest rejected promise
*/

function examplePromisesAll1() {
    // all promises is resolve : promise objects will be fulfilled
    const promise1 = new Promise<string>((resolve, reject) => {setTimeout(resolve, 200, 'Value From Promise 1');});
    const promise2 = new Promise<string>((resolve, reject) => {setTimeout(resolve, 100, 'Value From Promise 2');});

    return Promise.all([promise1, promise2]);
}
examplePromisesAll1().then(console.log).catch(console.error);   // [ 'Value From Promise 1', 'Value From Promise 2' ] --> array of values(fulfilled promises)


function examplePromisesAll2() {
    // Promises are resolve and reject : promise objects will be fulfilled or rejected
    const promise3 = new Promise<string>((resolve, reject) => {setTimeout(resolve, 100, 'Value From Promise 3');});
    const promise4 = new Promise<string>((resolve, reject) => {setTimeout(reject, 200, 'The Reason For The Error From Promise 4');});
    const promise5 = new Promise<string>((resolve, reject) => {setTimeout(reject, 100, 'The Reason For The Error From Promise 5');});
    const promise6 = new Promise<string>((resolve, reject) => {setTimeout(resolve, 200, 'Value From Promise 6');});

    return Promise.all([promise3, promise4, promise5, promise6]);
}

examplePromisesAll2().then(console.log).catch(console.error); // The Reason For The Error From Promise 5 ---> fastest rejected promise error