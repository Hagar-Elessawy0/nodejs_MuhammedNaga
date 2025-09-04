import { HttpStatus, Injectable } from "@nestjs/common";
import { IProduct } from "../interfaces/products";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { CustomException } from "src/exceptions/customException";

//* -> nest generate service products
//* Providers are used to encapsulate business logic and can be injected into controllers or other providers
//* How providers work in NestJS : Dependency Injection, Singleton by Default, Scope Control, @Injectable Decorator
//* Dependency Injection is a design pattern that allows a class to receive its dependencies from an external source
//* Singleton is a design pattern that restricts the instantiation of a class to a single instance
//* @Injectable Decorator to define a provider can be injected into other classes or modules

@Injectable()
export class ProductsService {
    private products: IProduct[] = [
        { id: 1, title: "First Product" },
        { id: 2, title: "Second Product" },
        { id: 3, title: "Third Product" },
    ];

    getProducts() {
        return this.products;
    }

    getProductById(id: number) {
        const product = this.products.find((p) => p.id === id);
        return product || { message: `Product with id ${id} not found` };
    }

    createProduct(product: CreateProductDto) {
        if (product.price >= 1000) {
            throw new CustomException("Price too high", HttpStatus.BAD_REQUEST);
        }
        const newProduct = { id: this.products.length + 1, ...product };
        this.products.push(newProduct);
        return { message: "Create Product", product: newProduct };
    }

    deleteProduct(id: number) {
        const productIndex = this.products.findIndex((p) => p.id === id);
        if (productIndex > -1) {
            this.products.splice(productIndex, 1);
            return { message: `Product with id ${id} deleted` };
        }
        return { message: `Product with id ${id} not found` };
    }

    updateProduct(id: number, edits: UpdateProductDto) {
        const productIndex = this.products.findIndex((p) => p.id === id);
        if (productIndex > -1) {
            this.products[productIndex] = {
                ...this.products[productIndex],
                ...edits,
            };

            return {
                message: `Product with id ${id} updated`,
                product: this.products[productIndex],
            };
        } else {
            return { message: `Product with id ${id} not found` };
        }
    }
}
