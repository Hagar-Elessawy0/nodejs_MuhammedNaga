// Object Destructuring :instead of using variables, you can use the properties of an object
const { user1 , age , isMarried} : { user1 : string, age : number, isMarried : boolean }  = {
    user1 : "Codeawy",
    age : 21,
    isMarried : false
};

/*
const userProfile : { user1 : string, age : number, isMarried : boolean }  = {
    user1 : "Codeawy",
    age : 21,
    isMarried : false
};
*/ 