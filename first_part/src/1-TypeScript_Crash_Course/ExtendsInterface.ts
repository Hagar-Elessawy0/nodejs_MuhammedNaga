interface IUser2 {
    user : string,
    age : number, 
    isMarried : boolean
};

/* without extending interface
    interface INewUser {
    user : string,
    age : number, 
    isMarried : boolean,
    address : string
};
*/

// with extending interface (Better way)
interface INewUser extends IUser2 {
    address : string
    image? : string
};


const userProfile5 : IUser2  = {
    user : "Codeawy",
    age : 21,
    isMarried : false
};

const newUser2 : INewUser = {
    ... userProfile5 ,
    address : "10 main street" ,
    image : "https://"
};
