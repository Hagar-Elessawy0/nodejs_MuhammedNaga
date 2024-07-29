"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var data = {
        products: [
            { id: 1, title: 'First product' },
            { id: 2, title: 'Second product' },
            { id: 3, title: 'Third product' },
        ]
    };
    res.write(JSON.stringify(data));
    res.end();
});
var PORT = 5000;
server.listen(PORT);
console.log("Server running on http://localhost:".concat(PORT));
