// * const http = require('http');   ==>  CommonJS Module (default)
import http = require('http');  //* ===>  ES Module

const server = 'My Local Server';
export default server;      //! export default is used only once in a file

export function sayHello() {
    console.log('Hello World');
};