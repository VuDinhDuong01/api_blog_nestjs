/* eslint-disable prettier/prettier */

import { IToken, MenuDTO } from "src/dtos/menu.dto";


export abstract class CreateMenuAdapter {
    abstract execute(input: MenuDTO, user: IToken): Promise<any>
}

export abstract class UpdateMenuAdapter {
    abstract execute(input:MenuDTO, user:IToken, id: string ): Promise<any>
}

export abstract class DeleteMenuAdapter {
    abstract execute(input: string): Promise<{message: string }>
}