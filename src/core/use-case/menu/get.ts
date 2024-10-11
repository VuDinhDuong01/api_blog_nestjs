/* eslint-disable prettier/prettier */


/* eslint-disable prettier/prettier */

import { Menu } from "src/core/entity/menu";
import { GetMenuAdapter } from "src/modules/menu/adapter"
import { ForbiddenException } from "src/utils/base-exception";
import { Repository } from "typeorm";

export class GetMenuUseCase implements GetMenuAdapter {
    constructor(private readonly modelMenu: Repository<Menu>) { }
    async execute(id: string ): Promise<any> {
        const menu= await this.modelMenu.findOne({where:{
            id
        }})
        if(!menu) {
            throw new ForbiddenException('Không tìm thấy menu.')
        }
        return {
            message:'get menu success',
            records: menu
        }
    }
}