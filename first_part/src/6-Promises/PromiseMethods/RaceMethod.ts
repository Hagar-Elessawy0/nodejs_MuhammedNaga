// Promise.race() : returns the first settled(the fastest) promise from promises in the iterable(array)

function examplePromisesRace() {

    const promise1 = new Promise<string>((resolve, reject) => {setTimeout(resolve, 200, 'Value From Promise 1');});
    const promise2 = new Promise<string>((resolve, reject) => {setTimeout(reject, 100, 'The Reason For The Error From Promise 2');});
    const promise3 = new Promise<string>((resolve, reject) => {setTimeout(resolve, 100, 'Value From Promise 3');});
    const promise4 = new Promise<string>((resolve, reject) => {setTimeout(reject, 200, 'The Reason For The Error From Promise 4');});

    return Promise.race([promise1, promise2, promise3, promise4]);
}
/*
examplePromisesRace().then(
    value => console.log(value),
    error => console.error(error)
);
*/
// same as:
examplePromisesRace().then(console.log).catch(console.error);       //The Reason For The Error From Promise 2