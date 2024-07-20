//keyof : is a keyword in TypeScript which is used to extract the key type from an object type.
interface IUser3 {
    username : string,
    age : number,
    address : string
}

type UserKeys = keyof IUser3;       // username | age | address

const user2 : IUser3 = {
    username : "Codeawy",
    age : 21,
    address : "10 main street"
}

function getProperty(obj : IUser3, key : UserKeys) {
    return obj[key];
}

console.log(getProperty(user2, "username"));        //"Codeawy"
console.log(getProperty(user2, "age"));             //21
console.log(getProperty(user2, "address"));         //"10 main street"