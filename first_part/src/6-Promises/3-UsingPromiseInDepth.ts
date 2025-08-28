/* get todo list based on user id
to do this we need to make getUserTodos() function can access the result (user id) of fetchUser3()
*/

type TTodo1 = { 
    id: number,
    todo: string,
    userId : number
};

type TUser3 = {
    role : "ADMIN" | "USER",
    id : number,
    name : string
}
// sender
function getUserTodos3(user : TUser3) {
    console.log( `Fetching Todo List for user ID ${user.id}.....` );
    
    return new Promise<TTodo1[]>(function executor(resolve , reject){
                    setTimeout( () => {
                        const todolist : TTodo1[] = [ {
                                id: 1,
                                todo: "Do something nice for someone I care about",
                                userId : 10
                        },
                        {
                                id: 2,
                                todo: "Make coffee",
                                userId : 10
                        } ];
                        resolve(todolist); 
                        console.log(todolist)
                    }, 3000 );
    })
    
}

// Sender
function fetchUser3() {
    console.log( "Fetched User....." );

    return new Promise<TUser3>( (resolve, reject) => {
                    setTimeout(() => {
                        resolve({               // fulfilling the promise  -  static value
                            role : "USER", 
                            id : 10,
                            name : "Hagar",
                        });
                    }, 1500) 
                });
}

fetchUser3().then(user => getUserTodos3(user));
