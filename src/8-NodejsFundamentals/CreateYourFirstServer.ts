import { write } from 'fs';
import * as http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<div style="background-color: red;"><h1>Hello, World</h1></div>');
    res.end('<span>Hi, there!</span>');
});

const PORT = 5000;
server.listen(PORT); //* http://localhost:5000 <--- search on browser <--- so we must compile this file to JavaScript
console.log(`Server running on http://localhost:${PORT}`);

