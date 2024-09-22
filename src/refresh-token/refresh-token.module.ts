/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { RefreshTokenController } from './refresh-token.controller';
import { IRefreshTokenAdapter } from 'src/modules/auth/adapter';
import { SecretAdapter } from 'src/libs/secret/adapter';
import { ITokenAdapter } from 'src/libs/token/adapter';
import { RefreshTokenUseCase } from 'src/core/use-case/user/refresh-token';

import { SecretModule } from 'src/libs/secret/secret.module';
import { TokenModule } from 'src/libs/token/token.module';
import { VerifyRefreshTokenMiddleware } from 'src/common/middlewares/verify-refresh-token.middleware';


@Module({
  controllers: [RefreshTokenController],
  imports: [SecretModule, TokenModule],
  providers: [
    {
      provide: IRefreshTokenAdapter,
      useFactory: (secretService: SecretAdapter, tokenService: ITokenAdapter) => new RefreshTokenUseCase(secretService, tokenService),
      inject: [SecretAdapter, ITokenAdapter]
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
