// Partial allows us to create a new type with all properties of the original type set to optional
interface IUser {
    username : string,
    address : string,
    age : number
};

const user : IUser = {
    username : "Codeawy",
    address : "10 main street",
    age : 21
};

function updateUser(user : IUser , update : Partial<IUser>) {
    return { ...user , ...update };
}

console.log(updateUser(user , { username : "Hagar" , age : 22 }));      //{ username: 'Hagar', address: '10 main street', age: 22 }