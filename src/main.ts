/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as express from 'express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
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
  // app.use(fileUpload({
  //   createParentPath: true
  // }))

  app.use(express.urlencoded({ extended: true }))
  app.enableVersioning({
    type: VersioningType.URI
  })
  const config = new DocumentBuilder()
    .setTitle('API BLOG SWAGGER')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(4000);


  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
