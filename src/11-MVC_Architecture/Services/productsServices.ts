import { IProductBody, IProduct } from "../../10-Expressjs_And_API/Interfaces";

//* Service Layer => Data Storage and Retrieval

export default class ProductsServices {
    
    constructor(private products : IProduct[]) {
        this.products = products;
    }

    findAll() : IProduct[] {
        return this.products;
    }

    filterByQuery(filterQuery : string) {
        
            const propertiesToFilter = filterQuery.split(',');
            let filteredProducts : any = [];
            filteredProducts = this.findAll().map(product => {
                const filteredProduct = {};
                propertiesToFilter.forEach(property => {
                    if(product.hasOwnProperty(property as keyof IProduct)) {
                        filteredProduct[property] = product[property as keyof IProduct];
                    }
                });
                return {id : product.id, ...filteredProduct};
            });
            return filteredProducts;
    }

    getProductByID(productID : number) {
        return this.products[productID - 1];
    }

    createNewProduct(newProduct : IProductBody) {
        this.products.push({id : this.products.length + 1, ...newProduct});
    }

    updatePartOFProduct(productID : number, updatedData : IProductBody) {
        this.products[productID-1] = {...this.products[productID-1], ...updatedData};
    }

    deleteProduct(productID : number) {
        this.products = this.products.filter(product => product.id !== productID);
    }
}