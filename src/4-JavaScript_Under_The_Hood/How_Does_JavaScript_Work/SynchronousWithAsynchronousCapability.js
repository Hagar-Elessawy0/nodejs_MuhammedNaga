function first (){
    console.log("First");                              // 1st : first() working - second() blocked - third() blocked - getProductsViaAPI() blocked ----> synchronous
    second();
    
}

function second(){
    console.log("Second");                             // 2nd : first() working - second() working - third() blocked - getProductsViaAPI() blocked ----> synchronous
    getProductsViaAPI();
    third();
}

function third (){
    console.log("Third");                              // 3rd : first() working - second() working - third() working - getProductsViaAPI() working outside ----> synchronous with asynchronous
}

function getProductsViaAPI (){
    // async operation
    setTimeout(() => {
        console.log("Fetching products from API");     // 4th : first() working - second() working - third() done - getProductsViaAPI() working outside ----> synchronous with asynchronous
    }, 3000);
}

first();

/* note : some time we will want data to come from Asynchronous code in synchronous code ,
    there will be A special section on this topic called "5-Synchronous Vs Asynchronous programming"
*/