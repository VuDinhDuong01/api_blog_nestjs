import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as csurf from 'csurf';
import { ValidationPipe } from '@nestjs/common';
declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors();
  app.use(csurf());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(4000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
