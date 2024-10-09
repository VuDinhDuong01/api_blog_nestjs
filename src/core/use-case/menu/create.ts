/* eslint-disable prettier/prettier */
import { Menu } from "src/core/entity/menu";
import { IToken, MenuDTO } from "src/dtos/menu.dto";
import { CreateMenuAdapter } from "src/modules/menu/adapter";
import { ForbiddenException } from "src/utils/base-exception";
import { Repository } from "typeorm";

export class CreateMenuUseCase implements CreateMenuAdapter {
    constructor(private readonly modelMenu:Repository<Menu>){}
   async  execute(input:MenuDTO, user:IToken): Promise<any> {
        const findMenuExit=  await this.modelMenu.findOne({
            where:{
                title: input.title
            }
        })

        if(findMenuExit){
            throw new ForbiddenException('Menu đã tồn tại')
        }
        const payload = Object.assign(input, {createdBy:  user.id})
        await this.modelMenu.save(payload)
        return payload

    }

}