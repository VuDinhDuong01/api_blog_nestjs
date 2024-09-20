import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ILoginAdapter, IRegisterAdapter } from './adapter';
import { RegisterUserCase } from 'src/core/use-case/user/register';
import { LoginUserCase } from 'src/core/use-case/user/login';
import { Repository } from 'typeorm';
import { User } from 'src/core/entity/auth';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports :[TypeOrmModule.forFeature([User])],
  providers: [{
    provide: IRegisterAdapter,
    useFactory: (repository:Repository<User>) => new RegisterUserCase(repository),
    inject: [getRepositoryToken(User)]
  }, {
    provide: ILoginAdapter,
    useFactory: () => new LoginUserCase(),
    inject: []
  }],
  controllers: [UserController]
})
export class UserModule { }
