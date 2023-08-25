import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import {ValidationPipe} from "./common/pipes/validation.pipe";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
