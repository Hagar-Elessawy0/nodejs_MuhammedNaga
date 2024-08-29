import * as http from 'http';
import { URLSearchParams } from 'url';
import fs, { promises as fsPromises } from 'fs';        //* importing promises from fs module
import path from 'path';

const server = http.createServer((req, res) => {

    const productsFilePath = path.join(__dirname, 'data', 'Products.json');

    if(req.url === '/products') {
        
        fs.access(productsFilePath, (err) => {

            if(err) {
                console.log("File doesn't exist or it can't be accessed", productsFilePath);
                return;
            }

            fs.readFile(productsFilePath, 'utf-8', (err, data) => {
                
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(data);
                res.end();

            });

        });
        
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
        req.on('data', chunk => {          
            body += chunk.toString();       
        })

        //* Converting to Promises.........................................................
        req.on('end', async () => {                                                     //? covert callback to async function
            const data = new URLSearchParams(body)
            const title1 = data.get('title');
            const description1 = data.get('description');


            //? Converting to Promises
            try {

                const jsonData =  await fsPromises.readFile(productsFilePath, 'utf-8'); //? store the file data in jsonData

                const jsonProducts: {products: [{id: number, title: string, description: string}]} = JSON.parse(jsonData);

                jsonProducts.products.push({id: jsonProducts.products.length + 1, title: title1 as string, description: description1 as string});

                const updatedProducts = JSON.stringify(jsonProducts, null, 4);

                fsPromises.writeFile(productsFilePath, updatedProducts, {flag : "w"});

            }catch(err) {
                console.log(err);
            }
            
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(`<h1>Product has been Added</h1>
                        <h2>Title: ${title1}</h2>
                        <h2>Description: ${description1}</h2>`);
            res.end();
        })
        
    }else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Page Not Found</h1>');
    }

});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


