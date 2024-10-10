/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { CreateMenuAdapter, DeleteMenuAdapter, GetAllMenuAdapter, UpdateMenuAdapter } from './adapter';
import { CreateMenuUseCase } from 'src/core/use-case/menu/create';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from 'src/core/entity/menu';
import { Repository } from 'typeorm';
import { VerifyAccessTokenMiddleware } from 'src/common/middlewares/verify-access-token.middleware';
import { UpdateMenuUseCase } from 'src/core/use-case/menu/update';
import { DeleteMenuUseCase } from 'src/core/use-case/menu/delete';
import { SecretModule } from 'src/libs/secret/secret.module';
import { TokenModule } from 'src/libs/token/token.module';
import { GetAllMenuUseCase } from 'src/core/use-case/menu/get-all';

@Module({
  imports:[TypeOrmModule.forFeature([Menu]), SecretModule,TokenModule],
  controllers: [MenuController],
  providers:[
    {
      provide: CreateMenuAdapter,
      useFactory:(modelMenu:Repository<Menu>)=> new  CreateMenuUseCase(modelMenu),
      inject:[getRepositoryToken(Menu)]
    },
    {
      provide: UpdateMenuAdapter,
      useFactory:(modelMenu:Repository<Menu>)=> new  UpdateMenuUseCase(modelMenu),
      inject:[getRepositoryToken(Menu)]
    },{
      provide: DeleteMenuAdapter,
      useFactory: (modelMenu:Repository<Menu>)=> new  DeleteMenuUseCase(modelMenu),
      inject:[getRepositoryToken(Menu)]
    },{
      provide: GetAllMenuAdapter,
      useFactory:(modelMenu:Repository<Menu>)=> new GetAllMenuUseCase(modelMenu),
      inject:[getRepositoryToken(Menu)]
    }
  ]
})

export class MenuModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(VerifyAccessTokenMiddleware)
      .forRoutes(MenuController);
  }
}
