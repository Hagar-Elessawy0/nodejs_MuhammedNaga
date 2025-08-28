/*
    Synchronous  : execution of code line by line in order, next line will not be executed(will be blocked) until previous line is done
    Asynchronous : execution of code in parallel, allow code to execute without waiting for a previous task to complete, preventing the execution from freezing.
*/

function first (){
    console.log("First");                              // 1st => first(): working - second(): blocked - third(): blocked - getProductsViaAPI(): blocked ----> synchronous
    second();
    
}

function second(){
    console.log("Second");                             // 2nd => first(): working - second(): working - third(): blocked - getProductsViaAPI(): blocked ----> synchronous
    getProductsViaAPI();
    third();
}

function third (){
    console.log("Third");                              // 3rd => first(): working - second(): working - third(): working - getProductsViaAPI(): working outside(in callback queue) ----> synchronous with asynchronous
}

function getProductsViaAPI (){
    // async operation
    setTimeout(() => {
        console.log("Fetching products from API");     // 4th => first(): working - second(): working - third(): done - getProductsViaAPI(): working outside(in callback queue) ----> synchronous with asynchronous
    }, 3000);
}

first();

/* Notes : 
- Some time we will want data to come from Asynchronous code in synchronous code , there will be A special lesson on this topic called "Callback Function"
- Inside async function, it synchronously execute unless there async code (Example in src\5-Synchronous_Vs_Asynchronous_Programming\CallBackFunction.js)
*/