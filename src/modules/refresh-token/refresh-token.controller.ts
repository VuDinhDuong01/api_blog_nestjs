/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Req, Version } from '@nestjs/common';
import { IRefreshTokenAdapter } from './adapter';
import { ApiBody, ApiResponse, ApiTags, } from '@nestjs/swagger';
import { userRequestSwagger, userResponseSwagger } from 'src/docs/swagger/user-swagger';


@Controller('api/auth')
export class RefreshTokenController {
    constructor(private readonly IRefreshTokenAdapter: IRefreshTokenAdapter) { }
    @Post('refresh-token')
    @Version('1')
    @ApiTags('auth')
    @ApiBody(userRequestSwagger.refreshToken)
    @ApiResponse(userResponseSwagger.refreshToken[200])
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    refreshToken(@Body() inputBody: {
        token: string,
    }, @Req() req: any) {
        return this.IRefreshTokenAdapter.execute(inputBody,req.decode_token)
    }
}
