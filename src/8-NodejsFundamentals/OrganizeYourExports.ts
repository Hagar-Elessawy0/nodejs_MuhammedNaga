import something , { sayHello as welcome } from './MyFirstNodeApp';       
/* 
* "server" is exported default so if nothing is named 'something' in MyFirstNodeApp.ts , it will import "server"
* can be named anything in test.ts
* don't write inside {}
*/
console.log(something);     // My Local Server

/*
* sayHello is not exported default so if nothing is named 'sayHello' in MyFirstNodeApp.ts , it will be an error
* so we should write the same name as in MyFirstNodeApp.ts when importing
* in test.ts we can change the name by writing as 'newName' after original name and in this case we can't use the original name
* must write inside {}
*/
welcome();                 // Hello World    