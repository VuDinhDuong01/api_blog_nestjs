/* eslint-disable prettier/prettier */
import {  Body, Controller, Get,  Param,  Post,  Put,  Req, Version } from '@nestjs/common';

import { IGetMeAdapter, ILogoutAdapter, IUpdateUserAdapter} from './adapter';
import { ApiBody, ApiResponse, ApiTags, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { userRequestSwagger, userResponseSwagger } from 'src/docs/swagger/user-swagger';

@Controller('api/auth')
export class UserController {
    constructor(
        private readonly IGetMeAdapter:IGetMeAdapter, 
        private readonly ILogoutAdapter:ILogoutAdapter,
        private readonly IUpdateUserAdapter:IUpdateUserAdapter
    ){}

    @Get('get-me')
    @Version('1')
    @ApiTags('user')
    @ApiBearerAuth()
    @ApiResponse(userResponseSwagger.getMe[200])
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    getMe(@Req() input:any){
        return this.IGetMeAdapter.execute(input.user)
    }


    @Post('logout')
    @Version('1')
    @ApiTags('user')
    @ApiBearerAuth()
    @ApiBody(userRequestSwagger.logout)
    @ApiResponse(userResponseSwagger.logout[200])
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    logout(@Body() input:{refresh_token: string }){
        return this.ILogoutAdapter.execute(input)  
    }

    @Put('update/:id')
    @Version('1')
    @ApiTags('user')
    @ApiBearerAuth()
    @ApiBody(userRequestSwagger.updateUserBody)
    @ApiParam(userRequestSwagger.updateUserParams)
    @ApiResponse(userResponseSwagger.updateUser[200])
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    updateUser(@Body() inputBody:any,@Param() inputParam: {id: string },@Req() inputRequest:any){
        return this.IUpdateUserAdapter.execute(inputBody,inputParam, inputRequest.user)  
    }
}
