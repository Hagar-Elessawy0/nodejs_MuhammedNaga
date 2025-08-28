/* 
Heavy task : take a while

CallBack Function : 
- function that we pass as parameter
- wait for heavy task to complete, we use it when task from next lines is dependent on / need to the result of heavy task
- we can use it in synchronous code or asynchronous code scope

Remember : Inside async function, it synchronously execute unless there async code
*/


// problem with heavy task : this code will output empty array not the todoList
    let todoList_problem = [];
function getTodoList_problem() {
    console.log( "Fetching Todo List....." );
    //heavy task = async operation
    setTimeout( () => {
        todoList_problem = [ {
            id: 1,
            todo: "Do something nice for someone I care about"
        } ];
        ;
    }, 3000 );
}
getTodoList_problem();
console.log( "Todo List:", todoList_problem )
console.log( "Fetching Todo List has been completed" );
/* output :
Fetching Todo List.....
Todo List: []
Fetching Todo List has been completed
*/

//solution : use callback function, so getTodoList_fix() will wait and not execute until heavy task is done
let todoList_fix = [];
function getTodoList_fix(callback) {
    
    console.log( "Fetching Todo List....." );
    //heavy task = async operation
    setTimeout( () => {
        todoList_fix = [ {
            id: 1,
            todo: "Do something nice for someone I care about"
        } ];
    callback();     // this will execute after modification of todoList_fix is done ---> synchronous
    }, 3000 );
}
getTodoList_fix(() => {                               // this will still work until callback() isn't done, then it will complete execution and done
    console.log( "Todo List:", todoList_fix );
    console.log( "Fetching Todo List has been completed" );
});
/* output :
Fetching Todo List.....
Todo List: [ { id : 1, todo : "Do something nice for someone I care about" } ]
Fetching Todo List has been completed
*/
