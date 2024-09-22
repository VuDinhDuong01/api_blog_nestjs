/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { IForgotPassAdapter, ILoginAdapter, IRefreshTokenAdapter, IRegisterAdapter, IVerifyEmailAdapter } from './adapter';
import { RegisterUserCase } from 'src/core/use-case/user/register';
import { LoginUserCase } from 'src/core/use-case/user/login';
import { Repository } from 'typeorm';
import { User } from 'src/core/entity/auth';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { MailModule } from 'src/libs/mail/mail.module';
import { MailService } from 'src/libs/mail/mail.service';
import { VerifyEmailUseCase } from 'src/core/use-case/user/verify-email';
import { SecretModule } from 'src/libs/secret/secret.module';
import { TokenModule } from 'src/libs/token/token.module';
import { ITokenAdapter } from 'src/libs/token/adapter';
import { SecretAdapter } from 'src/libs/secret/adapter';
import { RefreshTokenUseCase } from 'src/core/use-case/user/refresh-token';
import { ForgotPassUseCase } from 'src/core/use-case/user/reset-password';

@Module({
  imports :[TypeOrmModule.forFeature([User]),MailModule,SecretModule,TokenModule],
  providers: [{
    provide: IRegisterAdapter,
    useFactory: (repository:Repository<User>,sendMailService:MailService ) => new RegisterUserCase(repository,sendMailService),
    inject: [getRepositoryToken(User),MailService]
  }, {
    provide: ILoginAdapter,
    useFactory: (repository:Repository<User>, secretService:SecretAdapter, tokenService:ITokenAdapter ) => new LoginUserCase(repository,secretService,tokenService),
    inject: [getRepositoryToken(User),SecretAdapter,ITokenAdapter]
  },{
    provide:IVerifyEmailAdapter,
    useFactory:(repository: Repository<User>)=> new VerifyEmailUseCase(repository),
    inject:[getRepositoryToken(User)]
  },{
    provide: IRefreshTokenAdapter,
    useFactory:(secretService:SecretAdapter,tokenService:ITokenAdapter)=> new RefreshTokenUseCase(secretService,tokenService),
    inject:[SecretAdapter,ITokenAdapter]
  },
  {
    provide: IForgotPassAdapter,
    useFactory:(repository: Repository<User>,sendMailService:MailService)=> new ForgotPassUseCase(repository,sendMailService),
    inject:[getRepositoryToken(User),MailService]
  },
],
  controllers: [UserController]
})
export class UserModule { }
