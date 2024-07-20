// Object
const userProfile2 : { userName : string, age : number, isMarried : boolean, hobbies : string[]} = {
    userName : "Hagar",
    age : 21,
    isMarried : false,
    hobbies : ["Coding", "Gaming"]
}

//Array
const numbers : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Tuple : is a typed array with a pre-defined length and types for each index.
// The order must be observed
const list : [ number , string , {userName : string} , boolean] = [ 21 , "codeawy" , {userName : 'Hagar'} , true ];

// Void : returns nothing
function logMessage (message : string) : void {
    console.log(message);
}