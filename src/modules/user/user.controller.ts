/* eslint-disable prettier/prettier */
import { Body, Controller, Post,  Version } from '@nestjs/common';
import { ILoginAdapter, IRegisterAdapter } from './adapter';
import { UserDTO } from 'src/Dtos/user.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { userRequestSwagger } from 'src/docs/swagger/user-swagger';

@Controller('api/auth')
export class UserController {
    constructor(
        private readonly registerAdapter: IRegisterAdapter,
        private readonly loginAdapter: ILoginAdapter
    ) { }
    @Post('register')
    @ApiTags('user')
    @Version('1')
    @ApiBody(userRequestSwagger.register)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    register(@Body() input: Pick<UserDTO, 'email' | 'password' | 'username'>) {
        return this.registerAdapter.execute(input)
    }

    @Post()
    @Version('v1')
    @ApiBody(userRequestSwagger.register)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    login(@Body() input: Pick<UserDTO, 'email' | 'password'>) {
        return this.loginAdapter.execute(input)
    }
}
