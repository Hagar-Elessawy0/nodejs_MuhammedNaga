// CallBack Hell : many nested callbacks, resulting in code that is hard to read and maintain

let todoList_fix = [];
function getTodoList_fix(callback) {
    
    console.log( "Fetching Todo List....." );
    //heavy task = async operation
    setTimeout( () => {
        todoList_fix = [ {
            id: 1,
            todo: "Do something nice for someone I care about"
        } ];
    callback();
    }, 3000 );
}

function fetchUser(callback) {
    //heavy task = async operation
    setTimeout( () => {
        console.log( "Fetched User With ID 10....." );
        callback();
    }, 3000 );
}

fetchUser(() => {
    getTodoList_fix(() => {
        console.log( "Todo List:", todoList_fix );
        console.log( "Fetching Todo List has been completed" );
    });
});

// we will learn how to fix this problem in next section
