/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service'
import { ThrottlerModule } from '@nestjs/throttler';
import { User } from './core/entity/auth';

import { RefreshTokenModule } from './modules/refresh-token/refresh-token.module';
import { UserModule } from './modules/user/user.module';
import { RefreshToken } from './core/entity/refresh-token';
import { AuthModule } from './modules/auth/auth.module';



@Module({
  imports: [
    UserModule,
    AuthModule,
    RefreshTokenModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '123456',
      database: 'blog',
      entities: [User, RefreshToken],
      synchronize: true,
      logging: true
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.dev'
    }),
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 10,
    }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
