/*
- create express app
- http methods (get, post, put, patch, delete)
- create and handle routes
- route params 
- send response
- fake data
- query params + application for filtering
- body params
- use express.json() middleware
*/

import express from "express";
import { generateFakeProduct } from "./Utils/FakeData";
import { IProduct } from "./Interfaces";

const app = express();

//app.use(express.json({ type: "custom/headers"}));                //* middleware for parsing type option: custom/headers
app.use(express.json());                                           //* middleware for parsing Application/json (default)

app.get('/', (req, res) => {
    res.send('Welcome to Express Server');
})

// const fakeDataStatic = [
//     { id: 1, title: "Red T-Shirt" },
//     { id: 2, title: "White T-Shirt" },
//     { id: 3, title: "Black T-Shirt" }
// ];
let fakeData = generateFakeProduct();

//* get all products
app.get("/products", (req, res) => {

    //* query params: filter data by keyof IProduct
    // const queryParams = req.query;
    // console.log(queryParams);     // object

    const filterQuery = req.query.filter as string;          //! as string to allow to use split method on it
    //console.log(filterQuery);        // string value | undefined

    //? check if filterQuery is not empty before filtering and send response
    if(filterQuery) {
        const propertiesToFilter = filterQuery.split(',');   //! multiple value is separated by comma 

        let filteredProducts : any = [];
        filteredProducts = fakeData.map(product => {
            const filteredProduct = {};
            propertiesToFilter.forEach(property => {
                if(product.hasOwnProperty(property)) {
                    filteredProduct[property] = product[property as keyof IProduct];
                }
            });
            return {id : product.id, ...filteredProduct};    //! Must return ID always
        });

        res.send(filteredProducts);
    }else {
        //* send response
        res.send(fakeData);
    }

    

})

//* route params
app.get("/products/:id", (req, res) => {

    const productID = +req.params.id;       //? convert to number

    //? First validation of params
    if(isNaN(productID) || productID <= 0 || productID > fakeData.length) {
        res.status(404).send("Invalid ID");
        return;
    }

    //? then send the data as response
    res.send(fakeData[productID - 1]);

})

///////////////////////////////////////////////////////////////////////////////
//* Create new product (POST request)
app.post("/products", (req, res) => {
    
    console.log(req.body);        //? object - body of the request in JSON format 

    //! we don't make validation here but we must do it first in controller
    const newProduct = req.body;
    fakeData.push({id : fakeData.length + 1, ...newProduct})
    
    //! callback function must send response, it isn't needed to return anything
    // return {message : "Product has been created"};     // undefined
    res.status(201).send({message : "Product has been created"});  // {message : "Product has been created"}    //? 201 - created

});

///////////////////////////////////////////////////////////////////////////////
//* Update product (Patch request)
app.patch("/products/:id", (req, res) => {

    const productID = +req.params.id;       //? convert to number

    //? First validation of params
    if(isNaN(productID) || productID <= 0 || productID > fakeData.length) {
        res.status(404).send("Invalid ID");
        return;
    }

    //! Second validation of updated data before updating but we didn't make validation here
    //* body params
    const updatedData = req.body;

    //? Then update the data
    fakeData[productID-1] = {...fakeData[productID-1], ...updatedData};             //! original data first, then updated data to update specific properties

    //? Finally send the data as response
    res.send("Product has been updated successfully");
    
})
//! same as post but when we use post must send all properties in the body not only property we want to update or else rest of the properties will be deleted 

////////////////////////////////////////////////////////////////////////////////
//* Delete product (Delete request)
app.delete("/products/:id", (req, res) => {

    const productID = +req.params.id;       //? convert to number

    //? First validation of params
    if(isNaN(productID) || productID <= 0 || productID > fakeData.length) {
        res.status(404).send("Invalid ID");
        return;
    }

    //? Second delete the data by filtering and return all data except the deleted one
    fakeData = fakeData.filter(product => product.id !== productID);

    //? Then reorder the data
    for(let i = 0; i < fakeData.length; i++) {
        fakeData[i].id = i + 1;
    }

    //? Finally send the data as response
    res.send("Product has been deleted successfully");

})

const PORT : number = 8005;
app.listen(PORT,() => {
    console.log(`Server running on http://localhost:${PORT}`);
})


//! in the end we can observe the code that make fwe things is too long and number of lines is big and this is a bad practice
//! in the next section we will learn how MVC architecture handles this