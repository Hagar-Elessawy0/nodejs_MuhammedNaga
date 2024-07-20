/*
- interfaces : is a way to define the structure of an object
- first litter of interfaces must be uppercase.
- prefer starting with I.
*/

interface IUser1 {
    user : string,
    age : number, 
    isMarried : boolean
    address? : string       // ? => optional
};

/* without using interface
const userProfile4 : { user : string, age : number, isMarried : boolean }  = {
    user : "Codeawy",
    age : 21,
    isMarried : false
};

const newUser1 : { user : string, age : number, isMarried : boolean, address : string } = { ... userProfile4 , address : "10 main street" };
*/

// with using interface (Better way)
const userProfile4 : IUser1  = {
    user : "Codeawy",
    age : 21,
    isMarried : false
};

const newUser1 : IUser1 = { ... userProfile4 , address : "10 main street" };
