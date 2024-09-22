/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Req, Version } from '@nestjs/common';
import { IRefreshTokenAdapter } from './adapter';


@Controller('api/auth')
export class RefreshTokenController {
    constructor(private readonly IRefreshTokenAdapter: IRefreshTokenAdapter) { }
    @Post('refresh-token')
    @Version('1')
    // @ApiBody(userRequestSwagger.register)
    // @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    // @ApiResponse({ status: 403, description: 'Forbidden.' })
    refreshToken(@Body() inputBody: {
        token: string,
    }, @Req() req: any) {
        return this.IRefreshTokenAdapter.execute(inputBody,req.decode_token)
    }
}
