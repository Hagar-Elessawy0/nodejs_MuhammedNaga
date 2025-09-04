import { HttpException, HttpStatus } from "@nestjs/common";

export class CustomException extends HttpException {
    constructor(msg?: string, status?: HttpStatus) {
        super(msg ?? "Error while creating product", status ?? HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
