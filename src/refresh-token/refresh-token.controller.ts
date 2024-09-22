/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Version } from '@nestjs/common';
import { IRefreshTokenAdapter } from 'src/modules/user/adapter';

@Controller('api/auth')
export class RefreshTokenController {
    constructor(private readonly IRefreshTokenAdapter:IRefreshTokenAdapter){}
    @Post('refresh-token')
    @Version('1')
    // @ApiBody(userRequestSwagger.register)
    // @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    // @ApiResponse({ status: 403, description: 'Forbidden.' })
    refreshToken(@Body() input: {
        token: string , 
    }) {
        return this.IRefreshTokenAdapter.execute(input)
    }
}
