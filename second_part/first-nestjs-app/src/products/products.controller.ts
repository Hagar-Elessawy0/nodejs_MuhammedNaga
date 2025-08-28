import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    // Patch,
    Delete,
    Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';

//* -> nest generate controller products
//* @Get Decorator to define a route handler(method below) for GET requests
//* Empty brackets means the base route of the controller
//* Any other route is written between the brackets
//* @Controller Decorator to define a controller in NestJS
//* When returning a javascript object or array from a route handler, it will be automatically serialized to JSON
//* @Param Decorator to define a route parameter
//* NestJS return status code 200 by default for successful requests except for POST requests which return 201 by default
//* Controllers are responsible for handling incoming requests and returning responses but business logic delegating that to providers(services)

@Controller('products') //? 'products' is the base route for this controller
//? normal class that decorated with @Controller
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {} //? Dependency Injection - NestJS will create an instance of ProductsService(Provider) and inject it into this controller
    //? This Decorator marks the method below as a route handler for GET requests to the 'products' route
    @Get()
    //? This method will handle GET requests to the 'products' route
    getProducts() {
        return this.productsService.getProducts(); //? When we return an array or object, NestJS automatically serializes it to JSON
    }

    @Get(':id') //? products/:id, ':id' is a route parameter
    getProductById(@Param('id') id: string) {
        return this.productsService.getProductById(id);
    }

    @Post()
    createProduct(@Body() body: { title?: string }) {
        return this.productsService.createProduct(body);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: string) {
        return this.productsService.deleteProduct(id);
    }

    @Put(':id')
    updateProduct(@Param('id') id: string, @Body() body: { title?: string }) {
        return this.productsService.updateProduct(id, body);
    }
}
