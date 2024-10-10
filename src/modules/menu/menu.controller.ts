/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, Req, Request, Version } from '@nestjs/common';
import { CreateMenuAdapter, DeleteMenuAdapter, GetAllMenuAdapter, UpdateMenuAdapter } from './adapter';
import { MenuDTO } from 'src/dtos/menu.dto';

@Controller('api')
export class MenuController {
    constructor(
        private readonly CreateMenuAdapter: CreateMenuAdapter,
        private readonly UpdateMenuAdapter: UpdateMenuAdapter,
        private readonly DeleteMenuAdapter: DeleteMenuAdapter,
        private readonly GetAllMenuAdapter: GetAllMenuAdapter
    ) { }
    @Post('menu')
    @Version('1')
    create(@Body() body: MenuDTO, @Request() { user }) {
        return this.CreateMenuAdapter.execute(body, user)
    }

    @Put('menu/:id')
    @Version('1')
    update(@Body() body, @Request() user, @Param() { id }) {
        return this.UpdateMenuAdapter.execute(body, user, id)
    }

    @Delete('menu/:id')
    @Version('1')
    delete(@Param() { id }) {
        return this.DeleteMenuAdapter.execute(id)
    }

    @Get('menu')
    @Version('1')
    getAll(@Req() { body }) {
        console.log("body", body)
        return this.GetAllMenuAdapter.execute(body)
    }

}
