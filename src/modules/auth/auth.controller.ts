/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Version } from '@nestjs/common';
import { IForgotPassAdapter, ILoginAdapter, IRegisterAdapter, IResetPassAdapter, IVerifyEmailAdapter } from './adapter';
import { ResetPassDTO, UserDTO } from 'src/dtos/user.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { userRequestSwagger, userResponseSwagger } from 'src/docs/swagger/user-swagger';

@Controller('api/auth')
export class AuthController {
    constructor(
        private readonly registerAdapter: IRegisterAdapter,
        private readonly loginAdapter: ILoginAdapter,
        private readonly IVerifyEmailAdapter: IVerifyEmailAdapter,
        private readonly IForgotPassAdapter: IForgotPassAdapter,
        private readonly IResetPassAdapter: IResetPassAdapter
    ) { }
    @Post('register')
    @ApiTags('auth')
    @Version('1')
    @ApiBody(userRequestSwagger.register)
    @ApiResponse(userResponseSwagger.register[200])
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    register(@Body() input: UserDTO) {
        return this.registerAdapter.execute(input)
    }

    @Post('verify-email')
    @Version('1')
    @ApiTags('auth')
    @ApiBody(userRequestSwagger.verifyEmail)
    @ApiResponse(userResponseSwagger.verifyEmail[200])
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    verifyEmail(@Body() input: { id: string, token: string }) {
        return this.IVerifyEmailAdapter.execute(input)
    }

    @Post('login')
    @ApiTags('auth')
    @Version('1')
    @ApiBody(userRequestSwagger.login)
    @ApiResponse(userResponseSwagger.login[200])
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    login(@Body() input: {
        email: string,
        password: string
    }) {
        return this.loginAdapter.execute(input)
    }

    @Post('forgot-password')
    @Version('1')
    @ApiTags('auth')
    @ApiBody(userRequestSwagger.register)
    @ApiResponse(userResponseSwagger.forgotPass[200])
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    forgotPass(@Body() input: {
        email: string,
    }) {
        return this.IForgotPassAdapter.execute(input)
    }

    @Post('reset-password')
    @Version('1')
    @ApiBody(userRequestSwagger.resetPass)
    @ApiTags('auth')
    @ApiResponse(userResponseSwagger.resetPass[200])
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    resetPassword(@Body() input: ResetPassDTO) {
        return this.IResetPassAdapter.execute(input)
    }
}
