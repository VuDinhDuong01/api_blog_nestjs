import { Controller, Post, Req, Version } from '@nestjs/common';
import { ILoginAdapter, IRegisterAdapter } from './adapter';
import { UserDTO } from 'src/Dtos/user.dto';
import { ApiBody, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { userRequestSwagger } from 'src/docs/swagger/user-swagger';

@Controller('user')
export class UserController {
    constructor(
        private readonly registerAdapter: IRegisterAdapter,
        private readonly loginAdapter: ILoginAdapter
    ) { }
    @Post()
    @ApiTags('user')
    @Version('v1')
    @ApiBody(userRequestSwagger.register)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    register(@Req() input: Pick<UserDTO, 'email' | 'password' | 'username'>) {
        return this.registerAdapter.execute(input)
    }

    @Post()
    @Version('v1')
    @ApiBody(userRequestSwagger.register)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    login(@Req() input: Pick<UserDTO, 'email' | 'password'>) {
        return this.loginAdapter.execute(input)
    }
}
