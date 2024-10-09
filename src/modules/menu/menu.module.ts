/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { CreateMenuAdapter, DeleteMenuAdapter, UpdateMenuAdapter } from './adapter';
import { CreateMenuUseCase } from 'src/core/use-case/menu/create';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from 'src/core/entity/menu';
import { Repository } from 'typeorm';
import { VerifyAccessTokenMiddleware } from 'src/common/middlewares/verify-access-token.middleware';
import { SecretAdapter } from 'src/libs/secret/adapter';
import { SecretService } from 'src/libs/secret/secret.service';
import { ITokenAdapter } from 'src/libs/token/adapter';
import { TokenUseCase } from 'src/core/use-case/token/token';
import { UpdateMenuUseCase } from 'src/core/use-case/menu/update';
import { DeleteMenuUseCase } from 'src/core/use-case/menu/delete';

@Module({
  imports:[TypeOrmModule.forFeature([Menu])],
  controllers: [MenuController],
  providers:[
    {
      provide: CreateMenuAdapter,
      useFactory:(modelMenu:Repository<Menu>)=> new  CreateMenuUseCase(modelMenu),
      inject:[getRepositoryToken(Menu)]
    },
    {
      provide:SecretAdapter,
      useClass: SecretService
    },{
      provide: ITokenAdapter,
      useClass: TokenUseCase 
    },{
      provide: UpdateMenuAdapter,
      useFactory:(modelMenu:Repository<Menu>)=> new  UpdateMenuUseCase(modelMenu),
      inject:[getRepositoryToken(Menu)]
    },{
      provide: DeleteMenuAdapter,
      useFactory: (modelMenu:Repository<Menu>)=> new  DeleteMenuUseCase(modelMenu),
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
