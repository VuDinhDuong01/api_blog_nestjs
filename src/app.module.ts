/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
const defaultOptions = {
  type: 'postgres',
  host:'localhost',
  port: 5433,
  username: 'postgres',
  password: '123456',
  entities: [User],
  database: 'blog',
  synchronize: true,
};
@Module({
  imports: [  
    UserModule,
    TypeOrmModule.forRoot(defaultOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
