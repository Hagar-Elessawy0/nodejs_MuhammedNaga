//let todoList1= [];

type TUser1 = {
    role : "ADMIN" | "USER",
    id : number,
    name : string
}

// function getTodoList1() {
//     console.log( "Fetching Todo List....." );
//     setTimeout( () => {
//         todoList1 = [ {
//             id: 1,
//             todo: "Do something nice for someone I care about"
//         } ];
//     }, 3000 );
// }

function fetchUser1<TUser1>() {
    console.log( "Fetched User....." );
    
    return new Promise (function executor(resolve, reject) {
        setTimeout(() => {
            console.log( "Fetched User With ID 10....." );
            resolve({                   // must pass an object(value)
                role : "USER",
                id : 10,
                name : "Hagar"
            })
        }, 1500);
    })
}
