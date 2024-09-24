/* eslint-disable prettier/prettier */
import {  Body, Controller, Delete, Get,  Param,  Post,  Put,  Req, Version } from '@nestjs/common';

import { IDeleteManyUserAdapter, IDeleteOneUserAdapter, IGetMeAdapter, ILogoutAdapter, IUpdateUserAdapter} from './adapter';
import { ApiBody, ApiResponse, ApiTags, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { userRequestSwagger, userResponseSwagger } from 'src/docs/swagger/user-swagger';

@Controller('api/auth')
@ApiBearerAuth()
export class UserController {
    constructor(
        private readonly IGetMeAdapter:IGetMeAdapter, 
        private readonly ILogoutAdapter:ILogoutAdapter,
        private readonly IUpdateUserAdapter:IUpdateUserAdapter,
        private readonly IDeleteOneUserAdapter:IDeleteOneUserAdapter,
        private readonly IDeleteManyUserAdapter:IDeleteManyUserAdapter
    ){}

    @Get('get-me')
    @Version('1')
    @ApiTags('user') 
    @ApiResponse(userResponseSwagger.getMe[200])
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    getMe(@Req() input:any){
        return this.IGetMeAdapter.execute(input.user)
    }


    @Post('logout')
    @Version('1')
    @ApiTags('user')
    @ApiBody(userRequestSwagger.logout)
    @ApiResponse(userResponseSwagger.logout[200])
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    logout(@Body() input:{refresh_token: string }){
        return this.ILogoutAdapter.execute(input)  
    }

    @Put('update/:id')
    @Version('1')
    @ApiTags('user')
    @ApiBody(userRequestSwagger.updateUserBody)
    @ApiParam(userRequestSwagger.updateUserParams)
    @ApiResponse(userResponseSwagger.updateUser[200])
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    updateUser(@Body() inputBody:any,@Param() inputParam: {id: string },@Req() inputRequest:any){
        return this.IUpdateUserAdapter.execute(inputBody,inputParam, inputRequest.user)  
    }


    @Delete(':id')
    @Version('1')
    deleteUser(@Param() {id}:{id: string }){
        return this.IDeleteOneUserAdapter.execute(id)
    }


    @Delete('delete-many-user')
    @Version('1')
    deleteManyUser(@Body() {body}:{body: string[]}){
        return this.IDeleteManyUserAdapter.execute(body)
    }
}
