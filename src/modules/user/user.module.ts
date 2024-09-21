/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ILoginAdapter, IRegisterAdapter, IVerifyEmailAdapter } from './adapter';
import { RegisterUserCase } from 'src/core/use-case/user/register';
import { LoginUserCase } from 'src/core/use-case/user/login';
import { Repository } from 'typeorm';
import { User } from 'src/core/entity/auth';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { MailModule } from 'src/libs/mail/mail.module';
import { MailService } from 'src/libs/mail/mail.service';
import { VerifyEmailUseCase } from 'src/core/use-case/user/verify-email';

@Module({
  imports :[TypeOrmModule.forFeature([User]),MailModule],
  providers: [{
    provide: IRegisterAdapter,
    useFactory: (repository:Repository<User>,sendMailService:MailService ) => new RegisterUserCase(repository,sendMailService),
    inject: [getRepositoryToken(User),MailService]
  }, {
    provide: ILoginAdapter,
    useFactory: () => new LoginUserCase(),
    inject: []
  },{
    provide:IVerifyEmailAdapter,
    useFactory:(repository: Repository<User>)=> new VerifyEmailUseCase(repository),
    inject:[getRepositoryToken(User)]
  }],
  controllers: [UserController]
})
export class UserModule { }
