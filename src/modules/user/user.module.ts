import { Inject, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ILoginAdapter, IRegisterAdapter } from './adapter';
import { RegisterUserCase } from 'src/core/use-case/register';
import { LoginUserCase } from 'src/core/use-case/login';

@Module({
  providers: [{
    provide: IRegisterAdapter,
    useFactory: () => new RegisterUserCase(),
    inject: []
  }, {
    provide: ILoginAdapter,
    useFactory: () => new LoginUserCase(),
    inject: []
  }],
  controllers: [UserController]
})
export class UserModule { }
