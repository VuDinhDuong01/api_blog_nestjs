/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { RefreshTokenController } from './refresh-token.controller';
import { SecretAdapter } from 'src/libs/secret/adapter';
import { ITokenAdapter } from 'src/libs/token/adapter';
import { RefreshTokenUseCase } from 'src/core/use-case/auth/refresh-token';

import { SecretModule } from 'src/libs/secret/secret.module';
import { TokenModule } from 'src/libs/token/token.module';
import { VerifyRefreshTokenMiddleware } from 'src/common/middlewares/verify-refresh-token.middleware';
import { Repository } from 'typeorm';
import { RefreshToken } from 'src/core/entity/refresh-token';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { IRefreshTokenAdapter } from './adapter';


@Module({
  controllers: [RefreshTokenController],
  imports: [SecretModule, TokenModule, TypeOrmModule.forFeature([RefreshToken])],
  providers: [
    {
      provide: IRefreshTokenAdapter,
      useFactory: (secretService: SecretAdapter, tokenService: ITokenAdapter, refreshTokenModel:Repository<RefreshToken>) => new RefreshTokenUseCase(secretService, tokenService,refreshTokenModel),
      inject: [SecretAdapter, ITokenAdapter,getRepositoryToken(RefreshToken)]
    }
  ]
})
export class RefreshTokenModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(VerifyRefreshTokenMiddleware)
      .forRoutes(RefreshTokenController);
  }
}
