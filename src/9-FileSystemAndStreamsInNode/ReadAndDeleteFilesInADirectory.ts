import * as http from 'http';
import { URLSearchParams } from 'url';
import fs, { access, promises as fsPromises } from 'fs';        //* importing promises from fs module
import path from 'path';

const server2 = http.createServer((req, res) => {

    const productsFilePath = path.join(__dirname, 'data', 'Products.json');

    const assetsFilePath = path.join(__dirname, 'assets');

    if(req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome Back</h1>');

    }else if(req.method === 'GET' && req.url === '/assets'){
        
        fs.access(assetsFilePath, (err) => {
            if(err) { 
                console.log("File doesn't exist or it can't be accessed", assetsFilePath);
                return;
            }

            //* Read files in assets directory.............................................
            fs.readdir(assetsFilePath, (err, files) => {

                if(err) {
                    console.error(err);
                    return;
                }

                console.log('Directory Files :', files);            //? array of the names of files in the directory (read files)

                res.writeHead(200, { 'Content-Type': 'text/html' });

                res.write('<h1>Here are your assets:</h1>');
                res.write('<ul style="width: 10%">');
                files.forEach(file => {       
                    res.write(`<li><span>${file}</span><a href="/delete?file=${encodeURIComponent(file)}" style="text-decoration:none; line-height: 1; color:red; font-weight:bold; float:right">&#x1F5D1;</a></li>`);
                });
                res.write('</ul>');

                res.end();
            });
        });

        //* Delete files in assets directory.............................................
    }else if(req.method === 'GET' && req.url?.startsWith('/delete')) {
        
        const file = decodeURIComponent(req.url.split('?')[1].split('=')[1]);

        const filePath = path.join(assetsFilePath, file);

        //? first check if the file exists in assets directory
        fs.access(filePath, (err) => {
            if(err) {
                console.log("File doesn't exist or it can't be accessed", assetsFilePath);
                return;
            }

            //? then delete the file
            fs.unlink(filePath, (err) => {

                if(err) {
                    console.error(err);
                    return;
                }

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`<h1>File ${file} has been Deleted</h1>`);

            });
        });


    }else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Page Not Found</h1>');
    }

});

const PORT2 = 5000;
server2.listen(PORT2, () => console.log(`Server running on http://localhost:${PORT2}`));


