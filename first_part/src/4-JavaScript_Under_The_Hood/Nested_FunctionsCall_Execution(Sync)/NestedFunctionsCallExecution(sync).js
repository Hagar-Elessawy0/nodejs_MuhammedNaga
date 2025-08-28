function first (){
    console.log("First"); 
    second();   // function call
}

function second(){
    console.log("Second"); 
    third();    // function call                           
}

function third (){
    console.log("Third");
}                              

first();    // function call