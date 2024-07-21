// Object Destructuring :instead of using variables, you can use the properties of an object
// order not important

// Example : 1
const { user1 , age , isMarried} /* destructuring */: { user1 : string, age : number, isMarried : boolean }  = {
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

// Example : 2
const person2 ={
    username : "Codeawy",
    age : 22,
    eat : function(){
        return "I'm eating";
    },
    walk() {
        return "I'm walking";
    }
}
const { eat , walk } = person2;  // Destructuring
console.log(eat());              // I'm eating
console.log(walk());             // I'm walking
