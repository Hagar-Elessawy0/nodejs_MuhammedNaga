import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class UppercasePipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if (typeof value.title !== "string") {
            throw new BadRequestException("Title must be a string");
        }
        value.title = value.title.toUpperCase();
        return value;
    }
}
