import ProductsServices  from "../Services/productsServices";
import { IProductBody} from "../../10-Expressjs_And_API/Interfaces";
import { Request, Response } from "express";

class ProductController {

    constructor(private productsService : ProductsServices) {
        this.getProducts = this.getProducts.bind(this);
        // this.getProductByID = this.getProductByID.bind(this);
        // this.createNewProduct = this.createNewProduct.bind(this);
        // this.updateProduct = this.updateProduct.bind(this);
        // this.deleteProduct = this.deleteProduct.bind(this);
    }

    async getProducts(req :Request , res :Response){       //? async function because it will take time to execute it so we use it to not freeze the server
        //const filterQuery = req.query.filter as string;
            try {
                const data = await this.productsService.findAll();
                res.json(data);
            } catch (error) {
                console.error(error);
            }
    }
    
    // getProductByID(req :Request, res :Response) {
    //     const productID = +req.params.id;
    //     (isNaN(productID) || productID <= 0 || productID > this.productsService.findAll().length)? res.status(404).send("Invalid ID") : res.send(this.productsService.getProductByID(productID));
    // }

    // createNewProduct(req :Request, res :Response) {
    //     const newProduct : IProductBody = req.body;
    //     this.productsService.createNewProduct(newProduct);
    //     res.status(201).send("Product has been created"); 
    // }

    // updateProduct(req :Request, res :Response) {
    //     const productID = +req.params.id;
    //     if(isNaN(productID) || productID <= 0 || productID > this.productsService.findAll().length) {
    //         res.status(404).send("Invalid ID");
    //         return;
    //     }
    //     const updatedData = req.body;
    //     this.productsService.updatePartOFProduct(productID, updatedData);
    //     res.send("Product has been updated successfully");
    // }

    // deleteProduct(req :Request, res :Response) {
    //     const productID = +req.params.id;
    //     if(isNaN(productID) || productID <= 0 || productID > this.productsService.findAll().length) {
    //         res.status(404).send("Invalid ID");
    //         return;
    //     }
    //     this.productsService.deleteProduct(productID);
    //     for(let i = 0; i < this.productsService.findAll().length; i++) {
    //         this.productsService.findAll()[i].id = i + 1;
    //     }
    //     res.send("Product has been deleted successfully");
    // }
}

export default ProductController;