import { IProductBody, IProduct } from "../../10-Expressjs_And_API/Interfaces";
import pool from "../Models/db";

//* Service Layer => Data Storage and Retrieval

export default class ProductsServices {
    
    constructor(private products : IProduct[]) {
        this.products = products;
    }

    async findAll(): Promise<{products : IProduct[], length : number | null}>  {
        const products = await pool.query('SELECT * FROM products');
        return {
            products : products.rows,
            length : products.rowCount
        };
    }

    // filterByQuery(filterQuery : string) {
        
    //         const propertiesToFilter = filterQuery.split(',');
    //         let filteredProducts : any = [];
    //         filteredProducts = this.findAll().map(product => {
    //             const filteredProduct = {};
    //             propertiesToFilter.forEach(property => {
    //                 if(product.hasOwnProperty(property as keyof IProduct)) {
    //                     filteredProduct[property] = product[property as keyof IProduct];
    //                 }
    //             });
    //             return {id : product.id, ...filteredProduct};
    //         });
    //         return filteredProducts;
    // }

    // getProductByID(productID : number) {
    //     return this.products[productID - 1];
    // }

    // createNewProduct(newProduct : IProductBody) {
    //     this.products.push({id : this.products.length + 1, ...newProduct});
    // }

    // updatePartOFProduct(productID : number, updatedData : IProductBody) {
    //     this.products[productID-1] = {...this.products[productID-1], ...updatedData};
    // }

    // deleteProduct(productID : number) {
    //     this.products = this.products.filter(product => product.id !== productID);
    // }
}