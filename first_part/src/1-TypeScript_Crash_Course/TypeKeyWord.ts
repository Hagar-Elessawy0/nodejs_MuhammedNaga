/*
How you use type keyword
* Alias : It is a way to define a new type that can be used instead of writing the type/s directly everywhere.
* Literal Types : It is a feature that allows you to specify that a given value can be one of a set of different types.
* Union : It is used to define a type that can be one of several different types. It's represented by the | (pipe) symbol.
*/


//? Alias
type PI = number;
let pi : PI = 3.14;

//? Literal Types
type status = "online" | "offline";      //! either online or offline no anything else
let theStatus : status;
theStatus = "online";
theStatus = "offline";
//theStatus = "sleeping";   //Error