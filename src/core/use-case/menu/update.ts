/* eslint-disable prettier/prettier */
import { Menu } from "src/core/entity/menu";
import { IToken, MenuDTO } from "src/dtos/menu.dto";
import { UpdateMenuAdapter } from "src/modules/menu/adapter";
import { ForbiddenException } from "src/utils/base-exception";
import { Repository } from "typeorm";

export class UpdateMenuUseCase implements UpdateMenuAdapter {
    constructor(private readonly modelMenu: Repository<Menu>) { }
    async execute(input: MenuDTO, user: IToken, id: string): Promise<any> {
        const findMenuExit = await this.modelMenu.findOne({
            where: {
                id: id
            }
        })
        if (!findMenuExit) {
            throw new ForbiddenException('Menu không tồn tại')
        }
        const payload = Object.assign(findMenuExit, input, { updatedBy: user.id })
        await this.modelMenu.save(payload)
        return payload

    }

}