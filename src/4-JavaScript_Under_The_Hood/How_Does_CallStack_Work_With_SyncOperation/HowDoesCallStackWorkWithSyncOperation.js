/* 
stack:
- data structure 
- last in first in (LIFO)

call stack:
- application stack
- it is responsible for track function calls on the call stack in browser
\*/
function first (){
    console.log("First");                              
}

function second(){
    console.log("Second");                             
}

function third (){
    console.log("Third");
}                              

first();    // function call
second();   // function call
third();    // function call