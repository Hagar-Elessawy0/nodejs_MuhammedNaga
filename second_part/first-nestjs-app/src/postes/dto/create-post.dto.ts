import { IsDateString, IsString } from "class-validator";

export class CreatePostDto {
    @IsString()
    title: string;

    @IsDateString()
    createdAt: Date;
}
