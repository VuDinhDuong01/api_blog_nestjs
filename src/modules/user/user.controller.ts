/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, Req, UploadedFile, UseGuards, UseInterceptors, Version } from '@nestjs/common';

import { IDeleteManyUserAdapter, IDeleteOneUserAdapter, IGetMeAdapter, IImportUserAdapter, ILogoutAdapter, IUpdateUserAdapter } from './adapter';
import { ApiBody, ApiResponse, ApiTags, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { userRequestSwagger, userResponseSwagger } from 'src/docs/swagger/user-swagger';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorator/roles.decorator';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('api/auth')
@ApiBearerAuth()

export class UserController {
    constructor(
        private readonly IGetMeAdapter: IGetMeAdapter,
        private readonly ILogoutAdapter: ILogoutAdapter,
        private readonly IUpdateUserAdapter: IUpdateUserAdapter,
        private readonly IDeleteOneUserAdapter: IDeleteOneUserAdapter,
        private readonly IDeleteManyUserAdapter: IDeleteManyUserAdapter,
        private readonly IImportUserAdapter: IImportUserAdapter
    ) { }

    @Get('get-me')
    @Version('1')
    @ApiTags('user')
    @ApiResponse(userResponseSwagger.getMe[200])
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    getMe(@Req() input: any) {
        return this.IGetMeAdapter.execute(input.user)
    }


    @Post('logout')
    @Version('1')
    @ApiTags('user')
    @ApiBody(userRequestSwagger.logout)
    @ApiResponse(userResponseSwagger.logout[200])
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    logout(@Body() input: { refresh_token: string }) {
        return this.ILogoutAdapter.execute(input)
    }

    @Put('update/:id')
    @Version('1')
    @ApiTags('user')
    @ApiBody(userRequestSwagger.updateUserBody)
    @ApiParam(userRequestSwagger.updateUserParams)
    @ApiResponse(userResponseSwagger.updateUser[200])
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    updateUser(@Body() inputBody: any, @Param() inputParam: { id: string }, @Req() inputRequest: any) {
        return this.IUpdateUserAdapter.execute(inputBody, inputParam, inputRequest.user)
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    @Delete('delete-user/:id')
    @Version('1')
    @ApiTags('user')
    @ApiParam(userRequestSwagger.updateUserParams)
    @ApiResponse(userResponseSwagger.deleteUser[200])

    deleteUser(@Param() { id }: { id: string }) {
        return this.IDeleteOneUserAdapter.execute(id)
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    @ApiBody(userRequestSwagger.deleteManyUser)
    @ApiResponse(userResponseSwagger.deleteUser[200])
    @ApiTags('user')
    @Delete('delete-many-user')
    @Version('1')
    deleteManyUser(@Body() { body }) {
        return this.IDeleteManyUserAdapter.execute(body.ids)
    }
    
    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    @ApiBody(userRequestSwagger.importUser)
    @ApiResponse(userResponseSwagger.importUser[200])
    @ApiTags('user')
    @Post('import-user')
    @Version('1')
    @UseInterceptors(FileInterceptor('file'))
    importUser(@UploadedFile() file: Express.Multer.File) {
        return this.IImportUserAdapter.execute(file)
    }
}
