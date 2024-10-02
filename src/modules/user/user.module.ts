/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserController } from './user.controller';
import { IDeleteManyUserAdapter, IDeleteOneUserAdapter, IGetMeAdapter, IImportUserAdapter, ILogoutAdapter, IUpdateUserAdapter } from './adapter';
import { GetMeUseCase } from 'src/core/use-case/user/get-me';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/core/entity/auth';
import { Repository } from 'typeorm';
import { VerifyAccessTokenMiddleware } from 'src/common/middlewares/verify-access-token.middleware';
import { ITokenAdapter } from 'src/libs/token/adapter';
import { SecretAdapter } from 'src/libs/secret/adapter';
import { TokenUseCase } from 'src/core/use-case/token/token';
import { SecretService } from 'src/libs/secret/secret.service';
import { LogoutUseCase } from 'src/core/use-case/user/logout';
import { UpdateUserUseCase } from 'src/core/use-case/user/update-me';
import { RefreshToken } from 'src/core/entity/refresh-token';
import { DeleteUserUseCase } from 'src/core/use-case/user/delete-user';
import { ImportUserCase } from 'src/core/use-case/user/import-user';

@Module({
  imports:[TypeOrmModule.forFeature([User,RefreshToken])],
  providers:[
    {
      provide:IGetMeAdapter,
      useFactory:(userModel:Repository<User>)=> new GetMeUseCase(userModel),
      inject:[getRepositoryToken(User)]
    },{
      provide:ILogoutAdapter,
      useFactory:(refreshTokenModel:Repository<RefreshToken>)=> new LogoutUseCase(refreshTokenModel),
      inject:[getRepositoryToken(RefreshToken)]
    },
    {
      provide:IUpdateUserAdapter,
      useFactory:(userModel:Repository<User>)=> new UpdateUserUseCase (userModel),
      inject:[getRepositoryToken(User)]
    },
    {
      provide: IDeleteOneUserAdapter,
      useFactory:(userModel: Repository<User>)=> new DeleteUserUseCase(userModel),
      inject:[getRepositoryToken(User)]
    },
    {
      provide:IDeleteManyUserAdapter,
      useFactory: (userModel: Repository<User>)=> new DeleteUserUseCase(userModel),
      inject:[getRepositoryToken(User)]

    },
    {
      provide:IImportUserAdapter,
      useFactory:(userModel:Repository<User>)=> new ImportUserCase(userModel),
      inject:[getRepositoryToken(User)]
    },
    {
      provide: ITokenAdapter,
      useClass: TokenUseCase 
    },
    {
      provide: SecretAdapter,    
      useClass: SecretService
    }

  ],
  controllers: [UserController]
})

export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(VerifyAccessTokenMiddleware)
      .forRoutes(UserController);
  }
}
