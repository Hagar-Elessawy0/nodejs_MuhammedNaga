import { write } from 'fs';
import * as http from 'http';
import { json } from 'node:stream/consumers';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const data = {
        products: [
            {id: 1, title: 'First product'},
            {id: 2, title: 'Second product'},
            {id: 3, title: 'Third product'},
            {id: 4, title: 'Fourth product'},
        ]
    }
    res.write(JSON.stringify(data));
    res.end();
});

const PORT = 5000;
server.listen(PORT);
console.log(`Server running on http://localhost:${PORT}`);

