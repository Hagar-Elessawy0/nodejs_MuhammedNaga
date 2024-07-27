/*  DataBase ---> 100 users ----> id increase by 1
    Error ---> you send id that does not exist '4545' as argument in fetchUser()
*/


type TTodo2 = { 
    id: number,
    todo: string,
    userId : number
};

type TUser4 = {
    role : "ADMIN" | "USER",
    id : number,
    name : string
}
//sender
function getUserTodos4(user : TUser4) {
    console.log( `Fetching Todo List for user ID ${user.id}.....` );
    
    return new Promise<TTodo2[]>(function executor(resolve , reject){
                    setTimeout( () => {
                        const todolist : TTodo2[] = [ {
                                id: 1,
                                todo: "Do something nice for someone I care about",
                                userId : user.id
                        },
                        {
                                id: 2,
                                todo: "Make coffee",
                                userId : user.id
                        } ];
                        resolve(todolist); 
                        console.log(todolist)
                    }, 3000 );
    })
    
}

// Sender
function fetchUser4(user : TUser4) {
    console.log( "Fetched User....." );

    return new Promise<TUser4>( (resolve, reject) => {
                    const userIdList = Array.from({length : 100}, (_, index) => index + 1);    // generate an array having 100 objects each having id as index + 1

                    setTimeout(() => {
                        if(user.id > userIdList.length || user.id < 1){
                            reject("Unknown User ID " + user.id);  // rejecting the promise
                        }else{
                            resolve(user);                         // fulfilling the promise
                        }
                    }, 1500) 
                });
}

function onSuccesse2(user : TUser4) {
    return getUserTodos4(user)
}
function onRejected2(error : Error) {       // Error Type is defined in TS
    return console.error(`Error : ${error}`)
}
function onFinally() {
    console.log("Stop loading");
}

/* // then method
fetchUser4({
    role : "USER",   
    id : 101,
    name : "Hagar",
}).then(onSuccesse2, onRejected2);
*/
// * catch method : accessing the Error of the promise on failure
// * finally method : operation wanted to be executed when the promise is settled ( either fulfilled or rejected )
fetchUser4({
    role : "USER",   
    id : 101,
    name : "Hagar",
}).then(onSuccesse2).catch(onRejected2).finally(onFinally);
