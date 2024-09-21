/* eslint-disable prettier/prettier */
import { Body, Controller, Post,  Version } from '@nestjs/common';
import { ILoginAdapter, IRegisterAdapter, IVerifyEmailAdapter } from './adapter';
import { UserDTO } from 'src/Dtos/user.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { userRequestSwagger } from 'src/docs/swagger/user-swagger';

@Controller('api/auth')
export class UserController {
    constructor(
        private readonly registerAdapter: IRegisterAdapter,
        private readonly loginAdapter: ILoginAdapter,
        private readonly IVerifyEmailAdapter: IVerifyEmailAdapter
    ) { }
    @Post('register')
    @ApiTags('user')
    @Version('1')
    @ApiBody(userRequestSwagger.register)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    register(@Body() input: UserDTO) {
        return this.registerAdapter.execute(input)
    }

    @Post('verify-email')
     @Version('1')
    // @ApiBody(userRequestSwagger.register)
    // @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    // @ApiResponse({ status: 403, description: 'Forbidden.' })
    verifyEmail(@Body() input:{id: string, token : string }) {
        return this.IVerifyEmailAdapter.execute(input)
    }

    @Post('login')
    @Version('1')
    // @ApiBody(userRequestSwagger.register)
    // @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    // @ApiResponse({ status: 403, description: 'Forbidden.' })
    login(@Body() input: {
        email: string , 
        password: string 
    }) {
        return this.loginAdapter.execute(input)
    }
}
