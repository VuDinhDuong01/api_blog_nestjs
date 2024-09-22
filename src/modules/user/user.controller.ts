/* eslint-disable prettier/prettier */
import {  Body, Controller, Get,  Param,  Post,  Put,  Req, Version } from '@nestjs/common';

import { IGetMeAdapter, ILogoutAdapter, IUpdateUserAdapter} from './adapter';

@Controller('api/auth')
export class UserController {
    constructor(
        private readonly IGetMeAdapter:IGetMeAdapter, 
        private readonly ILogoutAdapter:ILogoutAdapter,
        private readonly IUpdateUserAdapter:IUpdateUserAdapter
    ){}

    @Get('get-me')
    @Version('1')
    getMe(@Req() input:any){
        return this.IGetMeAdapter.execute(input.user)
    }


    @Post('logout')
    @Version('1')
    logout(@Body() input:{refresh_token: string }){
        return this.ILogoutAdapter.execute(input)  
    }

    @Put('update/:id')
    @Version('1')
    updateUser(@Body() inputBody:any,@Param() inputParam: {id: string },@Req() inputRequest:any){
        return this.IUpdateUserAdapter.execute(inputBody,inputParam, inputRequest.user)  
    }
}
