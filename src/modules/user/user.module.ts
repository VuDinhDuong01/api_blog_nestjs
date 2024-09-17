import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ILoginAdapter, IRegisterAdapter } from './adapter';
import { RegisterUserCase } from 'src/core/use-case/user/register';
import { LoginUserCase } from 'src/core/use-case/user/login';
import { Repository } from 'typeorm';
import { User } from 'src/core/entity/auth';

@Module({
  providers: [{
    provide: IRegisterAdapter,
    useFactory: (repository:Repository<User>) => new RegisterUserCase(repository),
    inject: []
  }, {
    provide: ILoginAdapter,
    useFactory: () => new LoginUserCase(),
    inject: []
  }],
  controllers: [UserController]
})
export class UserModule { }
