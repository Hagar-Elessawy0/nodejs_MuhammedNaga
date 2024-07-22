// global scope => added to window object 
var username1;                    // can be declared without initialization
username1 = "codeawy";

var isLoggedIn = true;
if(isLoggedIn) {
    console.log(username1);       // scope of username1 is global  -  output : codeawy
    // if scope
    var username2 = "Hagar";    
}
console.log(username2);         // scope of username2 is global -  output : Hagar

function printUsername() {
    // function scope
    var username3 = "Mohamed";
    console.log(username3);       // scope of username3 is function -  output : Mohamed
}
//console.log(username3);         // scope of username3 is function -  output : ReferenceError: username3 is not defined

