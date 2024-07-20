// spread operator ... : used to copy an object into another object
const userProfile3 : { user : string, age : number, isMarried : boolean }  = {
    user : "Codeawy",
    age : 21,
    isMarried : false
};

const newUser : { user : string, age : number, isMarried : boolean, address : string } = { ... userProfile3 , address : "10 main street" };

console.log({ userProfile3 });      //{ userProfile3: { user: 'Codeawy', age: 21, isMarried: false } }
console.log({ newUser });           //{ newUser: { user: 'Codeawy', age: 21, isMarried: false, address: '10 main street' } }
