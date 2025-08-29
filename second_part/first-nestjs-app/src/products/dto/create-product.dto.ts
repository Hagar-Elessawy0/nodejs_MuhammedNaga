//* Data Transfer Object (DTO) is an object that defines how the data will be sent over the network
//* DTO is used to define the shape of the data that is sent in requests and responses
//* DTOs are used to ensure that the data sent over the network is valid and conforms
import { Type } from "class-transformer";
import { IsNotEmptyObject, IsNotEmpty, IsString, IsInt, Length, MaxLength, ValidateNested } from "class-validator";

//* class-validator is a library that allows us to use decorators to validate the data in our DTOs
//* when using any validation decorators, it will check the data that is sent in the request also
//* if the data is invalid, it will throw a 400 Bad Request error
//* we need to enable the validation pipe in the main.ts file to use the class-validator library or use @UsePipes(ValidationPipe) in the controller or method level

class CreateProductDetailsDto {
    //? Required fields

    @IsString()
    @IsNotEmpty()
    color: string;

    @IsInt()
    @IsNotEmpty()
    size: number;

    @IsString()
    @IsNotEmpty()
    brand: string;
}

export class CreateProductDto {
    @Length(5, 20)
    title: string;

    @MaxLength(200)
    description: string;

    //* validate nested object
    @ValidateNested()
    @IsNotEmptyObject()
    @Type(() => CreateProductDetailsDto)
    details: CreateProductDetailsDto;
}
