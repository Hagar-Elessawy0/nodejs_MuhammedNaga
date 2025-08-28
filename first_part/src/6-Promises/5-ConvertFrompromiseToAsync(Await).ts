/* 
- using the async and await keywords to access the data from a promise
- handling error with try and catch
note :
- the await keyword must be used inside an async function
- try and catch only works for runtime errors
- if error occurs in try block, then it will be handled by catch block and ignore the rest of the try block else catch block will be ignored
- try/catch is works synchronously so it is not useful with async operations
*/
type TTodo3 = { 
    id: number,
    todo: string,
    userId : number
};

type TUser5 = {
    role : "ADMIN" | "USER",
    id : number,
    name : string
}

//sender
function getUserTodos5(user : TUser5) {
    console.log( `Fetching Todo List for user ID ${user.id}.....` );
    
    return new Promise<TTodo3[]>(function executor(resolve , reject){
                    setTimeout( () => {
                        const todolist : TTodo3[] = [ {
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
function fetchUser5(user : TUser5) {
    console.log( "Fetched User....." );

    return new Promise<TUser5>( (resolve, reject) => {
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

function onSuccesse3(user : TUser5) {
    return getUserTodos5(user)
}
/*function onRejected3(error : Error) {       // Error Type is defined in TS
    return console.error(`Error : ${error}`)
}
function onFinally1() {
    console.log("Stop loading");
}
fetchUser5(user3).then(onSuccesse3).catch(onRejected3).finally(onFinally1); */
const user3 : TUser5 ={
    role : "USER",   
    id : 101,
    name : "Hagar",
}

// * async function: function that returns a promise resolve or reject
async function getUserData(){
    try{ 
        // Code
        const userData = await fetchUser5(user3);   // * await will wait until the promise is resolved
        console.log(userData);                      // because this code needs data from the promise
        await onSuccesse3(userData);
    }catch(error){
        // Runtime Error Handling
        console.error(error);
    }
}
getUserData();