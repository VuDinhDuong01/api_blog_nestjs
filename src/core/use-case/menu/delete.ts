/* eslint-disable prettier/prettier */


/* eslint-disable prettier/prettier */

import { Menu } from "src/core/entity/menu";
import { DeleteMenuAdapter } from "src/modules/menu/adapter";
import { ForbiddenException } from "src/utils/base-exception";
import { Repository } from "typeorm";

export class DeleteMenuUseCase implements DeleteMenuAdapter {
    constructor(private readonly modelMenu: Repository<Menu>) { }
    async execute( id: string): Promise<any> {
        const findMenuExit = await this.modelMenu.findOne({
            where: {
                id
            }
        })
        if (!findMenuExit) {
            throw new ForbiddenException('Menu không tồn tại')
        }
        await this.modelMenu.delete(id)
        return {
            message:'delete menu success'
        }

    }

}