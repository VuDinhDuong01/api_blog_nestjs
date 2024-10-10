/* eslint-disable prettier/prettier */


/* eslint-disable prettier/prettier */

import { Menu } from "src/core/entity/menu";
import { GetAllMenuAdapter } from "src/modules/menu/adapter"
import { customQueryBuilder } from "src/utils/custom-query-builder";
import { totalKey } from "src/utils/utils";
import { Repository } from "typeorm";

export class GetAllMenuUseCase implements GetAllMenuAdapter {
    // const payload ={
    //     limit:10, 
    //     start:0,
    //     sortBy:'',
    //     conditions:[
    //         {
    //             key:'name', value:['xin chao']
    //         },{
    //             key:'title', value:['xin chao']
    //         }
    //     ]
    // }
    constructor(private readonly modelMenu: Repository<Menu>) { }
    async execute(payload: any): Promise<any> {
        const limit=payload.limit
        const start= payload.start
        const sort= payload.sort
        const conditions= totalKey(payload.conditions , 'menu')
        return customQueryBuilder({start,sort,limit,model:this.modelMenu, tag:'menu' , conditions})
    }

}