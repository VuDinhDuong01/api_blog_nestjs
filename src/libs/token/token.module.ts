import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { RegisterUserCase } from 'src/core/use-case/user/register';
import { ITokenAdapter } from './adapter';
import { TokenUseCase } from 'src/core/use-case/token/token';

@Module({
    providers: [{
        provide: ITokenAdapter,
        useFactory: () => new TokenUseCase(),
        inject: []
    }],
    exports: [ITokenAdapter]
})
export class UserModule { }