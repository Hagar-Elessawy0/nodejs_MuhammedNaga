import { PartialType } from "@nestjs/mapped-types";
import { CreateProductDto } from "./create-product.dto";

//* PartialType is a helper function to create a new class that is a partial version of another class

export class UpdateProductDto extends PartialType(CreateProductDto) {}  //? Optional fields
