import { Injectable } from '@nestjs/common';
import { IProduct } from '../interfaces/products';

//* -> nest generate service products
//* Providers are used to encapsulate business logic and can be injected into controllers or other providers
//* How providers work in NestJS : Dependency Injection, Singleton by Default, Scope Control, @Injectable Decorator
//* Dependency Injection is a design pattern that allows a class to receive its dependencies from an external source
//* Singleton is a design pattern that restricts the instantiation of a class to a single instance
//* @Injectable Decorator to define a provider can be injected into other classes or modules

@Injectable()
export class ProductsService {
    private products: IProduct[] = [
        { id: 1, title: 'First Product' },
        { id: 2, title: 'Second Product' },
        { id: 3, title: 'Third Product' },
    ];

    getProducts() {
        return this.products;
    }

    getProductById(id: string) {
        const product = this.products.find((p) => p.id === +id);
        return product || { message: `Product with id ${id} not found` };
    }

    createProduct(body: { title?: string }) {
        this.products.push({
            id: this.products.length + 1,
            title: body.title || 'New Product',
        });
        return {
            message: 'Create Product',
            product: this.products[this.products.length - 1],
        };
    }

    deleteProduct(id: string) {
        const productIndex = this.products.findIndex((p) => p.id === +id);
        if (productIndex > -1) {
            this.products.splice(productIndex, 1);
            return { message: `Product with id ${id} deleted` };
        }
        return { message: `Product with id ${id} not found` };
    }

    updateProduct(id: string, body: { title?: string }) {
        const productIndex = this.products.findIndex((p) => p.id === +id);
        if (productIndex > -1) {
            this.products[productIndex].title =
                body.title || this.products[productIndex].title;

            return {
                message: `Product with id ${id} updated`,
                product: this.products[productIndex],
            };
        } else {
            return { message: `Product with id ${id} not found` };
        }
    }
}
