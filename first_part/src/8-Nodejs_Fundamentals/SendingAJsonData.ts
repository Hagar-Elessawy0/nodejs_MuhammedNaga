import { write } from 'fs';
import * as http from 'http';
import { URLSearchParams } from 'url';


const server = http.createServer((req, res) => {
    if(req.url === '/products') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const data = {
            products: [
                {id: 1, title: 'First product'},
                {id: 2, title: 'Second product'},
                {id: 3, title: 'Third product'},
                {id: 4, title: 'Fourth product'}
            ]
        }
        res.write(JSON.stringify(data));
        res.end();
    }else if(req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome Back</h1>');
    }else if(req.url === '/product/new') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
                <html>
                    <head>
                        <title>Add Product</title>
                    </head>
                    <body>
                        <h2>Add New Product</h2>
                        <form method="POST" action="/add-product">
                            <label for="title">Title:</label><br>
                            <input type="text" id="title" name="title" required><br><br>
                            <label for="description">Description:</label><br>
                            <textarea id="description" name="description" rows="4" cols="50" required></textarea><br><br>
                            <button type="submit">Add Product</button>
                        </form>
                    </body>
                </html>`
        );
        res.end();
    }else if(req.method === 'POST' && req.url === '/add-product') {
        let body = '';
        req.on('data', chunk => {           // * get the url that contains form data from the request in buffer 
            body += chunk.toString();       // * convert it to string
        })

        req.on('end', () => {
            const data = new URLSearchParams(body) // * convert it to object where key = name and value = the data from the form
            //console.log(data);                   // { title: 'My Title', description: 'My Description' }
            const title = data.get('title');
            const description = data.get('description');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(`<h1>Product has been Added</h1>
                        <h2>Title: ${title}</h2>
                        <h2>Description: ${description}</h2>`);
            res.end();
        })
    }else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Page Not Found</h1>');
    }

});

const PORT = 8001;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


