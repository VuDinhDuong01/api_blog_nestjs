/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as express from 'express';
// import * as csurf from 'csurf';
import { ValidationPipe, VersioningType } from '@nestjs/common';
declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors();
  // app.use(csurf());
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,      
  }));
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.enableVersioning({
    type: VersioningType.URI
  })
  await app.listen(4000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
