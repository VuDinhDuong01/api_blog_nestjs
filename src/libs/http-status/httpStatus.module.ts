/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { HttpStatusAdapter } from './adapter';
import { HttpStatusService } from './httpStatus.service';

@Module({
    providers: [
        {
            provide: HttpStatusAdapter,
            useClass: HttpStatusService
        }
    ],
    exports: [HttpStatusAdapter],
})
export class HttpStatusModule { }