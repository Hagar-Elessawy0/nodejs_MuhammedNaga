// Example 1 : sync operation
let todoList1 = [];
function getTodoList() {
    console.log( "Fetching Todo List1....." );

    todoList1 = [ {
        id: 1,
        todo: "Do something nice for someone I care about"
    } ];

    console.log( "Fetching Todo List1 has been completed" );
}
console.log( todoList1 );
getTodoList();
console.log( todoList1 );
/*
how it works:                                                                                                                                                                                                               output:
1st => todoList1 definition: executing - getTodoList() definition: blocked - console log(todoList1): blocked - getTodoList() call: blocked - console log(todoList1): blocked
2nd => todoList1 definition: done - getTodoList() definition: executing - console log(todoList1): blocked - getTodoList() call: blocked - console log(todoList1): blocked
3rd => getTodoList() definition: done - console log(todoList1): executing - getTodoList() call: blocked - console log(todoList1): blocked                                                                                   []
4th => console log(todoList1): done - getTodoList() call: executing(first console log: executing - todoList1 modification: blocked - second console log: blocked) - console log(todoList1): blocked                          Fetching Todo List1.....
5th => getTodoList() call: executing(first console log: done - todoList1 modification: executing - second console log: blocked) - console log(todoList1): blocked
6th => getTodoList() call: executing(first console log: done - todoList1 modification: done - second console log: executing) - console log(todoList1): blocked                                                               Fetching Todo List1 has been completed
7th => getTodoList() call: done(first console log: done - todoList1 modification: done - second console log: done)  - console log(todoList1): executing                                                                      [ { id : 1, todo : "Do something nice for someone I care about" } ] 
last => console log(todoList1): done
*/

//-------------------------------------------------------------------------

// Example 2 : async operation
let todoList2 = [];
function getTodoList_async() {
    console.log( "Fetching Todo List2....." );
    // Asynchronous operation
    setTimeout( () => {
        todoList2 = [ {
            id: 2,
            todo: "Do something nice for someone I care about"
        } ];
    }, 3000 );

    console.log( "Fetching Todo List2 has been completed" );
}
console.log( todoList2 );
getTodoList_async();
console.log( todoList2 );
/*
how it works:                                                                                                                                                                                                               output:
1st => todoList2 definition: executing - getTodoList_async() definition: blocked - console log(todoList2): blocked - getTodoList_async() call: blocked - console log(todoList2): blocked
2nd => todoList2 definition: done - getTodoList_async() definition: executing - console log(todoList2): blocked - getTodoList_async() call: blocked - console log(todoList2): blocked
3rd => getTodoList_async() definition: done - console log(todoList2): executing - getTodoList_async() call: blocked - console log(todoList2): blocked                                                                        []
4th => console log(todoList2): done - getTodoList_async() call: executing(first console log: executing - todoList2 modification: blocked - second console log: blocked) - console log(todoList2): blocked                    Fetching Todo List2.....
5th => getTodoList_async() call: executing(first console log: done - todoList2 modification: executing outside(callback queue) - second console log: executing) - console log(todoList2): blocked                            Fetching Todo List2 has been completed
6th => getTodoList_async() call: executing(first console log: done - todoList2 modification: executing outside(callback queue) - second console log: done) - console log(todoList2): executing                               []
last => console log(todoList2): done - getTodoList_async() call: done(first console log: done - todoList2 modification: done - second console log: done)
*/