/* eslint-disable prettier/prettier */


/* eslint-disable prettier/prettier */

import { Menu } from "src/core/entity/menu";
import { GetAllMenuAdapter } from "src/modules/menu/adapter"
import { BodyGeneralProps } from "src/types/general.types";
import { customQueryBuilder } from "src/utils/custom-query-builder";
import { totalKey } from "src/utils/utils";
import { Repository } from "typeorm";

export class GetAllMenuUseCase implements GetAllMenuAdapter {
    constructor(private readonly modelMenu: Repository<Menu>) { }
    async execute(payload: BodyGeneralProps): Promise<any> {
        const limit=payload.limit
        const start= payload.start
        const sort= payload.sort
        const conditions= totalKey(payload.conditions , 'menu')
        return customQueryBuilder({start,sort,limit,model:this.modelMenu, tag:'menu' , conditions})
    }
}