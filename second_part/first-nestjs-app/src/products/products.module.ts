import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";

//* -> nest generate module products

@Module({
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule {}
