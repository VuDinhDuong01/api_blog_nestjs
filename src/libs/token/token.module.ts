/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

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
export class TokenModule { }