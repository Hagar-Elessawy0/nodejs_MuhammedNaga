import { HttpException, HttpStatus } from "@nestjs/common";

//* Exceptions filters are used to handle exceptions across the whole application in a single place
//? Custom exception for forbidden access

export class ForbiddenException extends HttpException {
    constructor() {
        super("Forbidden", HttpStatus.FORBIDDEN);
    }
}
