import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import dotenv from "dotenv";

//* -> nest new first-nestjs-app
//* This file is the entry point of your NestJS application

dotenv.config();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    //? Enable validation globally for all route handlers
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true, //? Strip properties that do not have any decorators
        })
    );

    await app.listen(5001);
}
void bootstrap();
