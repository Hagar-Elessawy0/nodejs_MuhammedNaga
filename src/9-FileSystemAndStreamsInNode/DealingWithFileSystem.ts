import * as http from 'http';
import { URLSearchParams } from 'url';
import fs from 'fs';
import path from 'path';

const server = http.createServer((req, res) => {

    const productsFilePath = path.join(__dirname, 'data', 'Products.json');

    if(req.url === '/products') {
        // fs.readFile('./src/9-FileSystemAndStreamsInNode/data/Products.json', 'utf-8', (err, data) => {   //without using path module
        
        fs.access(productsFilePath, (err) => {

            if(err) {
                console.log("File doesn't exist or it can't be accessed", productsFilePath);
                return;
            }

            fs.readFile(productsFilePath, 'utf-8', (err, data) => {
                const jsonProducts: {products: [{id: number, title: string, description: string}]} = JSON.parse(data);
                //console.log('Error => ', err);
                //console.log('Data => ', jsonProducts);
                //console.log('Data => ', JSON.parse(data.toString()));            // without utf-8(encoding)
                /*
                @const submittedProduct = {
                @    id: 5, 
                @    title: "Fifth product",
                @    description: "This is the fifth product"
                @};
                @jsonProducts.products.push(submittedProduct);
                @const updatedProducts = JSON.stringify(jsonProducts, null, 4);
                @fs.writeFile(productsFilePath, updatedProducts, {flag : "w"}, (err) => {
                @    console.log(err);
                @});
                */
                
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(data);
                res.end();

            });

        });

        //console.log("loading products....");        //? it will print before the response that in readFile block because it is asynchronous

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
            const title1 = data.get('title');
            const description1 = data.get('description');

            fs.readFile(productsFilePath, 'utf-8', (err, data) => {
                const jsonProducts: {products: [{id: number, title: string, description: string}]} = JSON.parse(data);
                //? adding new value to the array in the json data
                jsonProducts.products.push({id: jsonProducts.products.length + 1, title: title1 as string, description: description1 as string});
                const updatedProducts = JSON.stringify(jsonProducts, null, 4);
                fs.writeFile(productsFilePath, updatedProducts, {flag : "w"}, (err) => {
                console.log(err)});
            
                //! Callback Hell !!! ---> Use Promises
            });
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

const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


