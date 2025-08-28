import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//* This file is the entry point of your NestJS application
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(5001);
}
void bootstrap();
