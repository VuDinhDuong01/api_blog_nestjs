import { Module } from '@nestjs/common';

import { SecretService } from './secret.service';
import { SecretAdapter } from './adapter';

@Module({
    providers: [{
        provide:SecretAdapter,
        useClass:SecretService
    }],
    exports: [SecretService]
})
export class SecretModule { }