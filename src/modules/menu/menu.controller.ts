/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, Req, Request, Version } from '@nestjs/common';
import { CreateMenuAdapter, DeleteMenuAdapter, GetAllMenuAdapter, GetMenuAdapter, UpdateMenuAdapter } from './adapter';
import { MenuDTO } from 'src/dtos/menu.dto';
import { BodyGeneralProps } from 'src/types/general.types';

@Controller('api')
export class MenuController {
    constructor(
        private readonly CreateMenuAdapter: CreateMenuAdapter,
        private readonly UpdateMenuAdapter: UpdateMenuAdapter,
        private readonly DeleteMenuAdapter: DeleteMenuAdapter,
        private readonly GetAllMenuAdapter: GetAllMenuAdapter,
        private readonly GetMenuAdapter:GetMenuAdapter
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
    getAll(@Req() { body }:{ body: BodyGeneralProps}) {
        return this.GetAllMenuAdapter.execute(body)
    }


    @Get('menu/:id')
    @Version('1')
    getDetail(@Param() {id}:{id: string }){
        return this.GetMenuAdapter.execute(id)
    }

}
