import { write } from 'fs';
import * as http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<div style="background-color: tomato; width: fit-content"><h1 style="padding: 3rem;">Hello World</h1></div>');
    res.end('<span>Hi, there!</span>');
});

const PORT = 8000;
server.listen(PORT , () => console.log(`Server running on http://localhost:${PORT}`)); //* http://localhost:5000 <--- search on browser <--- so we must compile this file to JavaScript


