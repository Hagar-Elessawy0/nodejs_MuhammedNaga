// let todoList2 = [];
// function getTodoList2() {
//     console.log( "Fetching Todo List....." );
//     setTimeout( () => {
//         todoList2 = [ {
//             id: 1,
//             todo: "Do something nice for someone I care about"
//         } ];
//     }, 3000 );
// }

type TUser2 = {
    role : "ADMIN" | "USER",
    id : number,
    name : string
}

// Sender
function fetchUser2() {
    console.log( "Fetched User....." );

    return new Promise<TUser2>( (resolve, reject) => {
                    setTimeout(() => {
                        console.log( "Fetched User With ID 10....." );
                        resolve({               //fulfilling the promise
                            role : "USER",
                            id : 10,
                            name : "Hagar",
                        });
                    },1500) 
                });
}

// ! can't access the promise result that its sender is regular function by this syntax
const promiseResult = fetchUser2();
console.log(promiseResult);     //Fetched User..... Promise { <pending> } Fetched User With ID 10.....

// * then method : accessing the result of the promise either on success(value) or both on success(value) and failure(error) 
// accessing fulfilled promise value only
fetchUser2().then(value => console.log(value));      // { id: 10, name: 'Hagar' }
// you can handle the error too and this is preferred 

function onSuccesse1(value : TUser2) {
    if(value.role === "ADMIN") {
        console.log("Welcome Admin, Here you can navigate to the Dashboard");
    }else{
        console.log(`Welcome ${value.name}, You can checkout your products now.`);
    }
    
}
function onRejected1() {
    console.error("Failed to fetch user");
}

fetchUser2().then(onSuccesse1 , onRejected1);

