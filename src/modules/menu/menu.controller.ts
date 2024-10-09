/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Param, Post, Put, Request, Version } from '@nestjs/common';
import { CreateMenuAdapter, DeleteMenuAdapter, UpdateMenuAdapter } from './adapter';
import { MenuDTO } from 'src/dtos/menu.dto';

@Controller('api')
export class MenuController {
    constructor(
        private readonly CreateMenuAdapter:CreateMenuAdapter,
        private readonly UpdateMenuAdapter:UpdateMenuAdapter,
        private readonly DeleteMenuAdapter:DeleteMenuAdapter
    ){}
    @Post('menu')
    @Version('1')
    create(@Body() body:MenuDTO, @Request() {user}){
        return this.CreateMenuAdapter.execute(body, user)
    }

    @Put('menu/:id')
    @Version('1')
    update(@Body() body, @Request() user , @Param() {id}){
        return this.UpdateMenuAdapter.execute(body, user,id)
    }

    @Delete('menu/:id')
    @Version('1')
   delete(@Param() {id}){
    return this.DeleteMenuAdapter.execute(id)
   }

}
